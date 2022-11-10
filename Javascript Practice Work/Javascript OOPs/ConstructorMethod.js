//JavaScript Constructor Method

//1)Simple Example of constructor

class Student 
{  
    constructor() 
    {  
      this.id=1;  
      this.name = "Hemant Dhurve";  
    }   
}  
  var stu = new Student();  
  console.log(stu.id+" "+stu.name); 

//2)Constructor Method Example: super keyword


class CollegeName  
{  
  constructor()  
  {  
    this.company="Bridgelabz";  
  }  
}  
class Student1 extends CollegeName 
{  
  constructor(id,name) 
  {  
    super();    //The super keyword is used to call the parent class constructor
    this.id=id;  
    this.name=name;  
  }   
}     
var std = new Student1(3,"Kunal Khemu");  
console.log(std.id+" "+std.name+" "+std.company);