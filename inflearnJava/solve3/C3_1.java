import java.util.ArrayList;
import java.util.Arrays;
import java.util.Scanner;

public class C3_1 {
    public static void main(String[] args) {

        C3_1 T = new C3_1();

        Scanner scanner = new Scanner(System.in);
        int     size1   = scanner.nextInt();
        int[]   arr1    = new int[size1];
        for (int i = 0; i < size1; i++) {
            arr1[i] = scanner.nextInt();
        }
        int   size2 = scanner.nextInt();
        int[] arr2  = new int[size2];
        for (int i = 0; i < size2; i++) {
            arr2[i] = scanner.nextInt();
        }
        for (int num : T.solution(arr1, arr2)) {
            System.out.print(num + " ");
        }
    }

    public int[] solution(int[] arr1, int[] arr2) {
        int[] answer = new int[arr1.length + arr2.length];
        System.arraycopy(arr1, 0, answer, 0, arr1.length);
        System.arraycopy(arr2, 0, answer, arr1.length, arr2.length);
        Arrays.sort(answer);
        return answer;
    }

    public ArrayList<Integer> solution1(int[] arr1, int[] arr2) {
        ArrayList<Integer> answer = new ArrayList<>();

        int m  = arr1.length;
        int n  = arr2.length;
        int p1 = 0;
        int p2 = 0;
        while (p1 < m && p2 < n) {
            if (arr1[p1] < arr2[p2]) answer.add(arr1[p1++]);
            else answer.add(arr2[p2++]);
        }
        while (p1 < m) answer.add(arr1[p1++]);
        while (p2 < n) answer.add(arr2[p2++]);
        return answer;
    }
}
