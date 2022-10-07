import java.util.Scanner;

public class C2_2 {
    public static void main(String [] args){

        C2_2 T = new C2_2();
        Scanner scanner = new Scanner(System.in);

        int size = scanner.nextInt();
        int[] arr = new int[size];
        for(int i = 0 ; i <size; i++){
            arr[i] = scanner.nextInt();
        }
        System.out.println(T.solution(size, arr)) ;

    }
    public int solution(int size, int[] arr){
        int answer = 1;
        int max = arr[0];
        for(int i = 1 ; i <arr.length; i++){
            if(arr[i] > max) {
                answer++;
                max = arr[i];
            }
        }
        return answer;
    }
}
