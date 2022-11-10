document.querySelector("#nav-container").addEventListener("scroll", (event) => {
    document.querySelector("#nav-container").style.position = "fixed";
})

function nav(){
    document.querySelector("#nav-container").style.position = "fixed";
}

var videoplayer = document.querySelector("#player");
var myvideo = document.querySelector("#myvideo");
function stopVideo() {
    videoplayer.style.display = "none";
}
function playVideo() {
    videoplayer.style.display = "block";
}  