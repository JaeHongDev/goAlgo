import java.util.ArrayList;
import java.util.Arrays;
import java.util.Scanner;

public class C6_6 {
    public static void main(String[] args) {

        C6_6 T = new C6_6();
        Scanner scanner = new Scanner(System.in);

        int size = scanner.nextInt();
        int[] arr = new int[size];
        for (int i = 0; i < size; i++) {
            arr[i] = scanner.nextInt();
        }
        for(int num : T.solution(size, arr)){
            System.out.print(num+1 + " ") ;
        }
    }

    public int[] solution(int[] arr, int size) {
        int[] answer = new int[2];
        int min = Integer.MIN_VALUE;
        int idx = -1;
        for (int i = 0; i < size - 1; i++) {
            if (idx ==-1 && arr[i] > arr[i + 1]) {
                idx = i;
                min = arr[i];
                answer[0] = i;
            }
            if (idx != -1 && min > arr[i]) {
                answer[1] = i;
            }
        }
        return answer;
    }
    public ArrayList<Integer> solution(int n, int[] arr){
        ArrayList<Integer> answer = new ArrayList<>();
        int[] temp = arr.clone();

        Arrays.sort(temp);
        for(int i = 0 ; i < n; i++){
            if(temp[i] != arr[i]) answer.add(i);
        }
        return answer;
    }
}
