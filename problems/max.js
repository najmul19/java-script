const height = [29,29,94,99,28]
function getMax(numbers) {
    // console.log(numbers)
    let a=0
    for( const i of numbers) {
        if(a<i)a=i;
    } return a;
}

const max = getMax(height)
console.log('max value is : ',max)