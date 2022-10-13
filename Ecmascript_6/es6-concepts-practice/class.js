// syntactic sugar
// class Instructor{
//     name;
//     designation = 'Web Course Instructor'
//     team = 'web team'
//     location;
//     constructor(name, location){
//         this.name = name;
//         this.location = location;
//     }
//     startSupportSession(time){
//         console.log(`start the support session at ${time}`)
//     }
//     createQuiz(module){
//         console.log(`please create quiz for module ${module}`)
//     }
// }
// const aamir = new Instructor('aamir', 'mumbai')
// console.log(aamir);
// aamir.startSupportSession('9.00');
// aamir.createQuiz(60);

// const solaiman = new Instructor('Solaiman Khan', 'dhaka')
// console.log(solaiman);
// solaiman.createQuiz(50);

class Teacher{
    name;
    schoolName = 'JCPSC'
    age;
    location;
    constructor(name,age,location){
        this.name=name
        this.age=age
        this.location=location
    }
    add(num1,num2){
        return num1+num2
    }

}

// const afnan=new Teacher("Afnan Ferdousi",16,"Sylhet")
// console.log(afnan)
// console.log(afnan.add(5,10))

class BanglaTeacher extends Teacher{
    designation = 'Bangla Teacher';
    salary;
    degree;
    constructor(name,age,location,salary,degree){
        super(name,age,location);
        this.salary=salary;
        this.degree=degree;
    };
    takeBanglaClass(){
        console.log(`I am ${this.designation}. I am taking bangla class`)
    }    
}

// const shakilHussen=new BanglaTeacher("Shakil Hussen",25,"Dhaka",50000,"Masters");
// console.log(shakilHussen);
const mashrufa=new BanglaTeacher("Mashrufa binte Faisal",7,"Sylhet",10000,"Web development")
console.log(mashrufa);