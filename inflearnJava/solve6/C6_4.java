import java.util.Arrays;
import java.util.Scanner;

public class C6_4 {
    public static void main(String[] args) {
        C6_4 T = new C6_4();
        Scanner scanner = new Scanner(System.in);

        int cacheSize = scanner.nextInt();
        int n = scanner.nextInt();
        int[] arr = new int[n];

        for (int i = 0; i < n; i++) {
            arr[i] = scanner.nextInt();
        }
        for (int num : T.solution(arr, n, cacheSize)) {
            System.out.print(num + " ");
        }
    }

    public int[] solution(int[] arr, int size, int cacheSize) {
        int[] cache = new int[cacheSize];
        Arrays.fill(cache, 0);

        for (int item : arr) {
            boolean isHit = false;
            int hitIndex = cacheSize-1;
            for (int i = 0; i < cacheSize; i++) {
                if (cache[i] == item) {
                    hitIndex = i;
                }
            }
            for (int i = hitIndex; i > 0; i--) {
                cache[i] = cache[i - 1];
            }
            cache[0] = item;
        }
        return cache;
    }
}
