import java.util.ArrayList;
import java.util.Scanner;

public class C2_3 {
    public static void main(String[] args) {
        C2_3 T = new C2_3();
        Scanner s = new Scanner(System.in);
        int size = s.nextInt();
        int[] A = new int[size];
        int[] B = new int[size];
        for (int i = 0; i < size; i++) {
            A[i] = s.nextInt();
        }
        for (int i = 0; i < size; i++) {
            B[i] = s.nextInt();
        }
        for( Character c : T.solution(size, A, B)){
            System.out.println(c);
        }
    }

    public ArrayList<Character> solution(int size, int[] A, int[] B) {
        ArrayList<Character> answer = new ArrayList<>();
        for (int i = 0; i < size; i++) {
            char temp = ' ';
            if (A[i] == 1) {
                if (B[i] == 1) temp = 'D';
                if (B[i] == 2) temp = 'B';
                if (B[i] == 3) temp = 'A';
            }
            if (A[i] == 2) {
                if (B[i] == 1) temp = 'A';
                if (B[i] == 2) temp = 'D';
                if (B[i] == 3) temp = 'B';
            }
            if (A[i] == 3) {
                if (B[i] == 1) temp = 'B';
                if (B[i] == 2) temp = 'A';
                if (B[i] == 3) temp = 'D';
            }
            answer.add(temp);
        }
        return answer;
    }
}
