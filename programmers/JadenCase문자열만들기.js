function solution(s) {
    return s.split(" ")
        .map((word) => word.slice(0,1)
             .toUpperCase()
             .concat(word.slice(1).toLowerCase()))
        .join(" ")
}
