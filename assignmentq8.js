let seconds=(hours,minutes)=>{
    return hours*3600+minutes*60;
}


let hours=+prompt("enter number of hours");
let minutes=+prompt("enter number of minutes");
totalseconds=seconds(hours,minutes);
alert(totalseconds);