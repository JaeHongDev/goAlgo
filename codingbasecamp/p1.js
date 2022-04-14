// 400, 500을 삭제하는 코드

var nums = [100, 200, 300, 400, 500];

// 단순하게 400 ~ 500을 지울경우
nums.pop();
nums.pop();

// 400 과 500이 들어가 있는 값을 찾아서 지울경우

var nums = [100, 200, 300, 400, 500];

const result = nums.filter((num) => num !== 400)
                   .filter((num) => num !== 500); //remove 400;
console.log(result);

var nums = [100, 200, 300, 400, 500];

// 함수로 만들경우
const findArrayNumberRemoveThat = (arr=[],num) => arr.filter((item)=> item!== num);
const result1 = findArrayNumberRemoveThat(findArrayNumberRemoveThat(nums,400),500);

console.log(result1);

// 배열을 인자로 받을경우
const findArrayNumbersRemoveThat = (arr=[], ...numbers) => {
    return arr.filter((item)=> !numbers.find((num)=> num===item))    
}

console.log(findArrayNumbersRemoveThat(nums,400,500));
