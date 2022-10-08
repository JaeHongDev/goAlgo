import java.util.*;
import java.util.stream.Collectors;

public class C3_2 {
    public static void main(String[] args) {
        C3_2 T = new C3_2();

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

    public ArrayList<Integer> solution(int[] arr1, int[] arr2) {
        ArrayList<Integer> answer = new ArrayList<>();
        Arrays.sort(arr1);
        Arrays.sort(arr2);

        int m  = arr1.length;
        int n  = arr2.length;
        int p1 = 0, p2 = 0;
        while (p1 < m && p2 < n) {
            if (arr1[p1] == arr2[p2]) {
                answer.add(arr1[p1]);
                p1++;
                p2++;
                continue;
            }
            if (arr1[p1] < arr2[p2]) {
                p1++;
            } else {
                p2++;
            }
        }
        return answer;

    }
}
