/**
 * Created by ultragateG460
 */

var InputHandler ={
    validationkeystrok:true,
    /*
     *function: keyuphandler(evt)
     * keyup event handler,
     * */
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
    /*
     *function: keydownhandler(evt)
     * keydown event handler,
     * */
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
    /*
     *function: keyonchangehandler(evt)
     * keyonchange event handler,
     * */
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
    /*
     *function: isvalidnumkeycode(evt)
     * validate the each key stroke,
     * */
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

    /*
     *function: unittest(arg)
     * unittest stub func,
     * */
    unittest:function (arg) {
        var retV=InputHandler.keyonchanghandler(evt);
    }
}