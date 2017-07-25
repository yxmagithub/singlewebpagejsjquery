/**
 * Created by ultragateG460
 */


var InputValidator ={
    validatekeystroke:false,
    keyvalidprocessor:function (evt) {
        if( InputValidator.validatekeystroke === true){
            console.log("valid input");}
        else {
            console.log("invalid input");
            //if(evt.preventDefault)
            evt.preventDefault();//cancel the event
        }
    }
}
