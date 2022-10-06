import java.util.*;

public class C1_6 {
    public static void main(String[] args){
        C1_6 T = new C1_6();
        Scanner in =new Scanner(System.in);
        System.out.println(T.solution(in.next()));
    }

    public String solution(String str){
        StringBuilder stringBuilder = new StringBuilder();

       for(int i = 0 ; i < str.length(); i++){
           if(str.indexOf(str.charAt(i)) == i) stringBuilder.append(str.charAt(i));
       }
       return stringBuilder.toString();
    }
}
