/**
 * Created by ultragateG460 on 7/11/2017.
 */

var DropDownHandler={
    xzItemValue:"Current",
    yqItemValue:"Total",
    getSelectValue:function(evt){
        var conf = confirm("WARNING! You Change Lock Amount Type\nClick 'OK' or 'CANCEL'");
        var selectbox1 = document.getElementById("lockType");
        DropDownHandler.xzItemValue = selectbox1.options[selectbox1.selectedIndex].value;
        if(!conf){
            console.log('cancel');
            if(DropDownHandler.xzItemValue==="Current")
                DropDownHandler.yqItemValue="Total";
            else if(DropDownHandler.xzItemValue==="Total")
                DropDownHandler.yqItemValue="Current";
            $("#lockType").val(DropDownHandler.yqItemValue)
            var amoutDue = document.getElementById("lockAmountTotal");
            if (DropDownHandler.yqItemValue === "Current") {
                amoutDue.textContent = document.getElementById("currentDue").textContent;
            }
            else if (DropDownHandler.yqItemValue === "Total") {
                amoutDue.textContent = document.getElementById("totalDue").textContent;
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
