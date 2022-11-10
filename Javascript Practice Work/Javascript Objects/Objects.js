//1) JavaScript Object by object literal

stud={id:1,name:"Hemant",mark:100}

console.log(stud.id+" "+stud.name+" "+stud.mark);

//2) By creating instance of Object

var stu=new Object();    // new keyword is used to create object.
stu.id1=2;
stu.name1="Kunal";
stu.mark1=80;

console.log(stu.id1+" "+stu.name1+" "+stu.mark1)

//3) By using an Object constructor

function std(id,name,mark)     //function with argument and value assign with "this" keyword
{
    this.id=id;
    this.name=name;
    this.mark=mark;
}
s=new std(3,"Nishi",90);

console.log(s.id+" "+s.name+" "+s.mark);


//Defining method in JavaScript Object

function student(id,name,mark)
{
    this.id=id;  
    this.name=name;  
    this.mark=mark;

    this.newmarks=newmarks;
    function newmarks(anymarks)
    {
        this.mark=anymarks;
    }
}
a=new student(4,"Sonu",85);

console.log(a.id+" "+a.name+" "+a.mark);
a.newmarks(95);
console.log("\n"+a.id+" "+a.name+" "+a.mark);


