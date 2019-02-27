// Click navigation
var links = document.getElementsByTagName('a');

for (var i = 0, il = links.length; i < il; i++) {
    links[i].onclick = clickButton;
}

function clickButton(event) {
    event.preventDefault();
    var gotoLink = this.getAttribute("href");
    //Add class to element body
    var body = document.querySelector("body")
    body.classList.add('animation');

    // Delay page out until the animation finishes
    setTimeout(function() {
        window.location.href = gotoLink;
        body.classList.remove('animation')
    }, 2000);
};

// By resizing, reload page.
window.onresize = function() {
    location.reload();
}


// Mouse moving
const el = document.querySelector("html");

el.addEventListener("mousemove", (e) => {
    el.classList.add('background')

    setTimeout(stop, 500);
});

function stop() {
    el.classList.remove('background')
}