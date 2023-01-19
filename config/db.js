const mongooseBaseName = 'podcast-host-tracker'

const database = {
    development: `mongodb://localhost/${mongooseBaseName}-development`,
    test: `mongodb://localhost/${mongooseBaseName}-development`
}

const localDb = process.env.TESTENV? database.test : database.development

const currentDb = process.env.DB_URI || localDb

module.exports = currentDb