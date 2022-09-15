 //ARMSTRONG NUMBER USING EXPONENTIAL

        
         const num = +prompt("enter a number");
        let temp = num;
        let sum = 0;
        length=num.toString().length;
        while (temp > 0) {
            rem = temp % 10;
            sum+=rem**length;
            temp = parseInt(temp/ 10);
           
        }
        if (num == sum)
            console.log("Armstrong number");
        else
            console.log("mot a armstrong number");
        