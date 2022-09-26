function solution(A,B){
    A.sort((a,b)=> a-b)
    B.sort((a,b)=> b-a)
    return A.reduce((pre,cal,index)=> pre + A[index] * B[index],0)
}
