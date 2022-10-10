import java.util.LinkedList;
import java.util.Queue;
import java.util.Scanner;

public class C5_6 {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println(new C5_6().solution(scanner.nextInt(),scanner.nextInt()));
    }

    public int solution(int size, int k) {
        Queue<Integer> queue = new LinkedList<>();

        for (int i = 1; i <= size; i++) {
            queue.add(i);
        }

        int pos = 0;
        while (queue.size() != 1) {
            if (pos == k - 1) {
                queue.poll();
                pos = 0;
            }
            pos++;
            queue.add(queue.poll());
        }
        return queue.poll();
    }
}
