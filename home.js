const sec1 = document.querySelector('.landing');
const sec2 = document.querySelector('.aboutme');
const sec3 = document.querySelector('.projects');
const sec4 = document.querySelector('.experience');
const listSec = [sec1, sec2, sec3, sec4];

const logo = document.getElementsByClassName("logo")[0];
logo.addEventListener("click", function () {
    window.scrollTo({
        top: sec1.offsetTop,
        behavior: "smooth"
    });
    currElement = sec1;
    currRightNav.classList.remove("active-nav-button");
    currRightNav = document.getElementsByClassName("right-nav-button")[0];
    currRightNav.classList.add("active-nav-button");
});

var currRightNav = document.getElementsByClassName("right-nav-button")[0];
for (var x = 0; x < 4; x++) {
    document.getElementsByClassName("right-nav-button")[x].addEventListener("click", (function (x) {
        return function () {
            window.scrollTo({
                top: listSec[x].offsetTop,
                behavior: "smooth"
            });
            currRightNav.classList.remove("active-nav-button");
            currRightNav = document.getElementsByClassName("right-nav-button")[x];
            currRightNav.classList.add("active-nav-button");
        }
    })(x));
}

let currElement;

function caliberateSectionOnScroll() {
    let maxVisibleHeight = 0;
    let maxVisibleIndex;
    for (var i = 0; i < listSec.length; i++) {
        const rect = listSec[i].getBoundingClientRect();
        var visibleHeight = Math.min(rect.bottom, (window.innerHeight || document.documentElement.clientHeight)) - Math.max(rect.top, 0);
        if (visibleHeight > maxVisibleHeight) {
            maxVisibleHeight = visibleHeight;
            maxVisibleIndex = i;
        }
    }
    if (maxVisibleIndex !== undefined) {
        currRightNav.classList.remove("active-nav-button");
        currRightNav = document.getElementsByClassName("right-nav-button")[maxVisibleIndex];
        currRightNav.classList.add("active-nav-button");
        currElement = listSec[maxVisibleIndex];
    }
}

caliberateSectionOnScroll();

window.addEventListener("wheel", function (event) {
    if (event.wheelDelta > 0 || event.detail < 0) {
        if (currElement == sec2) {
            window.scrollTo({
                top: sec1.offsetTop,
                behavior: "smooth"
            });
            currElement = sec1;
            currRightNav.classList.remove("active-nav-button");
            currRightNav = document.getElementsByClassName("right-nav-button")[0];
            currRightNav.classList.add("active-nav-button");
        }
        else { caliberateSectionOnScroll(); }
    } else {
        if (currElement == sec1) {
            window.scrollTo({
                top: sec2.offsetTop,
                behavior: "smooth"
            });
            currElement = sec2;
            currRightNav.classList.remove("active-nav-button");
            currRightNav = document.getElementsByClassName("right-nav-button")[1];
            currRightNav.classList.add("active-nav-button");
        }
        else {
            caliberateSectionOnScroll();
        }
    }
});

window.addEventListener("scroll", function() {
        caliberateSectionOnScroll();
});


var leftnav = document.getElementsByClassName("fadeIn")[0];
var rightnav = document.getElementsByClassName("fadeIn")[1];

var fadeIn = setInterval(function () {
    if (leftnav.style.opacity < 1 && rightnav.style.opacity < 1) {
        leftnav.style.opacity = Number(leftnav.style.opacity) + 0.1;
        rightnav.style.opacity = Number(rightnav.style.opacity) + 0.1;
    } else {
        clearInterval(fadeIn);
    }
}, 200);

function pageLoad() {
    var mypic = document.getElementsByClassName("mypic")[0];
    mypic.classList.add("fade-in");
}


var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}

function copyToClipBoard(elementClass) {
    console.log(elementClass)
    var copyText = document.getElementsByClassName(elementClass)[0];
    console.log(copyText)
    copyText.select();
    copyText.setSelectionRange(0, 99999); 
    navigator.clipboard.writeText(copyText.value);
  }


