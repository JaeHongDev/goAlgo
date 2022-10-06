import java.util.Locale;
import java.util.Scanner;

public class C1_7 {
    public static void main(String [] args){
        C1_7 T = new C1_7();
        Scanner s = new Scanner(System.in);

        System.out.println(T.solution(s.next()));

    }
    public String solution(String str){
        str=str.toUpperCase();
       int left = 0;
       int right = str.length() -1;
       while(left < right){
           if(str.charAt(left) != str.charAt(right)) return "NO";
           left++;
           right--;
       }
       return "YES";
    }
}
