import java.util.Scanner;

public class C1_8 {
    public static void main(String [] args){
        C1_8 T = new C1_8();
        Scanner s = new Scanner(System.in);

        System.out.println(T.solution(s.next()));
    }

    public String solution(String str){
        str = str.toUpperCase().replaceAll("[^A-Z]","");
        return new StringBuilder(str).reverse().toString().equals(str) ? "YES" : "NO";
    }
}
