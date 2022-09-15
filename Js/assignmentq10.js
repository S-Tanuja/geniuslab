shouldServeDrinks=(age,breakSession)=>{
    if(age>=18 && breakSession=='false')
        return true;
    else 
        return false;
}

let age=+prompt("Enter age");
let breakSession=prompt("Is the person in break");
switch(breakSession){
    case 'true':{
        breakSession='true';
        break;
    }
    case 'false':{
        breakSession='false';
        break;
    }
    default:
        alert("invalid input");
}


let result=shouldServeDrinks(age,breakSession);
alert(result);