
function solution(fees, records){
    const fee = new Fees(fees);
    const record = new ExitOrEntryRecorder(records);
    return record.calculateFees(fee);
    
}

class Fees{
    constructor(fees){
        this.basicTime = fees[0];
        this.basicPrice =fees[1];
        this.unitTime = fees[2];
        this.unitPrice = fees[3];
    }

    calculate(time){
        if(time <= this.basicTime) return this.basicPrice;
        return this.basicPrice + Math.ceil((time - this.basicTime) / this.unitTime) * this.unitPrice;
    }
}

class ExitOrEntryRecorder{
    constructor(records) {
        this.recordCollections = [];
        records.forEach(record =>{
            const [recordTime, number, history] = record.split(" ");
            const findCar = this.findByNumber(number);
            if(findCar === null) return this.recordCollections.push(new Recorder(recordTime,number,history));
            if(findCar &&  history  === "IN") return findCar.initializeRecordTime(recordTime);
            this.findByNumber(number).exit(recordTime);
        });
    }
    calculateFees(fee){
        this.recordCollections.forEach(record=> record.history === "IN" ? record.exit("23:59") : "");
        return this.recordCollections.sort((a,b)=> a.number-b.number).map(record=> fee.calculate(record.calculatedTime));
    }
    findByNumber(number){
        // 역순으로 확인해서 가장 마지막에 들어온 기록이 있는지 확인
        for(let i = this.recordCollections.length-1; i >= 0 ; i--){
            if(this.recordCollections[i].number === number) return this.recordCollections[i];
        }
        return null;
    }
}

class Recorder{
    constructor(record, number, history){
        this.record = record;
        this.number = number;
        this.history = history;
        this.calculatedTime = 0;
    }
    exit(record){
        this.history = "OUT";
        this.calculateTime(record);
    }
    initializeRecordTime(record){
        this.history = "IN";
        this.record = record;
    }
    calculateTime(record){
        const [outHH,outMM] = record.split(":")
        const [inHH,inMM] = this.record.split(":");
        
        let hh = Number(outHH) - Number(inHH);
        let mm = Number(outMM) -Number(inMM);
        if(mm < 0) {
            hh--;
            mm += 60;
        }
        this.calculatedTime += hh * 60 + mm;
    }
}

