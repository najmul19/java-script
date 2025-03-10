const num=[2,5,2,5,7,2,7,13,99,5,3]
// ascending
const ascSort = num.sort() //sort like string
console.log(ascSort)
// descending
const descSort = num.sort().reverse() // sort like string
console.log(descSort)

// ascending correct
const ascSortCur = num.sort(function(a,b){return a-b}) 
console.log(ascSortCur)
// descending correct
const descSortCur = num.sort(function(a,b){return b-a}) 
console.log(descSortCur)