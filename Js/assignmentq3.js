let penaltypoint=(speed)=>{
    if(speed<70)
        alert("Good safe driving");
    else if(speed>70)
        alert("Speed limit crossed by penalty point"+(Math.floor((speed-70)/5)));
    else if(speed>120)
        alert("License suspended");
}
let speed=+prompt("Enter speed");
penaltypoint(speed);