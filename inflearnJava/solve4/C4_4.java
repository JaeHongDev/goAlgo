import java.util.HashMap;
import java.util.Scanner;

public class C4_4 {
    public static void main(String[] args) {
        C4_4    T       = new C4_4();
        Scanner scanner = new Scanner(System.in);
        String  str1    = scanner.next();
        String  str2    = scanner.next();
        System.out.println(T.solution(str1, str2));
    }

    public int solution(String str1, String str2) {
        int                         answer = 0;
        HashMap<Character, Integer> aMap   = new HashMap<>();
        HashMap<Character, Integer> bMap   = new HashMap<>();

        for (int i = 0; i < str2.length(); i++) {
            bMap.put(str2.charAt(i), bMap.getOrDefault(str2.charAt(i), 0) + 1);
        }

        for (int i = 0; i < str2.length(); i++) {
            aMap.put(str1.charAt(i), aMap.getOrDefault(str1.charAt(i), 0) + 1);
        }

        if (aMap.equals(bMap)) answer++;

        for (int i = str2.length(); i < str1.length(); i++) {
            Character key = str1.charAt(i - str2.length());
            if (aMap.get(key) > 1) {
                aMap.put(key, aMap.get(key) - 1);
            } else {
                aMap.remove(key);
            }
            aMap.put(str1.charAt(i), aMap.getOrDefault(str1.charAt(i), 0) + 1);
            if (aMap.equals(bMap)) answer++;
        }
        return answer;
    }
}
