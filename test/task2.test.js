const {ceasarCipher} = require("../chiphers");


describe('testChiphersFunction', () => {

  it('testCeasar', () => {
    expect(ceasarCipher('a')).toEqual('b')
    expect(ceasarCipher('b')).toEqual('c')
  })


})
