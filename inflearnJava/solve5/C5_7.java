
import java.util.LinkedList;
import java.util.Queue;
import java.util.Scanner;

public class C5_7 {
    public static void main(String[] args) {
        C5_7    T       = new C5_7();
        Scanner scanner = new Scanner(System.in);
        String  str1    = scanner.next();
        String  str2    = scanner.next();
        System.out.println(T.solution(str1, str2));
    }

    private String solution(String str1, String str2) {
        Queue<Character> queue1 = new LinkedList<>();
        Queue<Character> queue2 = new LinkedList<>();
        for (Character c : str1.toCharArray()) {
            queue1.add(c);
        }
        for (Character c : str2.toCharArray()) {
            queue2.add(c);
        }

        while (!queue2.isEmpty()) {
            if (queue1.peek() == queue2.peek()) {
                queue1.poll();
            }
            queue2.poll();
        }
        if (queue1.isEmpty()) return "YES";
        return "NO";
    }
}
