// 12 inch = 1feet

function inchToFeet(inch) {
    const feet = inch/12
    return feet;
}
// 
function inchToFeet2(inch) {
    const feetFraction = inch/12
    const feetNumber = parseInt(feetFraction)
    const inchRemain=inch%12
    const res = feetNumber+ ' ft ' + inchRemain + ' inch.'
    return res;
}

const shamimHeight = inchToFeet(26)
console.log(shamimHeight)
const shamimHeight2 = inchToFeet2(26)
console.log(shamimHeight2)