const deploy = require('../utils/deploy')

console.log('Starting migration...')
deploy()
  .then(() => {
    console.log('\nMigration finished')
    process.exit(0)
  })
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
