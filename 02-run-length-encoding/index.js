const encode = (text) => {
  if (text.length === 0) return ''

  let encoded = ''
  let counter = 1

  for (let i = 1; i < text.length; i++) {
    if (text[i] === text[i - 1]) {
      counter++
    } else {
      encoded += (counter > 1 ? counter : '') + text[i - 1]
      counter = 1
    }
  }

  encoded += (counter > 1 ? counter : '') + text[text.length - 1]
  return encoded
}

const decode = (text) => {
  let decoded = ''
  let counter = ''

  for (let char of text) {
    if (isNaN(char) || char === ' ') {
      decoded += char.repeat(Number(counter) || 1)
      counter = ''
    } else {
      counter = `${counter}${char}`
    }
  }

  return decoded
}

module.exports = { encode, decode }