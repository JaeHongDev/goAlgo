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
        int ll     = 0;
        int rl     = k - 1;
        int answer = 0;
        int sum    = 0;
        for (int i = ll; i <= rl; i++) sum += arr[i];
        while (rl != arr.length) {
            answer = Math.max(answer, sum);
            sum -= arr[ll++];
            sum += arr[rl++];
        }
        answer = Math.max(answer,sum);
        return answer;
    }
}
