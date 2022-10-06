
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;

public class C1_10 {

    public static void main(String[] args) {

        C1_10 T = new C1_10();
        Scanner s = new Scanner(System.in);


        for (Integer num : T.solution(s.next(), s.next().charAt(0))){
            System.out.print(num + " ") ;
        }

    }
    public int[] solution(String str, char c){
        int [] arr = new int[str.length()];
        Arrays.fill(arr,str.length());

        int last = -1;
        List<Integer> numbers = new ArrayList<Integer>();
        for(int i = 0 ; i < str.length(); i++){
            if(str.charAt(i) == c) numbers.add(i);
        }

        for(Integer num : numbers){
            for(int i = 0 ; i < arr.length;i++){
                if(arr[i] > Math.abs(i -num))  arr[i] = Math.abs(i - num);
            }
        }
        return arr;
        // 9 9 9 9 9 9 9 9
        // 2
        // 1 0 1 2 1 0 1 1

        // lt = [2,4,8]
        // 0 0 0 0 0 0 0 0
        // 1 0 1 1 0 1 1 0
    }
}
