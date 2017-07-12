/**
 * Created by ultragateG460 on 7/11/2017.
 */

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
