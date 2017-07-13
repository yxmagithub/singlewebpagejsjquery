/**
 * Created by ultragateG460
 * main module
 */


(function() {
    var input = document.getElementById("description");

    input.addEventListener("keydown", InputHandler.keydownhandler);
    input.addEventListener("keyup", InputHandler.keyuphandler);
    input.addEventListener("keypress",InputHandler.keyonchanghandler);

    var button = document.getElementById("lockPayment");
    button.addEventListener("click", function () {
        var taxOwe=document.getElementById("lockAmountTotal").textContent;
       //alert("You have owe\n"+taxOwe);
        PopupHandler.popup("You have owe\n"+taxOwe);
    });

    $("#lockType").bind("change",DropDownHandler.getSelectValue);

    $('#A12345').bind("change", TableHandler.changeeventhandler);
    $('#A12345').bind("keypress", TableHandler.keyonchanghandler);

    $('#B67890').bind("change", TableHandler.changeeventhandler);
    $('#B67890').bind("keypress", TableHandler.keyonchanghandler);

    $('#C00001').bind("change", TableHandler.changeeventhandler);
    $('#C00001').bind("keypress", TableHandler.keyonchanghandler);

    //security feature, prevent the clickjacking
    try {
        if (top.location.hostname != self.location.hostname) throw 1;
    } catch (e) {
        top.location.href = self.location.href;
    }
}());

