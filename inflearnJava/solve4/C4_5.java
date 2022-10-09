import java.util.Collections;
import java.util.Scanner;
import java.util.TreeSet;

public class C4_5 {
    public static void main(String[] args) {
        C4_5 T = new C4_5();

        Scanner scanner = new Scanner(System.in);
        int     size    = scanner.nextInt();
        int     k       = scanner.nextInt();
        int[]   arr     = new int[size];
        for (int i = 0; i < size; i++) {
            arr[i] = scanner.nextInt();
        }
        System.out.println(T.solution(arr, size, k));
    }

    public int solution(int[] arr, int size, int k) {
        int              answer = -1;
        TreeSet<Integer> tSet   = new TreeSet<>(Collections.reverseOrder());
        for (int i = 0; i < size; i++) {
            for (int j = i + 1; j < size; j++) {
                for (int l = j + 1; l < size; l++) {
                    tSet.add(arr[i] + arr[j] + arr[l]);
                }
            }
        }
        int cnt = 0;
        for (Integer num : tSet) {
            cnt++;
            if (cnt == k) return num;
        }
        return answer;
    }
}
