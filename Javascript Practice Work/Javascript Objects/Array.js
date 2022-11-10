//JavaScript array is an object that represents a collection of similar type of elements.

//1) JavaScript array literal
 var stu=["Hemant","Sonu","Kunal","Nishi"];

 for(i=0;i<stu.length;i++)         //.length property is used to iterate upto the array length
 {
    console.log(stu[i]+"\n");
 }

 //2) JavaScript Array directly (new keyword)

 var stud=new Array();         //without passing arguments
 stud[0]="Andrew";
 stud[1]= "Sim";
 stud[2]= "Kat";
 stud[3]= "Live";

 for(i=0;i<stud.length;i++)     
 {
    console.log(stud[i]+"\n");
 }

//3) JavaScript array constructor (new keyword)

var student=new Array("Mike","virat","Sam");

for(i=0;i<student.length;i++)     
 {
    console.log(student[i]+"\n");
 }



