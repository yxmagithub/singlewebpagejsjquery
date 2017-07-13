/**
 * Created by ultragateG460
 */

var TableHandler={
        tableattr:true,
    /*
     *function: validatedollarkeystroke(evt)
     * validate the each key stroke,
     * */
        validatedollarkeystroke:function(evt){
            var key=evt.keyCode;
            key = String.fromCharCode( key );
            var regex = /\$|[0-9]|\./;
            //var regx = /^\$?[0-9]+(\.[0-9][0-9])?$/;
            if( regex.test(key) ) {
                return true;//allowed symble
            }
            else
                return false;
        },
    /*
     *function: validatedollarfmt(evt,key)
     * validate the dollar fmt,
     * key is the input string to be validated
     * */
        validatedollarfmt:function(evt, key){
            if(typeof key !== "string")
            {
                alert("wrong input type of key");
                return -2;
            }
            var regex = /^\$?[0-9]+(\.[0-9][0-9])?$/;
            if( regex.test(key) ) {
                return 1;//right format
            }
            else
                return -1;
        },
    /*
     *function: keyuphandler(evt)
     * keyup event handler,
     * */
        keyuphandler:function (evt) {
            var retV=true;
            retV=TableHandler.validatedollarkeystroke(evt);
            if(retV===true)
                console.log("valid input");
            else {
                console.log("invalid input");
                if(evt.preventDefault) evt.preventDefault();//cancel the event
            }
        },
    /*
     *function: keydownhandler(evt)
     * keydown event handler,
     * */
        keydownhandler:function (evt) {
            var retV=true;
            retV=TableHandler.validatedollarkeystroke(evt);
            if(retV===true)
                console.log("valid input");
            else {
                console.log("invalid input");
                if(evt.preventDefault) evt.preventDefault();//cancel the event
            }
        },
    /*
     *function: keyonhandler(evt)
     * keypress event handler,
     * */
        keyonchanghandler:function (evt) {
            var retV=true;
            retV=TableHandler.validatedollarkeystroke(evt);

            if(retV===true)
                console.log("valid input");
            else {
                console.log("invalid input");
                if(evt.preventDefault) evt.preventDefault();//cancel the event
            }

        },
    /*
     *function: changeeventhandler(evt)
     * Table Item Onchange Eventhandler,
     * process all the Table Item UI logic
     * */
        changeeventhandler:function(evt){
            var retV=0;
            var retCode=0;
            var sumnum=0;
            var obj1,objcurr,objT;
            var id = $(this).attr('id');
            console.log(id+'\n');
            if(id==="A12345") {
                obj1 = $("#A12345");
                objcurr = $("#A12345C");
                objT = $("#A12345T");
            }
            else if(id==="B67890"){
                obj1 = $("#B67890");
                objcurr = $("#B67890C");
                objT = $("#B67890T");
            }
            else if(id==="C00001"){
                obj1 = $("#C00001");
                objcurr = $("#C00001C");
                objT = $("#C00001T");
            }else
            {
                alert("Err\n non-existed id");
                return -2;
            }

            var key = obj1.val();
            if(key === "") {
                obj1.val("$0.00");
                console.log("clear input");
                sumnum=TableHandler.getlockAmountTotalSum();
                $("#lockAmountTotal").text("\$"+sumnum);
                return 2;
            }
            retV=TableHandler.validatedollarfmt(evt, key);
            if(retV===1) {
                console.log("valid input");
                var inputnum=Number( key.replace(/[^0-9\.]+/g,""));
                var totaldue=objT.text();
                var totalduenum=Number(totaldue.replace(/[^0-9\.]+/g,""));
                if(inputnum > totalduenum){
                    //alert("bigger number");
                    PopupHandler.popup("Warning\nEnter Amount is more than owed\nRe-Enter !");
                    obj1.val(totaldue);
                }
                retCode= 1;
            }
            else if(retV===-1) {
                console.log("invalid input");
                var atext=objcurr.text();
                obj1.val(atext);
                //alert("Warning!\nInput format\ntwo decial format\n$xxx.xx");
                PopupHandler.popup("Warning!\nInput format\ntwo decial format\n$xxx.xx");
                retCode = -1;
            }
            else
            {
                PopupHandler.popup("Error! application error");
                retCode=-2;
            }
            sumnum=TableHandler.getlockAmountTotalSum();
            $("#lockAmountTotal").text("\$"+sumnum);
            return retCode;
        },
        getlockAmountTotalSum:function () {
            var sumnum1=0;
            sumnum1+=Number(($("#A12345").val()).replace(/[^0-9\.]+/g,""));
            sumnum1+=Number(($("#B67890").val()).replace(/[^0-9\.]+/g,""));
            sumnum1+=Number(($("#C00001").val()).replace(/[^0-9\.]+/g,""));
            sumnum1=parseFloat(Math.round(sumnum1 * 100) / 100).toFixed(2);
            return sumnum1;
        },

        //unit test stub function
        unittest:function (arg) {
            var retV=TableHandler.changeeventhandler(evt);
        }
    }