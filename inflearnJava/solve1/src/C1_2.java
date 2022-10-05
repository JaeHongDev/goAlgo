public class C1_2 {
    public static void main(String [] args){
        Solution1 solution = new Solution1();
        System.out.println(solution.solution("StuDY"));
    }

    // 해결 방법1
    class Solve1{
        public String solve1(String str){
            StringBuilder answer = new StringBuilder();
            for(char x : str.toCharArray()){
              if(Character.isLowerCase(x)) {
                  answer.append(Character.toUpperCase(x));
                  continue;
              }
                answer.append(Character.toLowerCase(x));
            }
            return answer.toString();
        }
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
