//TO CHECK IF THE GIVEN NUMBERS HAVE SAME FIRST DIGIT

        let num1 = +prompt("enter num1");
        let num2 = +prompt("enter num2");
        let count1=0;let count2=0,fd1,fd2;
        dnum1=num1;
        dnum2=num2;

        while(!(count1==num1.toString().length && count2==num2.toString().length))
        {
            fd1=dnum1%10;
            dnum1=parseInt(dnum1/10);
            count1++;
            fd2=dnum2%10;
            dnum2=parseInt(dnum2/10);
            count2++;
        }
        if(fd1==fd2)
            alert("true");
        else
            alert("false");