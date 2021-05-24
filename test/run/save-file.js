process.env.TAP_NO_ESM = '1'
const {
  tmpfile,
  run,
  bin,
  tap,
  node,
  dir,
  t,
  winSkip,
} = require('./')

const path = require('path')
const fs = require('fs')

const xy1 = tmpfile(t, 'x/y/1.js', `
  const t = require(${tap})
  t.pass('one')
`)

const ab2 = tmpfile(t, 'a/b/2.js', `
  const t = require(${tap})
  t.pass('2')
`)

const abf1 = tmpfile(t, 'a/b/f1.js', `//f1.js
  require(${tap}).fail('a/b')
`)

const abf2 = tmpfile(t, 'z.js', `//z.js
  require(${tap}).fail('c/d')
`)

const savefile = path.resolve(tmpfile(t, 'fails.txt', ''))
const opt = { cwd: dir, env: { TAP_NO_ESM: '1' } }

t.test('with bailout, should save all untested', t => {
  run(['a', 'x', 'z.js', '-s', savefile, '-b'], opt, (er, o, e) => {
    t.match(er, { code: 1 })
    t.matchSnapshot(o, 'stdout', { skip: winSkip })
    t.equal(e, '')
    t.matchSnapshot(fs.readFileSync(savefile, 'utf8'), 'savefile')
    t.end()
  })
})

t.test('without bailout, run untested, save failures', t => {
  run(['a', 'x', 'z.js', '-s', savefile], opt, (er, o, e) => {
    t.match(er, { code: 1 })
    t.matchSnapshot(o, 'stdout', { skip: winSkip })
    t.equal(e, '')
    t.matchSnapshot(fs.readFileSync(savefile, 'utf8'), 'savefile')
    t.end()
  })
})

t.test('make fails pass', t => {
  fs.writeFileSync(abf1, `
    require(${tap}).pass('fine now')
  `)
  fs.writeFileSync(abf2, `
    require(${tap}).pass('fine now too')
  `)
  t.end()
})

t.test('pass, empty save file', t => {
  run(['a', 'x', 'z.js', '-s', savefile], opt, (er, o, e) => {
    t.equal(er, null)
    t.matchSnapshot(o, 'stdout')
    t.equal(e, '')
    try {
      console.log(fs.readFileSync(savefile, 'utf8'))
    } catch (e) {}
    t.throws(() => fs.statSync(savefile), 'save file is gone')
    t.end()
  })
})

t.test('empty save file, run all tests', t => {
  run(['a', 'x', 'z.js', '-s', savefile], opt, (er, o, e) => {
    t.equal(er, null)
    t.matchSnapshot(o, 'stdout')
    t.equal(e, '')
    t.throws(() => fs.statSync(savefile), 'save file is gone')
    t.end()
  })
})
