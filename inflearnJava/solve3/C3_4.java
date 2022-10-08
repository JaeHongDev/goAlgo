import java.util.Scanner;

public class C3_4 {
    public static void main(String []args){
        //8 6
        //1 2 1 3 1 1 1 2
        C3_4 T = new C3_4();

        Scanner scanner = new Scanner(System.in);
        int size =  scanner.nextInt();
        int sum = scanner.nextInt();

        int[]arr = new int[size];

        for(int i = 0 ; i < size; i++)arr[i] = scanner.nextInt();
        System.out.println(T.solution(arr,size, sum));
    }
    public int solution(int []arr, int size, int m){
        int answer = 0;
        int lt = 0, rt = 0;
        int sum = 0;
        for(rt = 0; rt < size; rt++){
            sum += arr[rt];
            if(sum == m) answer++;
            while(sum >= m){
                sum -= arr[lt++];
                if(sum == m) answer++;
            }
        }
        return answer;
    }
}
