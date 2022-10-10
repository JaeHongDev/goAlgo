import java.util.Scanner;
import java.util.Stack;

public class C5_5 {
    public static void main(String[] args) {

        C5_5 T = new C5_5();

        System.out.println(T.solution(new Scanner(System.in).next()));
    }

    public int solution(String str) {
        int              answer = 0;
        Stack<Character> stack  = new Stack<>();
        for (int i = 0; i < str.length(); i++) {
            if (str.charAt(i) == '(') {
                stack.push('(');
                continue;
            }

            if (str.charAt(i - 1) == ')') {
                stack.pop();
                answer += 1;
                continue;
            }
            stack.pop();
            answer += stack.size();
        }
        return answer;
    }
}
