/**
 * Created by ultragateG460
 * Handle all the DropDown Item UI logic,
 * Validate the input text as well
 */

var DropDownHandler={
    xzItemValue:"Current",
    yqItemValue:"Total",
    /*
    *function: getSelectValue(evt)
    * DropDown Item Onchange Eventhandler,
    * */
    getSelectValue:function(evt){
        var conf = confirm("WARNING! You Change Lock Amount Type\nClick 'OK' or 'CANCEL'");
        var selectbox1 = document.getElementById("lockType");
        DropDownHandler.xzItemValue = selectbox1.options[selectbox1.selectedIndex].value;
        if(!conf){
            console.log('cancel');
            var amoutDue = document.getElementById("lockAmountTotal");
            if (selectbox1.selectedIndex === 0){
                selectbox1.selectedIndex = 1;
            }
            else { //===1
                selectbox1.selectedIndex = 0;
            }
            if(evt.preventDefault) evt.preventDefault();//cancel the event
            return 1;
        }else {
            var amoutDue = document.getElementById("lockAmountTotal");
            if (DropDownHandler.xzItemValue === "Current") {
                amoutDue.textContent = document.getElementById("currentDue").textContent;
            }
            else if (DropDownHandler.xzItemValue === "Total") {
                amoutDue.textContent = document.getElementById("totalDue").textContent;
            }
            return 0;
        }
    },
    //unit test
    unittest:function(arg){
        var retV = DropDownHandler.getSelectValue(evt);
    }
}
