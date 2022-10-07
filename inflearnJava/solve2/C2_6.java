import java.util.ArrayList;
import java.util.Arrays;
import java.util.Scanner;

public class C2_6 {
    public static void main(String[] args) {
        C2_6 T = new C2_6();

        Scanner s = new Scanner(System.in);
        int size =s.nextInt();
        String [] arr = new String[size];
        for(int i = 0 ; i < size ; i++) arr[i] = s.next();

        for(Integer num : T.solution(arr, size)){
            System.out.print(num + " ");
        }
    }

    public ArrayList<Integer> solution(String[] arr, int n) {
        ArrayList<Integer> answer = new ArrayList<>();
        boolean[] pm = new boolean[100001];
        Arrays.fill(pm,false);
        pm[1] = true;
        for(int i = 2; i <= 100000; i++){
            if(pm[i]) continue;
            for(int j = 2; i*j <= 100000; j++) pm[i * j] = true;
        }

        for (int i = 0; i < n; i++) {
           int num = Integer.parseInt(new StringBuilder(arr[i]).reverse().toString());
           if(!pm[num]) answer.add(num);
        }
        return answer;
    }
}
