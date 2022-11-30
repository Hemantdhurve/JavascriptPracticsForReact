const array=[1,2,3,4]

const initial=5
const reduceMethodSum=array.reduce((prevVal,currentVal)=>prevVal*currentVal,initial)

console.log(reduceMethodSum)


const arraystr=['h','e','m','a','n','t']

const initialstr=' '
const reduceMethodString=arraystr.reduce((prevVal,currentVal)=>prevVal+currentVal,initialstr)

console.log(reduceMethodString)

