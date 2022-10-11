import java.util.Scanner;

public class C6_3 {
    public static void main(String[] args){
        C6_3 T = new C6_3();
        Scanner scanner = new Scanner(System.in);

        int size = scanner.nextInt();
        int[] arr = new int[size];
        for(int i = 0 ; i < size; i++){
            arr[i] = scanner.nextInt();
        }

        for(int num : T.solution(arr,size)){
            System.out.print(num + " ");
        }
    }

    private int[] solution(int[] arr, int size) {
        for(int i = 1 ; i < size;i++){
            int temp = arr[i], j;
            for(j = i -1 ; j >= 0 ; j--){
                if(arr[j] > temp) arr[j+1] = arr[j];
                else break;
            }
            arr[j+1] = temp;
        }
        return arr;
    }
}
