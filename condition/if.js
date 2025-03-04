/**
 * structure
 * if(condition) {
 * 
 * }
 */

if(3<10){
    console.log(3+' is smaller then 10')
}
else {
    console.log(3+' is greater then 10')

}

const a = 1;
const isOk=true
if(a>100 && isOk){
 console.log('ok')
} else{
    console.log('not')
}

const p=5000;
const isfeMale = true;


if(p>=5000){
    if(isfeMale){
        // 20%
    const d= p*20/100;
    const pay = p-d;
    console.log(pay)
    } else {
        // 10%
    const d= p*10/100;
    const pay = p-d;
    console.log(pay)
    }
}
else if(p>2500) {
    // 5%
    const d= p*5/100;
    const pay = p-d;
    console.log(pay)
}
else{
    console.log(p);
}