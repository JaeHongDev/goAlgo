function solution(money) {
    const count = parseInt(money / 5500);
    return [count, money - count * 5500];
}
