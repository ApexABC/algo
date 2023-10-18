function createRepeat(fn: any, repeat: number, interval: number): any {
  return function a(params: any) {
    let count = 0
    let timer = setInterval(() => {
      count++
      if (repeat === count) clearInterval(timer)
      fn(params)
    }, interval)
  }
}
const fn = createRepeat(console.log, 5, 1000)
fn('123a')
