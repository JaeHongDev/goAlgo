import java.util.Arrays;
import java.util.Scanner;

public class C2_8 {
    public static void main(String [] args ){

        C2_8 T = new C2_8();

        Scanner scanner = new Scanner(System.in);
        int size = scanner.nextInt();
        int[] arr = new int[size];
        for(int i = 0 ; i < size;i++){
            arr[i] = scanner.nextInt();
        }
        for(int num: T.solution(size,arr )){
            System.out.print(num + " ");
        }
    }

    public int[] solution(int size, int []arr){
        int [] answer = new int[size];
        Arrays.fill(answer, size);
        for(int i = 0; i < size-1;i++){
            for(int j = i+1; j < size;j++){
                if(arr[i] < arr[j]){
                    answer[j] -= 1;
                } else if(arr[i] == arr[j]){
                    answer[i] -=1;
                    answer[j] -=1;
                }else{
                    answer[i] -=1;
                }
            }
        }
        return answer;
    }
}
