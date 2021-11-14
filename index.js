const fs = require('fs')

const {argv, stdout} = process

const indexOfInput = argv.indexOf('-i') + 1
const indexOfOutput = argv.indexOf('-o') + 1
const indexOfConfig= argv.indexOf('-c') + 1

const input = argv[indexOfInput]
const output = argv[indexOfOutput]
const config = argv[indexOfConfig]


