//Function without Paramater

function msg()
{
    console.log("Hello World")
}
msg();

//Function with Parameter

function getcube(num)
{  
    console.log(num*num*num);  
} 
    getcube(5);   //Calling Functions
    getcube(10);  //Can call many times

//Function with return Value

function returntype()
{
    return "Hello Hemant";
}
console.log(returntype());

//Function Object

var sum= new Function("num1","num2","return num1+num2");
console.log(sum(10,20));

//Using Math.Pow function
var pow=new Function("num1","num2","return Math.pow(num1,num2)");  
console.log(pow(2,3));