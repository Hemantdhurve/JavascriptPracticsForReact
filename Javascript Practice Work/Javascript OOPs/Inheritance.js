//JavaScript Inheritance

//inbuilt object

class Moment extends Date 
{  
    constructor() 
    {  
      super();  
    }
}  
  var m=new Moment();  
  console.log("Current date:")  
  console.log(m.getDate()+"-"+(m.getMonth()+1)+"-"+m.getFullYear());


class Moment1 extends Date {  
    constructor(year) {  
      super(year);  
    }}  
  var n=new Moment1("November 10, 2022 11:52:10");  
  console.log("Year value:")  
  console.log(n.getFullYear()); 


//Custom class

class Bike      //Parent custom class
{  
  constructor()  
  {  
    this.company="Bajaj";  
  }  
}  
class Vehicle extends Bike     //Bike child class
{  
  constructor(name,price) 
  {  
    super();  
    this.name=name;  
    this.price=price;  
  }   
}  
var v = new Vehicle("Pulsar","120000");  
console.log(v.company+" "+v.name+" "+v.price);  

//Prototype-based approach

//Constructor function  
function Bike(company)  
{  
    this.company=company;   
}  
  
Bike.prototype.getCompany=function()  
{  
  return this.company;  
}  
//Another constructor function  
function Vehicle(name,price) 
{  
 this.name=name;  
  this.price=price;  
}   
var bike = new Bike("Hero");  
Vehicle.prototype=bike;             //Now Bike treats as a parent of Vehicle.  

var vehicle=new Vehicle("Xtream",170000);  
console.log(vehicle.getCompany()+" "+vehicle.name+" "+vehicle.price);