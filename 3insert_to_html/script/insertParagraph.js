
/*

//document.write()
function insertParagraph(text){
    var str = "<p>";
    str += text;
    str += "<p>";
    document.write(str);
}

//innerHtml 的读功能
window.onload=function(){
    var testdiv = document.getElementById("testdiv");
    alert(testdiv.innerHTML)
};

//innerHTML 的写入功能
//使用其写入时不论原来有什么，将全部替换
window.onload=function(){
    var testdiv = document.getElementById("testdiv");
    testdiv.innerHTML = "<p>I inserted <em>this</em> content.</p>";
};



//使用DOM方法添加节点
window.onload = function(){
    //document.createElement() 新建一个元素节点
    var para = document.createElement("p");
    var testdiv = document.getElementById("testdiv");
    testdiv.appendChild(para);
    //document.createTextNode() 新建一个文本节点
    var text = document.createTextNode("Hello World");
    para.appendChild(text);
};

*/

//使用DOM方法添加一颗小DOM树
window.onload=function(){
    var para = document.createElement("p");
    var em = document.createElement("em");
    var p_text1 = document.createTextNode("This is ");
    var p_text2 = document.createTextNode(" content.");
    var em_text = document.createTextNode("my");
    var testdiv = document.getElementById("testdiv");
    em.appendChild(em_text);
    para.appendChild(p_text1);
    para.appendChild(em);
    para.appendChild(p_text2);
    testdiv.appendChild(para);
};