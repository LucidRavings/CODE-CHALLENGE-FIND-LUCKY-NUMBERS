// Write your code below this line.
let luckyNumbers = []
function findLuckyNumbers(num){
    let ranNum = 0
    if (num > 0 && num <= 10){
        while (luckyNumbers.length < num){
            ranNum = (Math.floor(Math.random() * 10 + 1))
            if (!luckyNumbers.includes(ranNum)){
            luckyNumbers.push(ranNum)
            console.log("Lucky number added!")
            }
        }
        return luckyNumbers
    }else{
        console.log("Invalid input")
        return NaN
    }
}
console.log(findLuckyNumbers(8))