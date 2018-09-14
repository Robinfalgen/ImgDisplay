window.addEventListener("load", function(){
    console.log("sidan laddad");
    document.getElementById("smalls").addEventListener("click", smallClickhandler);
    document.getElementById("stor").addEventListener("click", storClickhandler);
   
    
});
var smallsimg = document.getElementsByClassName("thumbs");
var stor = document.getElementById("stor");
var index = 0;
var left = 37;
var right = 39;
function keyHandler(e){
    if (e.keyCode==right)
        takestep(1);
    if (e.keyCode==left)
        takestep(-1);
}
/*smallsimg[0].className = "active";*/

    /*function smallClickhandler(event){
    console.log(event.target.src);

    document.getElementById("stor").style.background = "url("+event.target.src+")";
    }*/
function prevImg(e){
    
    takestep(-1);
}
function nextImg(e){
    
    takestep(1);
}
function takestep(changestep){
    
    index = index+changestep;
    console.log(index);
    if (index<0){
        index = smallsimg.length - 1;
        console.log(index);
    }
    if (index>smallsimg.length-1){
        index = 0;
        console.log(index);
    }
    document.querySelector("#cover #display").src = smallsimg[index].src;
}

function coverClickhandler(e){
    console.log(e);
    e.target.classList.remove('visable');
}

function storClickhandler(e){
    console.log(e);
    e.target.classList.toggle("visable");
    document.getElementById("cover").classList.toggle("visable");
    document.querySelector("#cover #display").src = e.target.src;
    document.getElementById("cover").addEventListener("click", coverClickhandler);
    document.getElementById("bak").addEventListener("click", prevImg);
    document.getElementById("fram").addEventListener("click", nextImg);
    document.addEventListener("keydown", keyHandler);


}   

function smallClickhandler(event){
    console.log(event.target.src);
    document.getElementById("stor").src = event.target.src;
    for (var i = 0; i < smallsimg.length; i++) {
        smallsimg[i].classList.remove('active');
    }
    event.target.classList.add('active');

} 



