// string是ts定义的标识符 ，String是js中字符串的包装类
function useState(initState: number): [number, (newValue: number) => void] {
  let stateValue = initState
  function setValue(newValue: number) {
    stateValue = newValue
    console.log(stateValue)
  }
  return [stateValue, setValue]
}

const [count] = useState(10)
console.log(count)
// setValue(100)

export {}
