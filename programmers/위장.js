function solution(clothes) {
  const arr = [...clothes.reduce((pre,cal)=>{
      pre.clothes.set(cal[1], pre.clothes.has(cal[1]) ? pre.clothes.get(cal[1]) +1 :1)
      return pre;
  },{clothes:new Map()}).clothes].map(item=> item[1]);
    if (arr.length === 1) return arr[0];
    return arr.reduce((pre,cal)=> pre * (cal+1), 1) -1
    
}
