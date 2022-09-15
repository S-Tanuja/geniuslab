//Making a simple calculator

let num1=+prompt("enter num1");
let num2=+prompt("enter num2");
let op=prompt("enter a operator");
switch(op){
   case '+':
       {
           alert(num1+num2);
           break;
       }
   case '-':
       {
           alert(num1-num2);
           break;
       }
   case '*':
       {
           alert(num1*num2);
           break;
       }
   case '/':
       {
           alert(num1/num2);
           break;
       }
   default:
       alert("Invald operator");
}