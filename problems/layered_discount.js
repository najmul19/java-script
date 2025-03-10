/**
 * 1st 100--100
 * 101 to 200--90
 * above200--70
 */

function layeredDiscount(quantity){
    const f = 100;
    const s = 90;
    const above = 70
    if(quantity<=100){
        const total = quantity * f;
        return total
    } else if(quantity<=200){
        const first100total=100*f;
        const remainingQ = quantity-100;
        const remainingTotal = remainingQ * s;
        const total = first100total + remainingTotal;
        return total;
    } else {
        const first100total=100*f;
        const second100total=100*s;
        const remainingQ = quantity-200;
        const remainingTotal = remainingQ * above;
        const total = first100total +second100total + remainingTotal;
        return total;
    }
}


const total = layeredDiscount(201);
console.log(total)