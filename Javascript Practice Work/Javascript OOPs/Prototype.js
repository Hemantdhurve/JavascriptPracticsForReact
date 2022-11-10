//JavaScript Prototype Object

//1)adding a new method to the constructor function
function Student(fName,lName)  
{  
  this.fName=fName;  
  this.lName=lName;  
}  
  
/*syntax of prototype as 
classname.prototype.methodname*/

Student.prototype.fullName=function()  
  {  
    return this.fName+" "+this.lName;  
  }  
  
var stud1=new Student("Hemant","Dhurve");  
var stud2=new Student("Mike", "Rana");  
console.log(stud1.fullName());  
console.log(stud2.fullName()); 

//2)adding a new property to the constructor function.

function Student1(firstName,lastName)  
{  
  this.firstName=firstName;  
  this.lastName=lastName;  
}  
  
Student1.prototype.company="Bridgelabz"  
  
var std1=new Student1("Will","Kat");  
var std2=new Student1("Sonu", "Sood");  
console.log(std1.firstName+" "+std1.lastName+" "+std1.company);  
console.log(std2.firstName+" "+std2.lastName+" "+std2.company);