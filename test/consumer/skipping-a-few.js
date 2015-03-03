module.exports=
[ [ 'version', '13' ],
  [ 'plan', 5 ],
  [ 'comment', '# $^0 is solaris\n' ],
  [ 'result',
    { id: 1, ok: true, name: 'approved operating system' } ],
  [ 'result', { id: 2, ok: true, skip: 'no /sys directory' } ],
  [ 'result', { id: 3, ok: true, skip: 'no /sys directory' } ],
  [ 'result', { id: 4, ok: true, skip: 'no /sys directory' } ],
  [ 'result', { id: 5, ok: true, skip: 'no /sys directory' } ],
  [ 'complete',
    { plan: 5, count: 5, pass: 5, ok: true, skip: 4 } ] ]
