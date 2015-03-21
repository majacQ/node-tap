var glob = require('glob')
var t = require('../lib/root.js')
var spawn = require('child_process').spawn
var node = process.execPath
var fs = require('fs')
var dir = __dirname + '/test/'
var path = require('path')

function regEsc(str) {
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}

if (process.argv[2])
  runTest(path.resolve(dir, process.argv[2]))
else {
  glob.sync(dir + '*.js').forEach(function (file) {
    runTest(file)
  })
}

function runTest (file) {
  var resfile = file.replace(/\.js$/, '\.tap')
  try {
    var want = fs.readFileSync(resfile, 'utf8').split('\n')
  } catch (er) {
    console.error(er)
    console.error(file)
    console.error(resfile)
    return
  }

  t.test(file.substr(dir.length), function (t) {
    var child = spawn(node, [file], {
      stdio: [ 0, 'pipe', 'pipe' ]
    })

    var found = ''

    child.stdout.setEncoding('utf8')
    child.stdout.on('data', function (c) {
      found += c
    })
    child.on('close', function (er) {
      found = found.split('\n')
      // walk line by line so {{{STACK}}} can be handled
      // otherwise making any changes in this lib would hurt
      for (var f = 0, w = 0;
           f < found.length && w < want.length;
           f++, w++) {
        var wline = want[w]
        var fline = found[f]
        if (wline === '{{{STACK}}}') {
          var fstack = new RegExp('^\\s*\\- "').test(fline)

          if (fstack)
            w--
          else
            f--

          continue
        } else {
          var wmatch = wline.match(/\{\{\{\/(.*?)\/\}\}\}/)
          if (wmatch) {
            t.match(fline, new RegExp(
              regEsc(wline.slice(0, wmatch.index)) +
              wmatch[1] +
              regEsc(wline.slice(wmatch.index + wmatch[0].length))
            ), 'line ' + f + ' ' + wline)
          } else {
            t.equal(fline, wline, 'line ' + f + ' ' + wline.replace(/# (todo|skip)/gi, '- $1'))
          }
          if (!t.passing())
            return t.end()
        }
      }
      t.end()
    })
  })
}
