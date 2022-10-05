import java.util.Scanner;

public class C1_3 {
    public static void main(String [] args){
        Scanner in = new Scanner(System.in);
        System.out.println(new MyExplanation().solve(in.nextLine()));
    }

    static class MyExplanation{
        public String solve(String str){
            String answer = "";
            for(String word : str.split(" ")){
                if(word.length() > answer.length()){
                    answer =word;
                }
            }
            return answer;
        }
        public String solve1(String str){
             String answer = "";
             int m = Integer.MIN_VALUE , pos;

             while((pos = str.indexOf(' ')) != -1){
                 String temp = str.substring(0,pos);
                 int len = temp.length();

                 if(len > m ){
                     m = len;
                     answer =temp;
                 }
                 str = str.substring(pos+1);
             }
             if(str.length() > m ) answer =str;
             return answer;
        }
    }
}
