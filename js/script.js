function upDate(previewPic){
    console.log("upDate đã được gọi");   
    console.log(previewPic.alt);
    console.log(previewPic.src);     

    document.getElementById("image").innerHTML = previewPic.alt;
    document.getElementById("image").style.backgroundImage =
        "url('" + previewPic.src + "')";
}

function unDo(){
    document.getElementById("image").style.backgroundImage = "url('')";
    document.getElementById("image").innerHTML =
        "Hover over an image below to display here.";
}

function addTabIndex() {
    console.log("addTabIndex đã được gọi");

    var images = document.querySelectorAll(".preview");

    for (var i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0");
    }
}

window.onload = addTabIndex;