//The JavaScript date object can be used to get year, month and day

var date=new Date();
var day=date.getDate();
var month=date.getMonth()+1;     //+1 is used to get current month as it strts from 0  to 11
var year=date.getFullYear();

console.log("Date is : " + day +"/"+ month+"/"+ year)


