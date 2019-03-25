//Check to see if script is linked properly.
console.log("This script is linked properly!")


//Write your JS code here...

function pValues() {
    var num1, num2, res;
    num1=Number(document.formcalc.textnum1.value);
    num2=Number(document.formcalc.textnum2.value);
    res=num1+num2;
    document.formcalc.textres.value=res;
}
function mValues() {
    var num1, num2, res;
    num1=Number(document.formcalc.textnum1.value);
    num2=Number(document.formcalc.textnum2.value);
    res=num1-num2;
    document.formcalc.textres.value=res;
}
function dValues() {
    var num1, num2, res;
    num1=Number(document.formcalc.textnum1.value);
    num2=Number(document.formcalc.textnum2.value);
    res=num1/num2;
    document.formcalc.textres.value=res;
}
function xValues() {
    var num1, num2, res;
    num1=Number(document.formcalc.textnum1.value);
    num2=Number(document.formcalc.textnum2.value);
    res=num1*num2;
    document.formcalc.textres.value=res;
}