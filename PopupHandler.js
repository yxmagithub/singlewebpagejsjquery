/**
 * Created by ultragateG460 .
 */

var PopupHandler={
    //Popup dialog
            popflag:false,
    /*
     *function: popup(message)
     * popup cumstom diaglog with message,
     * */
            popup:function(message) {

            // get the screen height and width
            var maskHeight = $(document).height();
            var maskWidth = $(window).width();

            // calculate the values for center alignment
            var dialogTop =  (maskHeight/3) - ($('#dialog-box').height());
            var dialogLeft = (maskWidth/2) - ($('#dialog-box').width()/2);

            // assign values to the overlay and dialog box
            $('#dialog-overlay').css({height:maskHeight, width:maskWidth}).show();
            $('#dialog-box').css({top:dialogTop, left:dialogLeft}).show();

            // display the message
            $('#dialog-message').html(message);
    },
            //unit test
            unittest:function(msg){
                PopupHandler.popup(msg);
            }

}
/*
 *process the close and overlay action on popup windows
 * */
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