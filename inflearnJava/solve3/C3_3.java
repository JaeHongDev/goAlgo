import java.util.Scanner;

public class C3_3 {
    public static void main(String[] args) {
        C3_3    T       = new C3_3();
        Scanner scanner = new Scanner(System.in);

        int   size = scanner.nextInt();
        int   k    = scanner.nextInt();
        int[] arr  = new int[size];
        for (int i = 0; i < size; i++) arr[i] = scanner.nextInt();

        System.out.println(T.solution(arr, size, k));
    }

    private int solution(int[] arr, int size, int k) {
        int answer = 0;
        int sum    = 0;
        for (int i = 0; i < k; i++) sum += arr[i];
        answer = sum;
        for (int i = k; i < size; i++) {
            sum += (arr[i] - arr[i - k]);
            answer = Math.max(answer, sum);
        }
        return answer;
    }
}
