/**
 * Created by ultragateG460 on 7/11/2017.
 */


(function() {
    var input = document.getElementById("description");

/*    input.addEventListener("keydown", InputHandler.keydownhandler);
    input.addEventListener("keyup", InputHandler.keyuphandler);*/
    input.addEventListener("keypress",InputHandler.keyonchanghandler);
//onchange

    var button = document.getElementById("lockPayment");
    button.addEventListener("click", function () {
        var taxOwe=document.getElementById("lockAmountTotal").textContent;
       alert("You have owe\n"+taxOwe);
        //PopupHandler.popup("You have owe\n"+taxOwe);
    });

    $('#A12345').bind("change", TableHandler.changeeventhandler);
/*    $('#A12345').bind("keydown", TableHandler.keydownhandler);
    $('#A12345').bind("keyup", TableHandler.keyuphandler);*/
    $('#A12345').bind("keypress", TableHandler.keyonchanghandler);

    $('#B67890').bind("change", TableHandler.changeeventhandle$r);
    /*    $('#A12345').bind("keydown", TableHandler.keydownhandler);
     $('#A12345').bind("keyup", TableHandler.keyuphandler);*/
    $('#B67890').bind("keypress", TableHandler.keyonchanghandler);

    $('#C00001').bind("change", TableHandler.changeeventhandler);
    /*    $('#A12345').bind("keydown", TableHandler.keydownhandler);
     $('#A12345').bind("keyup", TableHandler.keyuphandler);*/
    $('#C00001').bind("keypress", TableHandler.keyonchanghandler);

}());

var DropDownHandler={
    currentItemValue:"",
    getSelectValue:function(){
        var conf = confirm("WARNING! You Change Lock Amount Type\nClick 'OK' or 'CANCEL'");
        if(!conf){
            console.log('cancel');
            return;
        }
        var selectbox1 = document.getElementById("lockType");
        DropDownHandler.currentItemValue = selectbox1.options[selectbox1.selectedIndex].value;
        console.log("onchange evt fire");
        var amoutDue = document.getElementById("lockAmountTotal");
        if(DropDownHandler.currentItemValue === "Current"){
            amoutDue.textContent = document.getElementById("currentDue").textContent;}
        else if(DropDownHandler.currentItemValue === "Total"){
            amoutDue.textContent = document.getElementById("totalDue").textContent;}
    }
}

$(document).ready(function () {

    // if user clicked on button, the overlay layer or the dialogbox, close the dialog
    $('a.btn-ok, #dialog-overlay, #dialog-box').click(function () {
        $('#dialog-overlay, #dialog-box').hide();
        return false;
    });

    // if user resize the window, call the same function again
    // to make sure the overlay fills the screen and dialogbox aligned to center
    $(window).resize(function () {

        //only do it if the dialog box is not hidden
        if (!$('#dialog-box').is(':hidden'))
            PopupHandler.popup();
    });
});

