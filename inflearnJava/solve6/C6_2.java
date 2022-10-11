import java.util.Scanner;

public class C6_2 {
    public static void main(String[] args){
        C6_2 T = new C6_2();
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
        for(int i = 0 ; i < size-1 ;i++){
            for(int j= 0; j <size-i-1;j++) {
                if(arr[j] > arr[j+1]){
                    int temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] =temp;
                }
            }
        }
        return arr;
    }
}
