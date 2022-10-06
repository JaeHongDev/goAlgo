import java.util.ArrayList;
import java.util.Scanner;

public class C2_1 {
    public static void main(String [] args){
        C2_1 T = new C2_1();
        Scanner scanner = new Scanner(System.in);
        int size = scanner.nextInt();
        int[] arr = new int[size];
        for(int i = 0 ; i <size; i++){
            arr[i] = scanner.nextInt();
        }
        for(int num : T.solution(arr, size)){
            System.out.print(num + " ");
        }
    }

    public ArrayList<Integer> solution(int[] arr, int size){
        ArrayList<Integer> answer = new ArrayList<>();

        int min = 0;
        for(int num: arr){
            if(num > min) {
                answer.add(num);
            }
            min = num;
        }
        return answer;
    }
}
