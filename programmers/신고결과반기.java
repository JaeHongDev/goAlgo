import java.util.ArrayList;
import java.util.Arrays;
import java.util.Iterator;
import java.util.List;
import java.util.stream.Collectors;

public class Main {
    public static void main(String [] args){
        System.out.println(11);

        new Solution().solution(
                new String[]{"muzi", "frodo", "apeach", "neo"},
                new String[] {"muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"},
                2
        );
    }
}

class Solution{
    private UserRepository userRepository;
    public int[] solution(String[] id_list, String[] report, int k){
        int[] answer = {};


        this.userRepository = new UserRepository(id_list);
        this.userRepository.reportUser(report);
        return this.userRepository.sendEmailUserCount(k);
    }
}

class UserRepository{
    private List<User> users = new ArrayList<User>();
    public UserRepository(String []id_list){
        for(int i = 0; i < id_list.length;i++){
            this.users.add(new User(id_list[i]));
        }
    }
    public User findByName(String name){
        Iterator<User> userIterator = this.users.iterator();
        while(userIterator.hasNext()){
            User user = userIterator.next();
            if(user.getName().equals(name)){
                return user;
            }
        }
        return null;
    }

    public void reportUser(String[] userNames){
        userNames =  Arrays.asList(userNames).stream().distinct().collect(Collectors.toList()).toArray(new String[]{});
        for(int i = 0 ; i < userNames.length;i++){
            String[] splitUserNames = userNames[i].split(" ");
            var reportUser =  this.findByName(splitUserNames[0]);
            var reportingUser = this.findByName(splitUserNames[1]);

            reportUser.insertReportingUser(reportingUser);
            reportingUser.insertReportUser(reportUser);
        }
    }

    public int[] sendEmailUserCount(int limit){
        Iterator<User> userIterator = this.users.iterator();
        int[] counts = new int[this.users.size()];
        int i = 0;
        while(userIterator.hasNext()){
            var user = userIterator.next();
            int count = user.getReportingCount(limit);
            counts[i++] = count;
        }
        return counts;
    }

}
class User{
    private String name;



    private List<User> reportedUser   = new ArrayList<User>(); // 내가 신고한사람
    private List<User> reportingForMe = new ArrayList<User>(); // 나를 신고한 사람

    public String getName() {
        return name;
    }

    public List<User> getReportedUser() {
        return reportedUser;
    }

    public List<User> getReportingForMe() {
        return reportingForMe;
    }

    public User(String name) {
        this.name = name;
    }
    public void insertReportUser(User user){
        this.reportedUser.add(user);
    }
    public void insertReportingUser(User user){
        this.reportingForMe.add(user);
    }

    public int getReportingCount(int limit) {
        Iterator<User> userIterator = this.reportedUser.iterator();
        int count = 0;
        while(userIterator.hasNext()){
            var user = userIterator.next();
            if(user.getReportingForMe().size() >= limit) {
                count++;
            }
        }
        return count;
    }
}
