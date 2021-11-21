const {atbashCipher} = require("../chiphers");
const {ceasarCipher} = require("../chiphers");

const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
console.log(alphabet)


describe('testChiphersFunction', () => {

  it('testCeasar', () => {
    alphabet.map((letter, index) => {
      if (ceasarCipher(letter) === 'a') {
        expect(ceasarCipher(letter)).toEqual(alphabet[0])
        return
      }
      expect(ceasarCipher(letter)).toEqual(alphabet[index + 1])

    })
  })

  it('testAtbash', () => {
    expect(atbashCipher('a')).toEqual('z')
    expect(atbashCipher('b')).toEqual('y')
    expect(atbashCipher('c')).toEqual('x')
  })


})
