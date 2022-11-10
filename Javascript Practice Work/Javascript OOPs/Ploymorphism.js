//JavaScript Polymorphism

//Example on child class object invokes the parent class method.

class A  
  {  
     display()  
    {  
      console.log("A is invoked");  
    }  
  }  
class B extends A  
  {  
  }  
    var b=new B();  
    b.display();


//
class A1  
  {  
     display()              //here same method name so object of child class invokes both classes method.
    {  
      console.log("A1 is invoked");  
    }  
  }  
class B1 extends A1  
  {  
    display()  
    {  
      console.log("B1 is invoked");  
    }  
  }  
  
    var a=[new A1(), new B1()]  
    a.forEach(function(msg)  
    {  
        msg.display();  
    })


//prototype-based approach.

function A2()  
{  
}  
A2.prototype.display=function()  
{  
  return "A2 is invoked";  
}  
function B2()  
{  
    
}  
  
B2.prototype=Object.create(A2.prototype);  
  
var b=[new A2(), new B2()]  
  
b.forEach(function(msg)  
{  
  console.log(msg.display());  
});  
