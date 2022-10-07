import java.util.Arrays;
import java.util.Scanner;

public class C2_5 {
    public static void main(String [] args){
        C2_5 T = new C2_5();
        Scanner scanner = new Scanner(System.in);

        System.out.println(T.solution(scanner.nextInt()));
    }

    public int solution(int num){
        int count = 0;
        boolean []arr = new boolean[num+1];
        Arrays.fill(arr, false);
        for(int i = 2 ; i <= num;i++){
            if(arr[i]) continue;
            for(int j = 2; i*j <= num; j++){
                if(arr[i*j]) continue;
                arr[i*j] = true;
            }
        }
        for(int i = 2; i <= num; i++ ){
            if(arr[i]) continue;
            count++;
        }
        return count;
    }

}
