function solution(id_list = [], report = [], k) {
  const hashTable = new Map();

  const initializeUserTable = (id_list) =>
    id_list.forEach((item) => {
      hashTable.set(item, []);
    });

  const isUser = (username) => {
    return hashTable.has(username);
  };
  const setUser = (reportUsername) => {
    const [reportingUser, reportedUser] = reportUsername.split(" ");
    hashTable.set(reportingUser, [...hashTable.get(reportingUser), reportedUser]);
  };

  initializeUserTable(id_list);
  for (let i = 0; i < report.length; i++) {
    setUser(report[i]);
  }
 const answer = []; 
 hashTable.forEach(user=>answer.push(user.length));
 console.log(answer);
}

solution(
  ["muzi", "frodo", "apeach", "neo"],
  ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
  2
);
