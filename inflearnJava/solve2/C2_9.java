import java.util.Scanner;

public class C2_9 {
    public static void main(String [] args){
        C2_9 T = new C2_9();
        Scanner scanner = new Scanner(System.in);
        int size = scanner.nextInt();

        int[][] arr = new int[size][size];

        for(int i = 0 ; i < arr.length;i++){
            for(int j = 0 ; j < arr.length; j++){
                arr[i][j] = scanner.nextInt();
            }
        }
        System.out.println(T.solution(arr,size));
    }

    public int solution(int[][] arr, int size){
        int answer = 0;

        int sum2 = 0;
        int sum3 = 0;
        for(int i = 0; i < size; i++){
            int sum = 0;
            int sum1 = 0;
            for(int j =0 ; j < size;j++){
                sum += arr[i][j];
                sum1 += arr[j][i];
            }
            answer = Math.max(answer,sum);
            answer = Math.max(answer,sum1);

            sum2 += arr[i][i];
            sum3 += arr[size-1-i][size-1-i];
        }
        answer = Math.max(answer,sum2);
        answer = Math.max(answer,sum3);
        return answer;
    }
}
