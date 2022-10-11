import java.util.Arrays;
import java.util.Scanner;

public class C6_8 {
    public static void main(String[] args) {
        int answer=0;
        Scanner scanner = new Scanner(System.in);
        int N = scanner.nextInt();
        int m = scanner.nextInt();
        int[] arr = new int[N];

        for(int i = 0 ; i < N; i++){
            arr[i] = scanner.nextInt();
        }
        Arrays.sort(arr);

        int lt = 0, rt = N-1;
        while(lt <= rt){
            int mid = (lt+rt) /2;
            if(arr[mid] == m){
                answer = mid+1;
                break;
            }
            if(arr[mid] > m ) rt =mid-1;
            else lt = mid+1;
        }
        System.out.println(answer);
    }

}
