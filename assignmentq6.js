//IF ARRAY INCLUDES THE ELEMENT
let arr=[];
let n=+prompt("enter number of elements of array");
let felem=+prompt("enter element to be found");
for(let i=0;i<n;i++){
    elem=+prompt("enter element of array");
    arr+=elem;
}
alert(arr);
for(let i=0;i<n;i++){
    if(arr[i]==felem)
    alert("element exists at "+i);
continue;
}


// if(arr.includes(felem))alert("exists");

