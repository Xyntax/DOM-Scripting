function showPic(whichpic) {
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src", source);
    showPicName(whichpic);
}

/*
function countBodyChildern() {
    var body_element = document.getElementsByTagName("body")[0];
    //alert(body_element.childNodes.length);
    alert(body_element.nodeType)
}
*/
//window.onload = countBodyChildern; //窗口加载时自动调用函数，函数后面不用加括号
function showPicName(whichpic) {
    var text = whichpic.getAttribute("title");
    var description = document.getElementById("description");
    description.firstChild.nodeValue = text;  //修改元素内容：firstchild 的 value
}

