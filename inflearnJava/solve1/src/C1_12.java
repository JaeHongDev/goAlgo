import java.util.Scanner;

public class C1_12 {
    public static void main(String[] args){

        C1_12 T = new C1_12();
        Scanner scanner = new Scanner(System.in);
        int size = scanner.nextInt();
        String str = scanner.next();
        System.out.println(T.solution(str,size));
    }

    public String solution(String str, int size){
        StringBuilder stringBuilder = new StringBuilder();
        for(int i = 0 ; i < size; i ++){
            String s =  str.substring(i * 7, 7 * (i+1));
            System.out.println(s);
            int num = 0;
            for(int j = 0 ; j <s.length(); j++){
                if(s.charAt(j) == '#') {
                    // 7 6 5 4 3 2 1
                    num += Math.pow(2, 6 - j);
                }
            }
            stringBuilder.append(Character.toChars(num));
        }
        return stringBuilder.toString();
    }
}
