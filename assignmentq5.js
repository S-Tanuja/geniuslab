let n = +prompt("enter number of times");
let pat = "";
for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
        pat += "*";
    }
    pat += "\n";
}
alert(pat);