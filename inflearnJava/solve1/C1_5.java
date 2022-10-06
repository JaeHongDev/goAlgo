import java.util.Scanner;

public class C1_5 {

    public static void main(String []args){
        C1_5 T = new C1_5();
        Scanner scanner = new Scanner(System.in);
        String input = scanner.next();
        System.out.println(T.solve(input));
    }

    public String solve(String str){
        char[] c = str.toCharArray();
        int left = 0;
        int right = c.length-1;
        while(left < right){
            if(!Character.isAlphabetic(c[left])) {
                left++;
                continue;
            };
            if(!Character.isAlphabetic(c[right])) {
                right--;
                continue;
            };
            char temp = c[left];
            c[left] = c[right];
            c[right] = temp;
            left++;
            right--;
        }
        return String.valueOf(c);
    }
}
