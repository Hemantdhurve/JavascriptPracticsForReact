//JavaScript static Method

//1)simple example of a static method

class Test  
{  
  static display()  
  {  
    return "static method is invoked"  
  }  
}  
console.log(Test.display());

//2) Invoke more than one static method and if method name same then js invoke always last static method by default 

class Test1  
{  
  static display1()  
  {  
    return "static method is invoked"  
  }  
  static display2()  
  {  
    return "static method is invoked again"  
  }  
  static display2()
  {
    return "This is the similar method last method invoked"
  }
}  
console.log(Test1.display1());  
console.log(Test1.display2());

//3)Invoke a static method within the constructor

class Test3 {  
    constructor() 
    {  
        console.log(Test3.display());   
        console.log(this.constructor.display());   
    }  
    
    static display() 
    {  
        return "static method is invoked"  
    }  
  }  
  var t=new Test3();

  //4)Invoke a static method within the non-static method.

  class Test4 
  {  
    static display() 
    {  
        return "static method is invoked"  
    }  
      
   show()       //non-static method
   {  
        console.log(Test4.display());   
   }    
  }  
  var t1=new Test4();       //creating instance
  t1.show();                //calling non-static method

  



