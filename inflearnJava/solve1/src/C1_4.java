import java.util.ArrayList;
import java.util.Scanner;

public class C1_4 {
    public static void main(String [] args){
        C1_4 T = new C1_4();

        Scanner scanner = new Scanner(System.in);
        int size = scanner.nextInt();
        String [] str = new String[size];
        for(int i = 0 ; i < size; i ++){
            str[i] = scanner.next();
        }
        for(String x: T.solve(size, str)){
            System.out.println(x);
        }
    }

    private ArrayList<String> solve(int size, String[] str) {
        ArrayList<String> answer = new ArrayList<>();
        for(String x : str){
            answer.add(new StringBuilder(x).reverse().toString());
        }
        return answer;
    }

    private ArrayList<String> solve1(int size, String[] str){
        ArrayList<String> answer =  new ArrayList<String>();

        for(String x : str){
            char [] s = x.toCharArray();
            for(int i = 0; i <= size / 2 ; i++){
                char temp = s[i];
                s[i] = s[size-1 - i];
                s[size-1-i] = s[i];
            }
            answer.add(String.valueOf(s));
        }
        return answer;
    }
}
