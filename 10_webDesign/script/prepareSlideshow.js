addLoadEvent(prepareSlideshow);
//window.onload = prepareSlideshow;
//window.onload = function () {
//    prepareSlideshow();
//};

function prepareSlideshow() {
    //make sure the browser understand the DOM methods;
    if (!document.getElementById) return false;
    if (!document.getElementsByTagName) return false;
    //make sure the element exist;
    if (!document.getElementById("linklist")) return false;
    if (!document.getElementById("preview")) return false;
    //Apply styles to the preview image;
    var preview = document.getElementById("preview");
    preview.style.position = "absolute";
    preview.style.top = "0px"; // 会出现在当前容器元素(div)的左上角
    preview.style.left = "0px";
    //Get all the links in the list:
    var list = document.getElementById("linklist");
    var links = list.getElementsByTagName("a");
    //Attach the animation behavior to the mouseover event:
    links[0].onmouseover = function () {
        moveElement("preview", -100, 0, 10);
    };
    links[1].onmouseover = function () {
        moveElement("preview", -200, 0, 10);
    };
    links[2].onmouseover = function () {
        moveElement("preview", -300, 0, 10);
    };
}

