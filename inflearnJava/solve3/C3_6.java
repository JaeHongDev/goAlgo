import java.util.Scanner;

public class C3_6 {

    public static void main(String[] args) {

        //14 2
        //1 1 0 0 1 1 0 1 1 0 1 1 0 1
        Scanner scanner = new Scanner(System.in);
        int     size    = scanner.nextInt();
        int     k       = scanner.nextInt();
        int[]   arr     = new int[size];
        for (int i = 0; i < size; i++) arr[i] = scanner.nextInt();

        System.out.println(new C3_6().solution(arr, size, k));

    }

    public int solution(int[] arr, int size, int k) {
        int answer = 0;
        int lt     = 0;
        int cnt    = 0;

        for(int rt = 0 ; rt < size; rt++){
            if (arr[rt] == 0) cnt++;
            while (cnt > k) {
                if (arr[lt] == 0) cnt--;
                lt++;
            }
            answer = Math.max(answer, rt - lt + 1);
        }
        return answer;
    }
}
