import java.util.Scanner;

import static java.lang.Integer.parseInt;

public class C1_9 {
    public static void main(String[] args){
        C1_9 T = new C1_9();
        Scanner s = new Scanner(System.in);
        System.out.println(T.solution(s.next()));
    }
    public int solution(String str){
        return parseInt(str.replaceAll("[^0-9]",""));
    }
}
