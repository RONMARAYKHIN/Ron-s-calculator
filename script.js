function dis(val) {
    document.getElementById("result").value += val
}
function opreate() {
    let p = document.getElementById("result").value;
    let q = eval(p);
    document.getElementById("result").value = q;
}
function clr() {
    document.getElementById("result").value = ""
}
