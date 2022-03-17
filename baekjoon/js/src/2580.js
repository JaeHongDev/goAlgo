const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.split(" ").map((element) => parseInt(element)));

function solution(board = [[]]) {
  const sduku = board;
  const isNullOrEmpty = (str) => str === null || str === undefined || str === 0;
  const findEmptyRow = (row = [], dx) =>
    row.reduce(
      (prev, current, dy) =>
        isNullOrEmpty(current) ? [...prev, [dx, dy]] : [...prev],
      []
    );
  const emptyRows = sduku.reduce(
    (prev, row, dx) => [...prev, ...findEmptyRow(row, dx)],
    []
  );

  const backTracking = (level, sduku) => {
    if (level === emptyRows.length) {
      sduku.forEach((item) => console.log(item.toString().replace(/\,/g, " ")));
      return sduku;
    }
    const [dx, dy] = emptyRows[level];
    const findRows = (dx) => sduku[dx];
    const findColumns = (dy) => sduku.map((row) => row[dy]);
    const findBlock = (dx, dy) => {
      const root = [Math.floor(dx / 3) * 3, Math.floor(dy / 3) * 3];
      const block = [];
      for (let i = root[0]; i < root[0] + 3; i++) {
        for (let j = root[1]; j < root[1] + 3; j++) {
          block.push(sduku[i][j]);
        }
      }

      return block;
    };
    const findEmptyNumber = (arr = []) => {
      const checked = [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ];
      arr.forEach((element) => (checked[element - 1] = true));
      return checked.reduce(
        (prev, cur, index) => (cur ? [...prev] : [...prev, index + 1]),
        []
      );
    };
    const findJoin = (arr = [], joinArr = []) =>
      arr.reduce(
        (prev, cur) =>
          joinArr.find((item) => cur === item) ? [...prev, cur] : [...prev],
        []
      );
    // const joinArray = findJoin(
    //   findEmptyNumber(findRows(dx)),
    //   findEmptyNumber(findBlock(dx, dy)),
    //   findEmptyNumber(findColumns(dy))
    // );
    const joinArray = [...findRows(dx]
    if (joinArray.length === 0) {
      return;
    }
    joinArray.forEach((element) => {
      console.log(`=====${dx} ${dy}=====`)
      console.table(sduku);
      console.log(
        findEmptyNumber(findRows(dx)),
        findEmptyNumber(findBlock(dx, dy)),
        findEmptyNumber(findColumns(dy))
      );
      sduku[dx][dy] = element;
      backTracking(level + 1, sduku);
    });
  };
  backTracking(0, sduku);
}

solution(input);
