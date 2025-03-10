const s = 'I am a good working person'
let rev =''
for ( let i of s){
    // console.log(i)
    rev = i+rev
}
console.log(rev)
let r=''
for(let i=0;i<s.length;++i ){
    // console.log(i)
    // console.log(s[i])

    let l = s[i]
    r=l+r;
}
console.log(r)
let o = s.split('').reverse().join('')
console.log(o)