window.onload = getabbr;

function getabbr(){
    var abbreviations = document.getElementsByTagName("abbr");  // 得到所有abbr标签
    if (abbreviations.length < 1) return false;  // 检查
    var defs = new Array();  // 用数组存储
    for (var i = 0; i<abbreviations.length; i++){
        var defination = abbreviations[i].getAttribute("title"); // 提取title属性
        var key = abbreviations[i].lastChild.nodeValue; // 提取缩略语
        defs[key] = defination;
    }

    var dlist = document.createElement("dl");

    for(key in defs) {
        var definition = defs[key];
        var dtitle = document.createElement("dt");
        var dtitle_text = document.createTextNode(key);
        dtitle.appendChild(dtitle_text);
        var ddesc = document.createElement("dd");
        var ddesc_text = document.createTextNode(defination);
        ddesc.appendChild(ddesc_text);
        dlist.appendChild(dtitle);
        dlist.appendChild(ddesc);
    }

    var header = document.createElement("h2");
    var header_text = document.createTextNode("Abbreviations");
    header.appendChild(header_text);
    document.body.appendChild(header);
    document.body.appendChild(dlist);
}