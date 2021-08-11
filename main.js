donate=document.querySelector("#donateButton");
mod=document.querySelector("#mess");
donateUs=document.querySelector("#don");

function myFunction(){
    var x=document.getElementById("mylogo");
    if(x.className=="logo"){
        x.className+="responsive";
    }
    else{
        x.className="logo";
    }
}
function modOpen(){
    mod.style.display="block";
}
function modClose(){
    mod.style.display="none";
}
function donOpen(){
    window.open('https://rzp.io/i/Sv2zXRKyF', '_blank');
}
document.getElementById("donateButton").addEventListener("click",modOpen);
document.getElementById("cross").addEventListener("click",modClose);
document.getElementById("don").addEventListener("click",donOpen);

