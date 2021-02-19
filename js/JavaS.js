function toggle(){
    var popupVideo = document.querySelector(".popup-video");
    var iframe = document.querySelector("iframe");
    popupVideo.classList.toggle("active");
    iframe.onpause();
    iframe.currentTime = 0;
}

// document.getElementsById("open-popup-btn").addEventListener("click",function(){
//     document.getElementsByClassName("popup")[0].classList.add("active1");
// });

// document.getElementsById("dismiss-popup-btn").addEventListener("click",function(){
//     document.getElementsByClassName("popup")[0].classList.remove("active1");
// });

function pop(){
    var open = document.querySelector(".open-popup-btn");
    var popup = document.querySelector(".popup");
    popup.classList.add("active1");
}
function popClose(){
    var close = document.querySelector("#dismiss-popup-btn");
    var popup = document.querySelector(".popup");
    popup.classList.remove("active1");
}