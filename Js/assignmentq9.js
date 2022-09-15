
let lengthOfString=(str)=>{
    length=0;
    for(let  i=0;str[i]!==undefined;i++){
        length++;
    }
    return length;
}

let str=prompt("enter the string");
stringLength=lengthOfString(str);
alert(stringLength);