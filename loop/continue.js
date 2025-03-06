for( let i=0;i<15;++i){
    if(i&1)continue
    console.log(i);
}
console.log('life is beautifull');

let n=50;
while(n>0) {
    --n
    if(n%5!=0)continue
    console.log(n);
}