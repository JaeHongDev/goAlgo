function solution(today, terms, privacies) {
    const termsTable = terms.reduce((pre,cal) => {
        const splitStr = cal.split(" ");
        pre.set(splitStr[0], Number(splitStr[1]))
        return pre;
    }, new Map());


    const stringToDate = (str) => {
        const splitStr = str.split(".")
        return new Date(splitStr[0], splitStr[1] -1, splitStr[2]);
    }

    const todayDateTime = stringToDate(today);
    return privacies.reduce((pre,cal,index) => {
        const splitStr = cal.split(" ");

        const privacie = stringToDate(splitStr[0]);

        privacie.setMonth(privacie.getMonth() + termsTable.get(splitStr[1]))

        if(todayDateTime >= privacie) {
            pre.push(index+1)
        }
        return pre

    },[])
}
