const keypad = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  ["*", "0", "#"],
];
function solution(arr = [], position = "") {
  const str = "";
  let lastLeftPick = -1;
  let lastRightPick = -1;
  for (let i = 0; i < arr.length; i++) {
    const result =[2, 5, 7, 0].indexOf(i);

    if(result !== -1){
        
        
    } else {
        const result = preCal(i);
        if(result === "L") lastLeftPick = i;
        if(result === "R") lastRightPick = i;

    }

    lastPick = i;
  }
}

function preCal(num) {
  if ([1, 4, 7].includes(num)) return "L";
  if ([3, 6, 9].includes(num)) return "R";
}

function test(expected, actual) {
  console.log("--------------------------------");
  console.log(`expected value is: ${expected}`);
  console.log(`actiaul value is : ${actual}`);
}

test(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right"), "LRLLLRLLRRL");
test(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left"), "LRLLRRLLLRR");
test(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], "right"), "LLRLLRLLRL");
