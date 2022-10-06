import java.util.Scanner;

public class C1_11 {
    public static void main(String[] args){

        C1_11 T =  new C1_11();
        Scanner s = new Scanner(System.in);
        System.out.println(T.solution(s.next()));
    }
    public String solution(String str){
        int cnt = 1;
        char last = str.charAt(0);
        StringBuilder answer = new StringBuilder();
        for(int i = 1 ; i < str.length(); i ++){
            if(last == str.charAt(i)){
                cnt++;
                continue;
            }
            answer.append(last);
            if(cnt != 1) {
                answer.append(cnt);
            }
            last = str.charAt(i);
            cnt = 1;
        }

        if(cnt > 1){
            answer.append(last).append(cnt);
        }
        return answer.toString();
    }
}
