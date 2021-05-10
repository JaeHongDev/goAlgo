function solution(participant, completion) {
    participant.sort();
    completion.sort();
    let compareIndex = -1;
    new Array(participant.length).fill(0).map((_, index) => {
        if (compareIndex !== -1) return 0;
        if (participant[index] !== completion[index]) {
            compareIndex = index;
        }
    });
    return participant[compareIndex]
}

const participant = [["leo", "kiki", "eden"],
["marina", "josipa", "nikola", "vinko", "filipa"],
["mislav", "stanko", "mislav", "ana"]]


const completion = [["eden", "kiki"], ["josipa", "filipa", "marina", "nikola"], ["stanko", "ana", "mislav"]]


for (let i = 0; i < 3; i++) {
    solution(participant[i], completion[i])
}
