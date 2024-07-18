const togglebuton = document.getElementById("togglebutton");
const body = document.querySelector("body");

document.addEventListener("load", dayornight);

togglebuton.addEventListener("change", dayornight);
function dayornight(){
    if(togglebuton.checked){
        body.classList.remove("night");
        body.classList.add("day");
        document.getElementById("para1").style.color="black";
        document.querySelector(".Certificates").style.color="black";
        document.querySelector("#service-1").style.color="black";
        document.querySelector("#service-2").style.color="black";
        document.querySelector("#service-3").style.color="black";

        
    }
    else{
        
        body.classList.remove("day");
        body.classList.add("night");
        document.getElementById("para1").style.color="white";
        document.querySelector(".Certificates").style.color="white";
        document.querySelector("#service-1").style.color="white";
        document.querySelector("#service-2").style.color="white";
        document.querySelector("#service-3").style.color="white";
        
    }
}


