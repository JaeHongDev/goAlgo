import java.util.Scanner;

public class C2_7 {
    public static void main(String[] args) {
        C2_7 T = new C2_7();
        Scanner scanner = new Scanner(System.in);

        int size = scanner.nextInt();
        int[] arr = new int[size];
        for (int i = 0; i < size; i++) {
            arr[i] = scanner.nextInt();
        }

        System.out.println(T.solution(arr,size));
    }

    public int solution(int [] arr, int size){

        int answer = 0;
        int count = 0;
        for( int i = 0 ; i < size; i++){
            if(arr[i] == 1 ) {
                count++;
                answer += count;
            }
            if(arr[i] == 0 ) {
                count = 0;
            }
        }
        return answer;
    }
}
