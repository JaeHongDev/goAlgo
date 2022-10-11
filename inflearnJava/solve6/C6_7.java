import java.util.ArrayList;
import java.util.Collections;
import java.util.Scanner;

class Point implements  Comparable<Point>{
    private int x;
    private int y;

    public Point(int x, int y) {
        this.x = x;
        this.y = y;
    }


    @Override
    public int compareTo(Point o) {
        if(this.x == o.x) return this.y-o.y;
        return this.x - o.x;
    }

    public int getX() {
        return x;
    }

    public int getY() {
        return y;
    }
}

public class C6_7 {
    public static void main(String[] args){

        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();
        ArrayList<Point> arr = new ArrayList<>();
        for(int i = 0 ; i < n; i++){
            arr.add(new Point(scanner.nextInt(), scanner.nextInt()));
        }
        Collections.sort(arr);
        for(Point point : arr){
            System.out.println(point.getX() + " " + point.getY());
        }
    }


}
