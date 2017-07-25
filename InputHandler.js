/**
 * Created by ultragateG460
 */

var InputHandler = Object.create(InputValidator);

InputHandler.isvalidnumkeycode = function(evt){
    var key=evt.keyCode;//evt.keyCode;
    key = String.fromCharCode( key );
    var regex = /[0-9]/;
    if( !regex.test(key) ) {
        return true;//valid, because not Number
    }
    else
        return false;//invalid input due to 0-9
};
/*
*function: keyuphandler(evt)
* keyup event handler,
* */
InputHandler.keyuphandler = function (evt) {
    InputValidator.validatekeystroke=InputHandler.isvalidnumkeycode(evt);
    InputHandler.keyvalidprocessor(evt);
};
/*
*function: keydownhandler(evt)
* keydown event handler,
* */
InputHandler.keydownhandler = function (evt) {
    InputValidator.validatekeystroke=InputHandler.isvalidnumkeycode(evt);
    InputHandler.keyvalidprocessor(evt);
};
/*
*function: keyonchangehandler(evt)
* keyonchange event handler,
* */
InputHandler.keyonchangehandler = function (evt) {
    InputValidator.validatekeystroke=InputHandler.isvalidnumkeycode(evt);
    InputHandler.keyvalidprocessor(evt);
};

/*
*function: unittest(arg)
* unittest stub func,
* */
InputHandler.unittest = function (arg) {
    var retV=InputHandler.keyonchanghandler(evt);
};
