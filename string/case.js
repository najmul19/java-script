const s='abc'
const b='Abc'
console.log(b.toUpperCase())
if(s==b){
    console.log('equal')
} else {
    console.log('case sensitive')
}
if(s.toLowerCase==b.toLowerCase){
    console.log('equal')
} else {
    console.log('case sensitive')
}

const d = 'water'
const l='   water'

if(d==l){
    console.log('d and l equal')
} else {
    console.log('d and l not equal')
}
if(d.trim==l.trim){ // start and end space
    console.log('d and l equal')
} else {
    console.log('d and l not equal')
}