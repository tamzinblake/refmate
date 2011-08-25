var refmate = require('./lib/refmate')
  , fn = process.argv[2]
  , args = process.argv.slice(3)

console.log(refmate[fn](args))
