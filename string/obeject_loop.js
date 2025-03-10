const mobile={
    brand:'sumsung',
    price:25000,
    color:'black',
    camera:'50mp'
}
// for of: array
// forin: object
for (let i in mobile){
    console.log(i)
    console.log(mobile[i])
}
const keys=Object.keys(mobile)
console.log(keys)

for(let key of keys){
    console.log(key, ': ', mobile[key])
}