//JavaScript Abstraction

//Achieving Abstraction

//Creating a constructor function  
function Vehicle()  
{  
    this.vehicleName="vehicleName";  
    throw new Error("We cannot create instance of Abstract Class");  
}  
Vehicle.prototype.display=function()  
{  
    return "Vehicle is: "+this.vehicleName;  
}  

//Creating a constructor function  
function Bike(vehicleName)  
{  
    this.vehicleName=vehicleName;  
}  

//Creating object without using the function constructor  
Bike.prototype=Object.create(Vehicle.prototype);  
var bike=new Bike("Bajaj");  
console.log(bike.display());




//using instance of operator to test whether the object refers to the corresponding class

//Creating a constructor function  
function Vehicle1()  
{  
    this.vehicleName=vehicleName;  
    throw new Error("You cannot create an instance of Abstract class");  
}  
//Creating a constructor function  
function Bike1(vehicleName)  
{  
    this.vehicleName=vehicleName;  
}  
Bike1.prototype=Object.create(Vehicle1.prototype);  
var bike1=new Bike1("Bajaj");  

console.log(bike1 instanceof Vehicle1);   //We get return type in boolean
console.log(bike1 instanceof Bike1);