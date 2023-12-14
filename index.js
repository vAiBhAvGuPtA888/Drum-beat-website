var len = document.querySelectorAll(".drum").length
for(var i =0;i<len;i++)
document.querySelectorAll("button")[i].addEventListener("click",function()
{
    var abc = this.innerHTML;
    clicked(abc);
    emoji(abc);
})
document.addEventListener("keypress",function(eve){
    clicked(eve.key);
    emoji(eve.key);
})
function clicked(abc)
{  
     switch(abc)
     {
        case "w":
            var aud = new Audio("sounds/tom-1.mp3");
        aud.play();
        break;
        case "a":
            var aud = new Audio("sounds/tom-2.mp3");
            aud.play();
            break;
        case "s":
            var aud = new Audio("sounds/tom-3.mp3");
            aud.play();
            break;
        case "d":
            var aud = new Audio("sounds/tom-4.mp3");
            aud.play();
            break;
        case "j":
            var aud = new Audio("sounds/snare.mp3");
            aud.play();
            break;
        case "k":
            var aud = new Audio("sounds/kick-bass.mp3");
            aud.play();
            break;
        case "l":
            var aud = new Audio("sounds/crash.mp3");
            aud.play();
            break;
        default: console.log(abc);
         

     }
}
function emoji(key)
{
    var butt = document.querySelector("."+key);
    butt.classList.add("pressed");
    setTimeout(function(){
        butt.classList.remove("pressed");
    },200)
}

