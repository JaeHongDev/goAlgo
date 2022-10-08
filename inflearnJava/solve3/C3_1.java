import java.util.ArrayList;
import java.util.Arrays;
import java.util.Scanner;

public class C3_1 {
    public static void main(String[] args){

        C3_1 T = new C3_1();

        Scanner scanner = new Scanner(System.in);
        int size1 = scanner.nextInt();
        int []arr1 = new int[size1];
        for(int i = 0;  i < size1;i ++){
            arr1[i] = scanner.nextInt();
        }
        int size2 = scanner.nextInt();
        int []arr2 = new int[size2];
        for(int i = 0 ; i <size2;i++){
            arr2[i] = scanner.nextInt();
        }
        for(int num : T.solution(arr1,arr2)){
            System.out.print(num + " ");
        }
    }

    public int[] solution(int[]arr1, int[]arr2){
        int [] answer = new int[arr1.length + arr2.length];

        System.arraycopy(arr1, 0, answer, 0, arr1.length);
        System.arraycopy(arr2, 0, answer, arr1.length, arr2.length);
        Arrays.sort(answer);
        return answer;

    }
}
