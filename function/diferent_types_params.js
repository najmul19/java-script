/**
 * even or not
 */

function evenSizedString(str) {
    const len = str.length;
    console.log(len,": ", str)

    if(len&1){
        console.log('odd')
        return true
    } else {
        console.log('even')
        return false
    }
}

evenSizedString('sylhet')
console.log(evenSizedString('ok'))

function doDoubleOrTriple ( num, doDouble) {
    if(doDouble){
        const res = num*2;
        return res
    } 
    const res = num*3;
        return res
}

console.log(doDoubleOrTriple(5,true))
console.log(doDoubleOrTriple(5,false))

function noOfElements(numbers) {
    const len = numbers.length;
    return len
}

console.log(noOfElements([1,2,5,3,5,4,3]))