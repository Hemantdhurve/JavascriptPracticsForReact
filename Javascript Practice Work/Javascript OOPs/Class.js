//Class Declarations
  
class Student      //Declaring class
{  
    //Initializing an object  
    constructor(id,name)  
    {  
      this.id=id;  
      this.name=name;  
    }  
    //Declaring method  
    detail()  
    {  
        console.log(this.id+" "+this.name+"\n")  
    }  
}  
//passing object to a variable   
var s1=new Student(1,"Hemant Dhurve");  
var s2=new Student(2,"Mike Rana");  

s1.detail();        //calling method  
s2.detail(); 


/* Class Declarations Example: Re-declaring Class and Hoisting 
  
//Declaring class  
class Student1  
  {  
    //Initializing an object  
    constructor(id,name)  
    {  
      this.id=id;  
      this.name=name;  
    }  
    detail()  
    {  
  console.log(this.id+" "+this.name+"<br>")  
    }  
  } 

  //passing object to a variable   
    var e1=new Student1(3,"Tony Roy");  
    var e2=new Student1(4,"Will Kat");  

//calling method
    e1.detail();   
    e2.detail(); 

    //Re-declaring class  
    class Student1  
    {   
    } 
*/

//Unnamed Class Expression
var stu = class 
{  
    constructor(id, name) 
    {  
      this.id = id;  
      this.name = name;  
    }  
};  
  console.log(stu.name+"\n");  


//Class Expression Example: Re-declaring Class

//Declaring class  
var stud=class   
{  
    //Initializing an object  
    constructor(id,name)  
    {  
      this.id=id;  
      this.name=name;  
    }  
    //Declaring method      
    detail()  
    {  
  console.log(this.id+" "+this.name)  
    }  
}  
//passing object to a variable   
var e1=new stud(3,"Tony Roy");  
var e2=new stud(4,"Will Kat");  

//calling method
e1.detail();   
e2.detail();  
  
//Re-declaring class  
var stud=class   
  {  
//Initializing an object  
    constructor(id,name)  
    {  
      this.id=id;  
      this.name=name;  
    }  
    detail()  
    {  
  console.log(this.id+" "+this.name)  
    }  
  }  

//passing object to a variable   
var e1=new stud(5,"James Bella");  
var e2=new stud(6,"Nick Johnson");  
e1.detail(); //calling method  
e2.detail();


