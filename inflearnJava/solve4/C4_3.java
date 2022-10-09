import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Scanner;

public class C4_3 {
    public static void main(String[] args) {

        C4_3    T       = new C4_3();
        Scanner scanner = new Scanner(System.in);
        int     size    = scanner.nextInt();
        int     k       = scanner.nextInt();
        int[]   arr     = new int[size];
        for (int i = 0; i < size; i++) {
            arr[i] = scanner.nextInt();
        }
        for (Integer num : T.solution(size, k, arr)) {
            System.out.print(num + " ");
        }
    }

    public ArrayList<Integer> solution(int size, int k, int[] arr) {
        ArrayList<Integer>        answer = new ArrayList<>();
        HashMap<Integer, Integer> map    = new HashMap<>();
        for (int i = 0; i < k; i++) {
            map.put(arr[i], map.getOrDefault(arr[i], 0) + 1);
        }
        answer.add(map.size());
        for (int i = k; i < size; i++) {
            map.put(arr[i], map.getOrDefault(arr[i], 0) + 1);
            if (map.get(arr[i - k]) > 1) {
                map.put(arr[i - k], map.get(arr[i - k] ) - 1);
            } else {
                map.remove(arr[i - k]);
            }
            answer.add(map.size());
        }
        return answer;
    }
}
