import java.util.Scanner;
import java.util.Stack;

public class C5_3 {
    public static void main(String[] args) {
        C5_3    T         = new C5_3();
        Scanner scanner   = new Scanner(System.in);
        int     boardSize = scanner.nextInt();
        int[][] board     = new int[boardSize][boardSize];
        for (int i = 0; i < boardSize; i++) {
            for (int j = 0; j < boardSize; j++) {
                board[i][j] = scanner.nextInt();
            }
        }
        int   basketSize = scanner.nextInt();
        int[] basket     = new int[basketSize];
        for (int i = 0; i < basketSize; i++) {
            basket[i] = scanner.nextInt();
        }

        System.out.println(T.solution(board, boardSize, basket, basketSize));
    }

    private int solution(int[][] board, int boardSize, int[] basket, int basketSize) {
        int            answer = 0;
        Stack<Integer> stack  = new Stack<>();
        for (int item : basket) {
            for (int i = 0; i < boardSize; i++) {
                if (board[i][item - 1] == 0) continue;
                if (!stack.isEmpty() && stack.lastElement() == board[i][item - 1]) {
                    answer += 2;
                    stack.pop();
                } else {
                    stack.push(board[i][item - 1]);
                }
                board[i][item - 1] = 0;
                break;
            }
        }
        return answer;
    }
}
