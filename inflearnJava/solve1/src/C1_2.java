public class C1_2 {
    public static void main(String [] args){
        Solution1 solution = new Solution1();
        System.out.println(solution.solution("StuDY"));
    }

}

class Solution1{
    public String solution(String str){
        StringBuilder stringBuilder = new StringBuilder();
        for(int i = 0 ; i<str.length();i++){
            int charAscI = str.charAt(i);
            if(charAscI  >=  97 ){
                charAscI -= 32;
            }else{
                charAscI += 32;
            }
            stringBuilder.append((char)charAscI);
        }
        return stringBuilder.toString();
    }
}
