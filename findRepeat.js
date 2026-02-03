//Count how many times the a number is repeated in the array.
function countRepeat(num){
    let count=0;
    let safeNum=[];
    for(let i=0; i<num.length; i++){
        safeNum[i]=parseInt(num[i]);
    }
//    console.log(safeNum);
    for(let i=0; i<safeNum.length; i++){
        if(safeNum[i]===25) count++;
    }
    return count;
}

let arr= ["25","3","77","25","12", "25","5"];
console.log("Repeated: ",countRepeat(arr)+" times.");