const stringToArray = (string = '') => string.trimEnd().split(' ')
const stringToIntArray = (string) =>
  stringToArray(string).map((item) => parseInt(item))
const stringToSplitArray = (string = '') => string.trimEnd().split('')

module.exports = function () {
  const p = [
    stringToIntArray('1 2 '),
    stringToIntArray('1 3 '),
    stringToIntArray('1 4 '),
    stringToIntArray('2 1 '),
    stringToIntArray('2 3 '),
    stringToIntArray('2 5 '),
    stringToIntArray('3 4 '),
    stringToIntArray('4 2 '),
    stringToIntArray('4 5'),
  ]
  const N = 5
  return solution(N, p)
}

function solution(N,p=[]) {
  const graph = new Array(N+1).fill().map(_=> new Array());

  const ch = new Array(N+1).fill(0)
  const path = [];

  p.forEach(([a,b])=>{
      graph[a].push(b);
  })

  console.log(graph)
  const DFS = V =>{
    if(V === N) {
        console.log(path);
        return;
    }
    const size = graph[V].length;
    for(let i = 0; i<size;i++){
        const target = graph[V][i]
        if(ch[target] === 0) {
            ch[target] = 1;
            path.push(target);
            DFS(target)
            ch[target] = 0;
            path.pop(target);
        }
        
    }
  }
  path.push(1 )
  ch[1] = 1;
  DFS(1)

  return 0
}
