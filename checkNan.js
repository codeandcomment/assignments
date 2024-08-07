//check weather the passed parameter is NaN
function checkNaN(arg){
    if(arg!='NaN'){
        if(arg.toString()=='NaN'){
            return true;
        }
    }
    return false;
}
checkNaN('NaN')
checkNaN(NaN)
checkNaN(1)
