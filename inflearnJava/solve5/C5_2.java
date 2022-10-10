import java.util.Scanner;
import java.util.Stack;

public class C5_2 {
    public static void main(String[] args) {

        C5_2    T       = new C5_2();
        Scanner scanner = new Scanner(System.in);
        System.out.println(T.solution(scanner.next()));
    }

    public String solution(String str) {
        StringBuilder    stringBuilder = new StringBuilder();
        Stack<Character> stack         = new Stack<>();
        int              index         = 0;
        for (Character c : str.toCharArray()) {
            if (c == ')') {
                while (stack.lastElement() != '(') stack.pop();
                stack.pop();
            } else {
                stack.push(c);
            }
        }

        for (Character c : stack) {
            stringBuilder.append(c);
        }
        return stringBuilder.toString();
    }
}
