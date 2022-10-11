import java.util.Arrays;
import java.util.Scanner;

public class C2_10 {
    public static void main(String[] args) {
        C2_10 T = new C2_10();
        Scanner scanner = new Scanner(System.in);

        int size = scanner.nextInt();
        int[][] arr = new int[size + 2][size + 2];
        for (int i = 0; i < size; i++) {
            Arrays.fill(arr[i], 0);
        }
        for (int i = 1; i <= size; i++) {
            for (int j = 1; j <= size; j++) {
                arr[i][j] = scanner.nextInt();
            }
        }
        System.out.println(T.solution(arr, size));
    }

    public int solution(int[][] arr, int size) {

        int answer = 0;
        for (int i = 1; i <= size; i++) {
            for (int j = 1; j <= size; j++) {
                if (arr[i][j] < arr[i][j + 1]) continue;
                if (arr[i][j] < arr[i][j - 1]) continue;
                if (arr[i][j] < arr[i - 1][j]) continue;
                if (arr[i][j] < arr[i + 1][j]) continue;
                answer++;
            }
        }
        return answer;
    }
}
