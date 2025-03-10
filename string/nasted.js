const school={
    name:'jkj',
    clas:['11','12'],
    events:['slkl','lkdl','slpl'],
    unique:{
        color:'black',
        result:{
            gpa:5,
            merit:'top'
        }
    }
}
console.log(school.name)
console.log(school)
console.log(school.unique)
console.log(school.unique.result)
console.log(school.unique.result.gpa)
school.events[1]='gala night'
console.log(school.events[1])

console.log(school)
delete school.clas
console.log(school)