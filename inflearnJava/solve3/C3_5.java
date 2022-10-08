import java.util.Scanner;

public class C3_5 {
    public static void main(String[] args) {

        // 1 + 2 + 3 6
        // 2 + 3 + 4 9
        // 1 2 3
        // 2 3 5
        // 3 4 7
        Scanner scanner = new Scanner(System.in);
        System.out.println(new C3_5().solution(scanner.nextInt()));
    }

    public int solution(int m) {
        int answer = 0;
        for (int i = 2; i <= m; i++) {
            int sum = 0;
            for (int j = 1; j <= i; j++) {
                sum += j;
            }
            if ((m - sum) % i == 0) answer++;
            if (sum >= m) return answer;
        }
        return answer;
    }


}
