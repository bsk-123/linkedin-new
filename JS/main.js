var elem = document.getElementsByClassName("see-more");
for(var i = 0; i < elem.length; i++){
    elem[i].onclick = function(){
        if(this.innerHTML === "see less"){
            this.previousSibling.style.display = "none";
            this.innerHTML = "... see more";
        }
        else{
            this.previousSibling.style.display = "inline";
            this.innerHTML = "see less";
        }
    }
}
document.querySelector(".ham").addEventListener("click",function(){
    var val = document.querySelector(".ham-menu").style.transform
    if(val=="translateX(0px)"){
    document.querySelector(".ham-menu").style.transform = "translateX(-500px)" ;
    document.querySelector("body").style.position="unset";
    }
    else{
    document.querySelector(".ham-menu").style.transform = "translatex(0px)"
    document.querySelector("body").style.position="fixed";
}
})
document.querySelector(".card").addEventListener("click",function(){
    var val = document.querySelector(".ham-menu").style.transform
    if(val=="translateX(0px)"){
    document.querySelector(".ham-menu").style.transform = "translateX(-500px)" ;
    document.querySelector("body").style.position="unset";
}
})