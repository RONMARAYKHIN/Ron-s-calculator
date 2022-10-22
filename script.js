function dis(val) {
    document.getElementById("result").value += val
}
function opreate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}
function clr() {
    document.getElementById("result").value = ""
}