const fs = require('fs')
const {argv, stdout, stdin} = process
const {converter} = require('./converter')


const indexOfInput = argv.indexOf('-i') + 1
const indexOfOutput = argv.indexOf('-o') + 1
const indexOfConfig= argv.indexOf('-c') + 1

const input = argv[indexOfInput]
const output = argv[indexOfOutput]
const config = argv[indexOfConfig]

function isLetter(c) {
  return c.toLowerCase() !== c.toUpperCase();
}

if(!config) throw Error('No config found, please enter config after "-c"')

const inputStream = fs.createReadStream(input, 'utf-8');


let data = ''
let outputData = ''

inputStream.on('data', chunk => data += chunk);

inputStream.on('end', () => {
  data.split('').map(letter => {
    if(isLetter(letter)) {
      outputData += converter(config, letter)
    } else {
      outputData += letter
    }
  })
  if (fs.existsSync(output)) {
    const writeStream = fs.createWriteStream(output);
    writeStream.write(outputData)
  } else {
    stdout.write(`${outputData}\n`);
  }
})

inputStream.on('error', () => {
  stdout.write('Enter text to convert: \n')
  stdin.on('data', input => {
    input.toString().trim().split('').map(letter => {
      if(isLetter(letter)) {
        outputData += converter(config, letter)
      } else {
        outputData += letter
      }
    })
    if (fs.existsSync(output)) {
      const writeStream = fs.createWriteStream(output);
      writeStream.write(outputData)
    } else {
      stdout.write(`${outputData}\n`);
    }
  })
});





