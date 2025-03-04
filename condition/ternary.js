/**
 * ternary --> thre parts
 */

const age = 23;
let price = 200;
const isLeader=false;
(age>18) ? console.log('adult'):console.log('kochi')

if(isLeader===true){
    price=0;
} else {
    price+=10;
}
console.log(price)


price = isLeader===true? 0: price+100;



console.log(price)
price = 10000;
if(isLeader) {
    if(price>1000) {
        price = price/2;
    } else {
        price=0;
    }
} else {
    price=price+10;
}
console.log(price)
price = isLeader===true? price>1000?price/=2:0 : price+100;
console.log(price)