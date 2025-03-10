const ar=['abul','babul','cabul','abul','mokbul','dabul','pagul']
const num=[1,2,4,53,6,2,5,2,6,7,2]


function noDuplicae(array) {
    console.log(array)
    const uniqu =[];
    for(const i of array) {
        if(uniqu.includes(i)==false){
            uniqu.push(i)
        }
    } return uniqu
}

const uniq = noDuplicae(ar)

console.log(uniq)