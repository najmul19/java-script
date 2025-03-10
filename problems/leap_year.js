/**
 * year will be a leap if divisible by 4 and it will not divisble by 100
 * 
 */

function isLeapYear(year) {
    if(year%100 && year%4==0){
        return true
    } else if(year%100==0 && year%400==0) return true
    return false
    
}

const isLep = isLeapYear(2100)
console.log(isLep)
const isLep2 = isLeapYear(2400)
console.log(isLep2)
const isLep3 = isLeapYear(1900)
console.log(isLep3)
const isLep4 = isLeapYear(2052)
console.log(isLep4)