import java.util.HashMap;
import java.util.Scanner;

public class C4_2 {
    public static void main(String[] args) {

        C4_2    T       = new C4_2();
        Scanner scanner = new Scanner(System.in);

        System.out.println(T.solution(scanner.next(), scanner.next()));
    }

    public String solution(String str1, String str2) {
        HashMap<Character, Integer> map = new HashMap<>();

        for (Character key : str1.toCharArray()) {
            map.put(key, map.getOrDefault(key, 0) + 1);
        }

        for (Character key : str2.toCharArray()) {
            if (!map.containsKey(key)) return "NO";

            map.put(key, map.get(key) - 1);
        }

        for (Character key : map.keySet()) {
            if (map.get(key) != 0) return "NO";
        }
        return "YES";
    }
}
