const { rollup } = require('rollup');

rollup({
  input: 'kek.js'
})
  .then(bundle =>
    bundle.write([
      {
        file: 'lib/kek.js',
        format: 'cjs'
      },
      {
        file: 'es/kek.js',
        format: 'esm'
      }
    ])
  )
  .then(console.log);
