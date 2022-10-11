import java.util.HashSet;
import java.util.Scanner;
import java.util.Set;

public class C6_5 {
    public static void main(String[] args){
        C6_5 T = new C6_5();
        Scanner scanner = new Scanner(System.in);

        int size = scanner.nextInt();
        int[]arr = new int[size];

        for(int i = 0 ; i<size;i++){
            arr[i] = scanner.nextInt();
        }

        System.out.println(T.solution(arr,size));
    }
    public Character solution(int[]arr, int size){
        Set<Integer> set = new HashSet<>();

        for(int item: arr){
            if(set.contains(item)) return 'D';
            set.add(item);
        }
        return 'U';
    }
}
