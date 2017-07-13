/**
 * Created by ultragateG460 on 7/11/2017.
 */


(function() {
    var input = document.getElementById("description");

    input.addEventListener("keydown", InputHandler.keydownhandler);
    input.addEventListener("keyup", InputHandler.keyuphandler);
    input.addEventListener("keypress",InputHandler.keyonchanghandler);
//onchange

    var button = document.getElementById("lockPayment");
    button.addEventListener("click", function () {
        var taxOwe=document.getElementById("lockAmountTotal").textContent;
       //alert("You have owe\n"+taxOwe);
        PopupHandler.popup("You have owe\n"+taxOwe);
    });

    $("#lockType").bind("change",DropDownHandler.getSelectValue);
    $("#lockType").bind("focus",DropDownHandler.getFocus);

    $('#A12345').bind("change", TableHandler.changeeventhandler);
/*    $('#A12345').bind("keydown", TableHandler.keydownhandler);
    $('#A12345').bind("keyup", TableHandler.keyuphandler);*/
    $('#A12345').bind("keypress", TableHandler.keyonchanghandler);

    $('#B67890').bind("change", TableHandler.changeeventhandler);
    /*    $('#A12345').bind("keydown", TableHandler.keydownhandler);
     $('#A12345').bind("keyup", TableHandler.keyuphandler);*/
    $('#B67890').bind("keypress", TableHandler.keyonchanghandler);

    $('#C00001').bind("change", TableHandler.changeeventhandler);
    /*    $('#A12345').bind("keydown", TableHandler.keydownhandler);
     $('#A12345').bind("keyup", TableHandler.keyuphandler);*/
    $('#C00001').bind("keypress", TableHandler.keyonchanghandler);

}());

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

