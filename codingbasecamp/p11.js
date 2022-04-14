let s = 0; 

const result = new Array(100).fill(0).map((_,index)=>index+1).reduce((pre,cal)=>pre+cal,0);
console.log(result);