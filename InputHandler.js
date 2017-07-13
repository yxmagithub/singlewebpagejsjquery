/**
 * Created by ultragateG460 on 7/11/2017.
 */

var InputHandler ={
    validationkeystrok:true,
    keyuphandler:function (evt) {
        var retV=true;
        retV=InputHandler.isvalidnumkeycode(evt);
        if(retV===true)
            console.log("valid input");
        else {
            console.log("invalid input");
            InputHandler.validationkeystrok = false;
            if(evt.preventDefault) evt.preventDefault();//cancel the event
        }
    },
    keydownhandler:function (evt) {
        var retV=true;
        retV=InputHandler.isvalidnumkeycode(evt);
        if(retV===true)
            console.log("valid input");
        else {
            console.log("invalid input");
            InputHandler.validationkeystrok = false;
            if(evt.preventDefault) evt.preventDefault();//cancel the event
        }
    },
    keyonchanghandler:function (evt) {
        var retV=true;
        retV=InputHandler.isvalidnumkeycode(evt);

        if(retV===true) {
            console.log("Not Number 0-9");
            return 0;
        }
        else {
            console.log("it is Number 0-9");
            InputHandler.validationkeystrok = false;
            if(evt.preventDefault) evt.preventDefault();//cancel the event
            return -1;
        }
    },
    isvalidnumkeycode:function(evt){
        var key=evt.keyCode;//evt.keyCode;
        key = String.fromCharCode( key );
        var regex = /[0-9]/;
        if( !regex.test(key) ) {
            return true;//valid, because not Number
        }
        else
            return false;//invalid input due to 0-9
    },

    unittest:function (arg) {
        var retV=InputHandler.keyonchanghandler(evt);
    }
}