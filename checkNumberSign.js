//function to find the sign of a given number

function checkNumberSign(num) {
    if (1 / num === -Infinity) {
        console.log("It is -0");
    } else if (1 / num === Infinity) {
        console.log("It is +0");
    }else if(num>0){
                console.log("It is +");
    }else{
           console.log("It is -");
    }
}

checkNumberSign(-0); 
checkNumberSign(+0); 
checkNumberSign(+1); 
checkNumberSign(-1); 
