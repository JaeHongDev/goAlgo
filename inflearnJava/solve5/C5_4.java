import java.util.Scanner;
import java.util.Stack;

public class C5_4 {
    public static void main(String[] args) {
        C5_4    T       = new C5_4();
        Scanner scanner = new Scanner(System.in);

        System.out.println(T.solution(scanner.next()));
    }

    private int solution(String s) {
        Stack<Integer> stack = new Stack<>();
        for (Character c : s.toCharArray()) {
            if (Character.isDigit(c)) {
                stack.push(Character.getNumericValue(c));
                continue;
            }
            Integer num2 = stack.pop();
            Integer num1 = stack.pop();
            if (c == '+') {
                stack.push(num1 + num2);
                continue;
            }
            if (c == '-') {
                stack.push(num1 - num2);
                continue;
            }
            if (c == '*') {
                stack.push(num1 * num2);
                continue;
            }
            if (c == '/') {
                stack.push(num1 / num2);
            }
        }
        return stack.pop();
    }

}
