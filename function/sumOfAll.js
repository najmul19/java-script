// objective: sum of all numbers

function sumOfAllNumbers(num){
    console.log(num)
    let sum=0;
    for(let i of num) {
         sum+=i
    }
    return sum;
}




const nums=[1,2,3,4,5,6,7,8,9]
const sum = sumOfAllNumbers(nums);
console.log('sum f numbers is', sum)