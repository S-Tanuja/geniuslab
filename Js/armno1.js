 //Armstrong number without using exponential


        let prod=(rem)=>{
            rem1=1;
            for(i=0;i<length;i++){
                rem1*=rem;
            }
            return rem1;
        }
        
        let num = +prompt("enter a number");
        length=num.toString().length;
        let temp = num;
        let sum = 0;
        while (temp > 0) {
            rem = temp % 10;
            sum += prod(rem);
            temp = parseInt(temp / 10);
        }

        if (num == sum)
            alert("Armstrong number");
        else
            alert("mot a armstrong number");
