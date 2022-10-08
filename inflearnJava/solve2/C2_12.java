import java.util.Scanner;

public class C2_12 {
    public static void main(String[] args){
        C2_12 T = new C2_12();

        Scanner scanner = new Scanner(System.in);
        int N = scanner.nextInt();
        int M = scanner.nextInt();
        int[][] arr = new int[M][N];
        for(int i = 0 ; i < M;i++){
            for(int j = 0 ; j < N; j++){
                arr[i][j] = scanner.nextInt();
            }
        }

        System.out.println(T.solution(arr, N, M));
    }
    public int solution(int [][]arr, int N, int M){
        int answer = 0;
        for(int i = 0 ; i < M ; i++){
            for(int j = 0 ; j < N ; j++){
                int count = 0;
                for(int k = 0; k < M ; k++){
                    int pi = 0, pj = 0;
                    for(int l = 0 ; l < N ; l++){
                        if(arr[k][l] == i) pi = l;
                        if(arr[k][l] == j) pi = l;
                    }
                    if(pi < pj) count++;
                }
                if(count == M ) answer++;
            }
        }
        return answer;
    }
}
