
function evneCheck(num){
    console.log(num)

    let evens=[];
    for(let i of num) {
         if(i&1)continue
         evens.push(i)
    }
    return evens;
}




const nums=[1,2,3,4,5,6,7,8,9]
const even = evneCheck(nums);
console.log('evens number', even)