import java.util.Arrays;
import java.util.Scanner;

public class C6_10 {
    public static void main(String[] args){
       C6_10 T = new C6_10();

        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();
        int c = scanner.nextInt();

        for(int i = 0 ; i < n ; i++) arr[i] = scanner.nextInt();
        System.out.println(T.solution(n,c,arr))
    }

    public int solution(int n, int c, int[] arr){
        int answer = 0;
        Arrays.sort(arr);
        int lt = 1;
        int rt = arr[n-1];
        while(lt <= rt){
            int mid = (lt+rt)/2;
            if(count(arr,mid) >= c){
                answer = mid;
                lt = mid + 1;
            }
            else rt = mid -1;
        }
        return answer;
    }

    private int count(int[] arr, int mid) {
        int cnt = 1;
        int ep = arr[0];
        for(int i = 1 ; i < arr.length; i++){
            if(arr[i] - ep >=dist){
                cnt++;
                ep = arr[i];
            }
        }
        return cnt;
    }
}
