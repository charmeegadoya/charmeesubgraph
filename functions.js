
function myFun(/*parameters */){
  // body
}
myFun();

let myFun1=function(/*parameters */){
  // body
}
myFun1();

let myArrowFun=(/*parameters */)=>{
  //body
}
myArrowFun();
const pie=3.142;
//pie=3.14;
let add=(num1,num2)=>{ 
    let result=num1+num2; 
    console.log(result);
}
add(67,90);

// if body contains single stmt then : {} are optional
let add1=(num1,num2)=>console.log(num1+num2);
add1(67,90);

// if body contains single return stmt then : {} are optional, return keyword not allowed
// body implicitly returns the result
let add2=(num1,num2)=> num1+num2;

let result=add2(67,90);
console.log(result);
// if method accepts single parameter then () are optional
let cubemeth=num=>num*num*num;

let result1=cubemeth(9);
console.log(result1);