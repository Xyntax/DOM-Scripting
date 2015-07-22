addLoadEvent(preparePlaceholder());

function preparePlaceholder(){
    var placeholder = document.createElement("img");
    placeholder.setAttribute("id","placeholder");
    placeholder.setAttribute("src","images/placeholder.gif");
    placeholder.setAttribute("alt","my image gallery");
    var description = document.createElement("p");
    description.setAttribute("id","description");
    var desc_text = document.createTextNode("choose an image");
    description.appendChild(desc_text);

    document.getElementsByTagName("body")[0].appendChild(placeholder);
    document.body.appendChild(description);
}