const fs = require('fs')

const {argv, stdout, stdin} = process

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

function converter(config, letter) {
  const conf = config.split('-')
  let a = letter
  conf.map(el => {
    switch (el) {
      case 'C1':
        a = ceasarCipher(a)
        break
      case 'C0':
        a = ceasarCipher(a, true)
        break
      case 'A':
        a = atbashCipher(a)
        break
      case 'R1':
        a = Rot8Cipher(a)
        break
      case 'R0':
        a = Rot8Cipher(a, true)
        break
    }
  })
  return a
}


function ceasarCipher(n, decode = false) {
  const a = n.charCodeAt(0)
  if(!decode) {
    if(n.toLowerCase() === 'z' ){
      return String.fromCharCode((a + 1) - 26);
    }
    return String.fromCharCode((a + 1));
  } else {
    if(n.toLowerCase() === 'a' ){
      return String.fromCharCode((a - 1) + 26);
    }
    return String.fromCharCode((a - 1));
  }
}

function Rot8Cipher(n, decode = false) {
  const a = n.charCodeAt(0)
  if(!decode) {
    if(n.toLowerCase() > 'r' ){
      return String.fromCharCode((a + 8) - 26);
    }
    return String.fromCharCode((a + 8));
  } else {
    if(n.toLowerCase() < 'h' ){
      return String.fromCharCode((a - 8) + 26);
    }
    return String.fromCharCode((a - 8));
  }
}

function atbashCipher(n) {
  const a = n.charCodeAt(0)
  if(n === n.toLowerCase()) {
    return String.fromCharCode(97 + (122 - a))
  } else {
    return String.fromCharCode(65 + (90 - a))
  }
}


