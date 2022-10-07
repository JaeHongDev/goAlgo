import java.util.ArrayList;
import java.util.Scanner;

public class C2_4 {
    public static void main(String[] args){
        C2_4 T = new C2_4();

        Scanner s = new Scanner(System.in);

        for(int num : T.solution(s.nextInt())){
            System.out.print(num + " ");
        }
    }

    public ArrayList<Integer> solution(int size){
        ArrayList<Integer> answer = new ArrayList<>();
        answer.add(1);
        answer.add(1);
        for(int i = 2; i < size; i++){
            answer.add(answer.get(i-1) + answer.get(i-2));
        }
        return answer;
    }
}
