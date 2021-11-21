const {rot8Cipher, ceasarCipher, atbashCipher} = require('./chiphers')

const converter = (config, letter) => {
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
        a = rot8Cipher(a)
        break
      case 'R0':
        a = rot8Cipher(a, true)
        break
    }
  })
  return a
}

module.exports ={
  converter
}
