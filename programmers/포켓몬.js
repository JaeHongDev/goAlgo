const solution = (nums) => Math.min(nums.length / 2, [...new Set(nums)].length)

// n 마리 중에서 n/2마리를 가져가세요
// 같은 종류의 포켓몬은 같은 번호를 가진다.
