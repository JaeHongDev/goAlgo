function solution(citations) {
    return citations
        .sort((a,b)=> b - a)
        .reduce((pre,cal,index)=> pre + (index < cal ? 1 : 0) , 0)
}
