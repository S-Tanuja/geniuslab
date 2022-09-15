       // to check if the given numbers have same last digit

        let num1=+prompt("Enter num1");
        let num2=+prompt("enter num2");
        ld1=num1%10;
        ld2=num2%10;
        if(ld1==ld2)
            alert("TRUE");
        else
            alert("FALSE");
