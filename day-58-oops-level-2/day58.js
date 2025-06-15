//  oops level 2
// what is prototype what is use prototype??


class Student{
    constructor(name,age){
        this.name=name;
        this.age=age;
        // this.division=1;// all onbject ke liye sam value rahegi divisionki tab ham use karte hai "  prototype "
    }

}
Student.prototype.division=1;
Student.prototype.syahello=function(){
    console.log(this.name,"is my name");
    
};

let obj1=new Student("rutan",32);
let obj2=new Student("raj",23);