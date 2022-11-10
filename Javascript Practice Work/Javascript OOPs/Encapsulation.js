//JavaScript Encapsulation

//1)simple example of encapsulation with getter and setter methods


class Student  
{  
    constructor()  
    {  
       var name;  
       var marks;  
    }  
        getName()  
        {  
          return this.name;  
        }  
        setName(name)  
        {  
            this.name=name;  
        }  
            
        getMarks()  
        {  
            return this.marks;  
        }  
        setMarks(marks)  
        {  
        this.marks=marks;  
        }  
  
}  
     var stud=new Student();  
     stud.setName("Hemant");  
     stud.setMarks(100);  
     console.log(stud.getName()+" "+stud.getMarks());


//Prototype-based approach

function Student1(name,marks)  
{  
  var s_name=name;  
  var s_marks=marks;  

  Object.defineProperty(this,"name",
    {  
        get:function()  
        {  
        return s_name;  
        },  
        set:function(s_name)  
        {  
            this.s_name=s_name;  
        }  
    
    });  
   
    Object.defineProperty(this,"marks",
    {  
        get:function()  
        {  
        return s_marks;  
        },  
        set:function(s_marks)  
        {  
            this.s_marks=s_marks;  
        }  
    
    });  
    
}  
  var stud1=new Student1("Hems",95);  
  console.log(stud1.name+" "+stud1.marks);