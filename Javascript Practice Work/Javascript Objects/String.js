//The JavaScript string is an object that represents a sequence of characters.

/*1) By string literal
    created using double quotes*/

var str="This is String";

console.log(str);

//2) By string object (using new keyword)

var str1=new String("This is new String");

console.log(str1);

//JavaScript String Methods

//1) JavaScript String charAt(index) Method

var java="hemant";
console.log(java.charAt(3));     //a

//2) JavaScript String concat(str) Method

var a="Hello";
var b=" Hemant";
var c=a.concat(b);

console.log(c);
console.log(a+b);   //Another way to concat string


//3) JavaScript String indexOf(str) Method

var d="My name is Hemant";
var n=d.indexOf("is");

console.log(n);

//4) JavaScript String lastIndexOf(str) Method

var e="My name is Hemant";
var m=e.lastIndexOf("a");

console.log(m);

//5) JavaScript String toLowerCase() Method

var f="My name is Hemant";
var q=f.toLowerCase();

console.log(q);

//6) JavaScript String toUpperCase() Method
var g="My name is Hemant";
var w=g.toUpperCase();

console.log(w);

//7) JavaScript String slice(beginIndex, endIndex) Method

var h="My name is Hemant";
var r=h.slice(5,10);

console.log(r);

//8) JavaScript String trim() Method

var j="   My name is Hemant  "
var t=j.trim();

console.log(t);

//9) JavaScript String split() Method

var y="My name is Hemant";
var u=y.split(" ");

console.log(u);
