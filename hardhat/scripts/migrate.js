const deploy = require('./deploy')

console.log('Starting migration...')
deploy()
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
    .finally(() => {
        console.log('\nMigration finished')
    })
