const p = [
    {name:'sjampoom',price:300},
    {name:'chiruni',price:100},
    {name:'shirt',price:1000},
    {name:'pant',price:3000},
]

function getSum(products) {
//  console.log(products)
    let sum=0;
    for(let i of products){
        sum+=i.price
    } return sum;
}

const t = getSum(p);
console.log('total: ', t)