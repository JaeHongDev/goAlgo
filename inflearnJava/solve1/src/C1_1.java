import java.util.Scanner;

public class C1_1 {
    public static void main(String[] args) {
        Scanner  in       = new Scanner(System.in);
        Solution solution = new Solution();
        System.out.println(solution.solution(in.nextLine(), in.nextLine()));
    }
}

class Solution {
    public int solution(String str, String c) {
        str = str.toUpperCase();
        c = c.toUpperCase();
        int count = 0;
        for (int i = 0; i < str.length(); i++) {
            if (str.charAt(i) == c.charAt(0)) {
                count++;
            }
        }
        return count;
    }
}
