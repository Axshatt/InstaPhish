

let emailPlaceholder = document.getElementById("emailPlaceholder");

let showOrHide = document.getElementById("showOrHide");

let login = document.getElementById("login");

let fadingImages = document.querySelectorAll(".fadingImages");

let frame1 = document.getElementById("frame1");





function displayImages(from, to) {

    let current = to;

    setInterval(function () {

        fadingImages[current].style.opacity = '0';
        // console.log(fadingImages[current])


        if (current == from) {
            current = to + 1;
        }
        current--;
        fadingImages[current].style.opacity = '1';

    }, 4000);

}
displayImages(0, 3);




function showOrHide1() {

    if (showOrHide.innerHTML == "Show") {
        showOrHide.innerHTML = "Hide";

        password.type = "text";

    } else {
        showOrHide.innerHTML = "Show";
        password.type = "password";
    }

}
