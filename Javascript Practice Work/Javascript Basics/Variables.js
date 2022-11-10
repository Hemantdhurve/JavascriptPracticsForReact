//Single line comment

/* Multi 
    Line
        Comment*/

//Variable Example
/*DataTypes- when we use 'var' It can hold any type of values such as numbers, strings etc(primitive datatype)
    Non-primitive dataTypes- Object, array.regExp*/
var x=20;   // Integer Type Variable

var _str='Hemant';     // String type Variable we can use Single or double quotes

var str="Hems";
//To print in terminal
console.log(x);
console.log(str);
console.log(_str);

// Example

var a=5;
var b=10;
var c=15;
var d=a+b+c;

//document.write(d);               //Used to print in web page if we use in html
console.log("Sum of the a+b+c is " + d);


//JavaScript local variable

 function local()
 {
    var x=10;      //local variable if declared inside a function or in block
 }

 if(10<13)
 {
    var z=15;
 }

 //JavaScript global variable

  var global=500;      //Global variable can be accessible from any function

  function g1()
  {
    console.log(global);
  }
  function g2()
  {
    console.log(global);
  }
  //calling function
  g1();
  g2();


  var value=50;  
  function a(){  
  alert(value);//accessing global variable   
  } 
