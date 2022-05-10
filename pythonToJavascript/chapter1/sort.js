function createRandomNumber() {
  return Math.ceil(Math.random() * 100);
}

function main() {
  const array = new Array(10000).fill(0).map((_) => createRandomNumber());

  console.time("선택정렬");
  for (let i = 0; i < array.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++)
      if (array[minIndex] > array[j]) minIndex = j;
    [array[i], array[minIndex]] = [array[minIndex], array[i]]; // 구조분해 할당을 이용하여 파이썬과 똑같이 구현가능하다.
  }
  console.timeEnd("선택정렬");

  const otherArray =  new Array(1000).fill(0).map(_=>createRandomNumber());
  console.time("정렬 라이브러리 성능")
  otherArray.sort();
  console.timeEnd("정렬 라이브러리 성능")
}
main();
