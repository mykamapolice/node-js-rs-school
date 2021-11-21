const ceasarCipher = (n, decode = false) => {
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

const rot8Cipher = (n, decode = false) => {
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

const atbashCipher = (n) => {
  const a = n.charCodeAt(0)
  if(n === n.toLowerCase()) {
    return String.fromCharCode(97 + (122 - a))
  } else {
    return String.fromCharCode(65 + (90 - a))
  }
}
module.exports = {
  rot8Cipher,
  ceasarCipher,
  atbashCipher
}
