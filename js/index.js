document.querySelector(".timeline").style.height = "1000px";

window.addEventListener("scroll", function() {
    var body = document.querySelector(".timeline");
    var height = body.style.height;
    height = height.slice(0, -2);
    height = Number(height);
    return function() {
        if(height - window.scrollY < 700) {
            height += height / 2;
        }
        body.style.height = height + "px";
    };
}());
