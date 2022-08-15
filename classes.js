class Student {
    grade=null
    name=''
    constructor(name,grade){
        this.name=name
        this.grade=grade
    }
sayHi = ()=>{
return `the name and grade of this student is ${this.name}, ${this.grade}`
    }

}


let stud1=new Student('John',98)
let stud2=new Student('Jack',91)
let stud3=new Student('Jill',88)

console.log(stud1.sayHi())
console.log(stud2.sayHi())
console.log(stud3.sayHi())

class teacher extends Student{
    currentlyTeaching='yes'
}

let teacher1 =new teacher('Jennifer')



