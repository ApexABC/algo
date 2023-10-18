class Graph<T> {
  // 顶点
  private verteces: T[] = []
  // 边：邻接表
  private adjList: Map<T, T[]> = new Map()
  // 添加顶点和边的方法
  addVertex(vertex: T) {
    // 将顶点添加到数组这保存
    this.verteces.push(vertex)
    // 创建一个邻接表中的数组
    this.adjList.set(vertex, [])
  }
  addEdge(v1: T, v2: T) {
    this.adjList.get(v1)?.push(v2)
    this.adjList.get(v2)?.push(v1)
  }
  // 遍历
  traverse() {
    this.verteces.forEach((vertex) => {
      const edges = this.adjList.get(vertex)
      console.log(`${vertex}=> ${edges?.join(' ')}`)
    })
  }
  // 广度优先
  bfs() {
    // 判断是否有顶点
    if (this.verteces.length === 0) return
    // 创建队列结构访问每一个顶点
    const queue: T[] = []
    queue.push(this.verteces[0])
    // 创建set结构，记录某一个顶点是否被访问过
    const visited = new Set<T>()
    visited.add(this.verteces[0])
    // 遍历队列中的每一个顶点
    while (queue.length) {
      // 访问队列中第一个顶点
      const vertex = queue.shift()!
      console.log(vertex)
      // 相邻的顶点
      const neighbors = this.adjList.get(vertex)
      if (!neighbors) continue
      for (const nei of neighbors) {
        if (!visited.has(nei)) {
          visited.add(nei)
          queue.push(nei)
        }
      }
    }
  }
  // 深度优先
  dfs() {
    // 判断是否有顶点
    if (this.verteces.length === 0) return
    // 创建栈结构访问每一个顶点
    const stack: T[] = []
    stack.push(this.verteces[0])
    // 创建set结构，记录某一个顶点是否被访问过
    const visited = new Set<T>()
    visited.add(this.verteces[0])
    while (stack.length) {
      const vertex = stack.pop()!
      console.log(vertex)
      const neighbors = this.adjList.get(vertex)
      if (!neighbors) continue
      for (let i = neighbors.length - 1; i >= 0; i--) {
        const nei = neighbors[i]
        if (!visited.has(nei)) {
          visited.add(nei)
          stack.push(nei)
        }
      }
    }
  }
}
const graph = new Graph<string>()
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')
graph.addVertex('E')
graph.addVertex('F')
graph.addVertex('G')
graph.addVertex('H')
graph.addVertex('I')
graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('A', 'D')
graph.addEdge('C', 'D')
graph.addEdge('C', 'G')
graph.addEdge('D', 'G')
graph.addEdge('D', 'H')
graph.addEdge('B', 'E')
graph.addEdge('B', 'F')
graph.addEdge('E', 'I')
// graph.traverse()
// graph.bfs()
graph.dfs()
export {}
