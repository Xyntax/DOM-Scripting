addLoadEvent(prepareGallery());

function prepareGallery(){
    preparePlaceholder();
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById) return false;
    if (!document.getElementById("imagegallery")) return false;

    var gallery = document.getElementById("imagegallery");
    var links = gallery.getElementsByTagName("a");
    for (var i=0; i<links.length; i++) {
        links[i].onclick = function() {
            return showPic(this);
        }
    }
}


function showPic(whichpic) {
    if (!document.getElementById("placeholder")) return true;
    //var source = whichpic.getAttribute("href");
    var source = whichpic.href;  //这句话等价于上面的注释句 getAAttribute都可以这样简化
    var placeholder = document.getElementById("placeholder");
    if (placeholder.nodeName != "IMG") return true;
    //placeholder.setAttribute("src", source);
    placeholder.src = source;  // 赋值的简化
    if (!document.getElementById("description")) return false;
    var description = document.getElementById("description");
    if (whichpic.getAttribute("title")) {
        //var text = whichpic.getAttribute("title");
        var text = whichpic.title;  // 简化
    } else {
        var text = '';
    }

    if (description.firstChild.nodeType == 3) {
        description.firstChild.nodeValue = text;
    }
    return false;
}
