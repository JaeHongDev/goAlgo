import java.util.Scanner;
import java.util.Stack;

public class C5_1 {
    public static void main(String[] args) {

        C5_1 T = new C5_1();

        Scanner scanner = new Scanner(System.in);

        System.out.println(T.solution(scanner.next()));
    }

    private String solution(String s) {
        Stack<Character> stack = new Stack<>();
        for (Character c : s.toCharArray()) {
            if (c == '(') {
                stack.push(c);
            }
            if (c == ')') {
                if (stack.isEmpty() || stack.lastElement() != '(') {
                    return "NO";
                }
                stack.pop();
            }
        }
        if (stack.isEmpty()) return "YES";
        return "NO";
    }
}
