/**
 * Created by ultragateG460 on 7/12/2017.
 */

var PopupHandler={
    //Popup dialog
            popflag:false,
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