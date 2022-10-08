import java.util.ArrayList;
import java.util.HashSet;
import java.util.Scanner;
import java.util.Set;
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
        Set<Integer>       set    = new HashSet<>();
        ArrayList<Integer> answer = new ArrayList<>();
        for (int i : arr1) {
            set.add(i);
        }
        for (int i : arr2) {
            if (set.contains(i)) answer.add(i);
        }
        answer.sort((a, b) -> a - b);
        return answer;
    }
}
