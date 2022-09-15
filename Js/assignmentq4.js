//string type properties of object

let obj = {
    name: "jyo",
    age: 28,
    landmark: "Park",
    empid: 456
}

let property = () => {
    let arr = [], i = 0;
    arr = Object.values(obj);
    console.log(arr);
    console.log(...arr);
    console.log(typeof ([...arr]));
    // if ((typeof (...arr[i])) === "string"){}
    alert (typeof (...arr[i]);
    i++;

}
property();




// let obj1={
//     name:"jyo",
//     age:28,
//     landmark:"Park",
//     empid:456,
// }
// for(let prop in obj1){
// if(typeof obj1[prop] === "string")
// alert(obj1[prop]);
// }