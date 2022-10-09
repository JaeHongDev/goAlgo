import java.util.HashMap;
import java.util.Scanner;

public class C4_1 {
    public static void main(String[] args) {
        C4_1    T       = new C4_1();
        Scanner scanner = new Scanner(System.in);

        int    size = scanner.nextInt();
        String str  = scanner.next();

        System.out.println(T.solution(size, str));
    }

    private Character solution(int size, String str) {

        HashMap<Character, Integer> map = new HashMap<>();

        for (Character key : str.toCharArray()) {
            map.put(key, map.getOrDefault(key, 0) + 1);
        }

        Character answer = ' ';
        int       max    = Integer.MIN_VALUE;
        for (Character key : map.keySet()) {
            if (max < map.get(key)) {
                answer = key;
                max    = map.get(key);
            }
        }
        return answer;
    }


}
