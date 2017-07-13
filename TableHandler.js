/**
 * Created by ultragateG460 on 7/12/2017.
 */

var TableHandler={
    tableattr:true,
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
    validatedollarfmt:function(evt){
        var key = $("#A12345").val();
        var regex = /^\$?[0-9]+(\.[0-9][0-9])?$/;
        if( regex.test(key) ) {
            return true;//right format
        }
        else
            return false;
    },
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
    changeeventhandler:function(evt){
        var retV=true;
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
        }

        var key = obj1.val();
        if(key === "") {
            obj1.val("$0.00");
            console.log("clear input");
            return 2;
        }
        retV=TableHandler.validatedollarfmt(evt);
        if(retV===true) {
            console.log("valid input");
            var inputnum=Number( key.replace(/[^0-9\.]+/g,""));
            var totaldue=objT.text();
            var totalduenum=Number(totaldue.replace(/[^0-9\.]+/g,""));
            if(inputnum > totalduenum){
                //alert("bigger number");
                PopupHandler.popup("Warning\nEnter Amount is more than owed\nRe-Enter !");
                obj1.val(totaldue);
            }
            var sumnum=0;
            sumnum+=Number(($("#A12345").val()).replace(/[^0-9\.]+/g,""));
            sumnum+=Number(($("#B67890").val()).replace(/[^0-9\.]+/g,""));
            sumnum+=Number(($("#C00001").val()).replace(/[^0-9\.]+/g,""));
            sumnum=parseFloat(Math.round(sumnum * 100) / 100).toFixed(2);
            $("#lockAmountTotal").text("\$"+sumnum);
            return 1;
        }
        else {
            console.log("invalid input");
            var atext=objcurr.text();
            obj1.val(atext);
            //alert("Warning!\nInput format\ntwo decial format\n$xxx.xx");
            PopupHandler.popup("Warning!\nInput format\ntwo decial format\n$xxx.xx");
            return -1;
        }
    },
    unittest:function (arg) {
        var retV=TableHandler.changeeventhandler(evt);
    }
}