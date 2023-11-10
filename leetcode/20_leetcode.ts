function isValid(s: string): boolean {
  const queue: string[] = [];
  for (const item of s) {
    if (item === ")") {
      if (queue.pop() !== "(") return false;
    } else if (item === "]") {
      if (queue.pop() !== "[") return false;
    } else if (item === "}") {
      if (queue.pop() !== "{") return false;
    } else {
      queue.push(item);
    }
  }
  if (queue.length !== 0) return false;
  return true;
}

console.log(isValid("}"));
