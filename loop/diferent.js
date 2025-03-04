//odd
for(let i=0;i<=5;++i){
    if(i&1){
        console.log(i)
    }
}
for(let i=0;i<=5;++i){
    if(i%2){
        console.log(i)
    }
}
for(let i=0;i<=5;++i){
    if(i%2==0){
        console.log(i)
    }
}

// give me the list of number divisible by 5

for(let i=1;i<=50;++i){
    if(!(i%5) || !(i%3)){
        console.log(i)
    }
}