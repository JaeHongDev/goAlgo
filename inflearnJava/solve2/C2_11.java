import java.util.Scanner;

public class C2_11 {
    public static void main(String [] args){

        C2_11 T = new C2_11();

        Scanner scanner = new Scanner(System.in);
        int size = scanner.nextInt();
        int [][]arr = new int[size][5];
        for(int i = 0 ; i < size;i++){
            for(int j = 0 ; j < 5;j++){
                arr[i][j] = scanner.nextInt();
            }
        }
        System.out.println(T.solution(arr,size));

    }

    public int solution(int [][]arr, int size){
        int index = 0;
        int answer = 0;
        for(int i = 0; i < size; i++){
            int count = 0;
            for(int j = 0; j < 5; j++){
                for(int k = 0 ; k < size;k++){
                    if(arr[i][j] == arr[k][j]) count++;
                }
            }
            if(answer < count){
                index = i;
                answer = count;
            }

        }
        return index +1;
    }
}


