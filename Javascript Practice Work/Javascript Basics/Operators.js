//JavaScript Arithmetic Operators

var a=10;
var b=20;
//1) Addition
console.log(a+b);
//2) Subtraction
console.log(a-b);
//3)Multiplication
console.log(a*b);
//4)Division
console.log(a/b);
//5)Modulus
console.log(a%b);
//6)Increment operator ++
a++;
console.log(a);
//7) Decrement operator --
b--;
console.log(b);

//JavaScript Comparison Operators
    //we will get output only in boolean type

    var a1=30;
    var b1=40;
//1)Is Equal to ==
console.log(a1==b1);             //false
//2)Identical (equal and of same type)
console.log(a1===b1);            //false
//3)Not Equal to !=
console.log(a1!=b1);             //true
//4) Not Identical !==
console.log(a1!==b1);            //true
//5)Greater than  >
console.log(a1>b1);              //false
//6)Greater than Equal to >=
console.log(a1>=b1);             //false
//7) Less than  <
console.log(a1<b1);              //true
//8) Less than Equal to <=
console.log(a1<b1);              //true


//JavaScript Bitwise Operators

var a2=10;
var b2=20;
var c2=30;

//1)Bitwise AND &
console.log(a2==b2 & b2==c2);    //false
//2)Bitwise OR |
console.log(a2==b2 | b2==c2);    //false
//3)Bitwise XOR ^
console.log(a2==b2 ^ b2==c2);    //false
//4)Bitwise NOT ~
console.log(~10);                //-10
//5)Bitwise Left Shift <<
console.log(10<<2);              //40
//6)Bitwise Right Shift >>
console.log(10>>2);              //2
//7)Bitwise Right Shift with Zero >>>
console.log(10>>>2);             //2


//JavaScript Logical Operators

//1) Logical AND &&
console.log(10==20 && 20==30);      //False
//2) Logical OR ||
console.log(10==20 || 20==30);      //false
//3) Logical Not !
console.log(!(10==20));             //true



//JavaScript Assignment Operators

var a3=10;
var b3=20;
var c3=30;
//1) Assign =    10+10=20

//2) Add and assign +=
a3 += 20;
console.log(a3);        //30
//3)Subtract and assign -=
b3 -= 5;
console.log(b3);        //15
//4)Multiply and assign *=
a3 *= 2;
console.log(a3);        //60
//5)Divide and assign /=
b3 /= 2;
console.log(b3);        //7.5
//6)Modulus and assign %=
c3 %= 3;
console.log(c3);        //0



