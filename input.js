function myfunc(){
    var erro =document.getElementById("error") 
    var inputee = document.getElementById("text")
    var resu = document.getElementById("resu")
    
    if (inputee.value != "") {
    resu.innerHTML = inputee.value;
    inputee.value = "";
 } else {
    resu.innerHTML = "No INPUT!!";
}
}
function clear(){
    if(resu.innerHTML=="No INPUT!!"){
        resu.innerHTML=""
    }
}
var x =setInterval(clear,2000)
