function intToRoman(num: number): string {
  let currentVal = num
  const arr = []
  if (currentVal >= 900) {
    while (currentVal >= 1000) {
      arr.push('M')
      currentVal -= 1000
    }
    if (currentVal >= 900) {
      arr.push('CM')
      currentVal -= 900
    }
  }
  if (currentVal >= 400) {
    while (currentVal >= 500) {
      arr.push('D')
      currentVal -= 500
    }
    if (currentVal >= 400) {
      arr.push('CD')
      currentVal -= 400
    }
  }
  if (currentVal >= 90) {
    while (currentVal >= 100) {
      arr.push('C')
      currentVal -= 100
    }
    if (currentVal >= 90) {
      arr.push('XC')
      currentVal -= 90
    }
  }
  if (currentVal >= 40) {
    while (currentVal >= 50) {
      arr.push('L')
      currentVal -= 50
    }
    if (currentVal >= 40) {
      arr.push('XL')
      currentVal -= 40
    }
  }
  if (currentVal >= 9) {
    while (currentVal >= 10) {
      arr.push('X')
      currentVal -= 10
    }
    if (currentVal >= 9) {
      arr.push('IX')
      currentVal -= 9
    }
  }
  if (currentVal >= 4) {
    while (currentVal >= 5) {
      arr.push('V')
      currentVal -= 5
    }
    if (currentVal >= 4) {
      arr.push('IV')
      currentVal -= 4
    }
  }
  if (currentVal >= 1) {
    while (currentVal >= 1) {
      arr.push('I')
      currentVal -= 1
    }
  }
  return arr.join('')
}
intToRoman(904)
intToRoman(9)
intToRoman(99)
intToRoman(1999)
