import java.util.Scanner;

public class C6_1 {
    public static void main(String[] args){
        C6_1 T = new C6_1();
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
        for(int i = 0 ; i < size - 1 ;i++){
            int idx = i;
            for(int j= i+1; j <size;j++){
               if(arr[idx] > arr[j]){
                   idx = j;
               }
            }
            int temp = arr[idx];
            arr[idx] = arr[i];
            arr[i] = temp;
        }
        return arr;
    }
}
