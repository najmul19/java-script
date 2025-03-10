const num=[1,2,3,4,5,6,6,7]

console.log(num)

// num.reverse()

// console.log(num)

const rev = []
for (const n of num) {
    // console.log(n)
    // rev.push(n)
    rev.unshift(n)
}
console.log(rev)
const rev_num=[]
for(let i=0;i<num.length;++i){
    const nn = num[i];
    rev_num.unshift(nn)
}
console.log(rev_num)

for(let i=num.length-1;i>=0;--i) {
    // console.log(i)
    const ne = num[i]
    console.log(ne)
}