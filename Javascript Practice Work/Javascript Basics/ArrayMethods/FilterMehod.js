const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}
console.log(result)





function test(element,index,array){
    return element>=10;
}
const arr=[15,5,52,3,13]
console.log('we get the value greater than 10 : '+arr.filter(test))