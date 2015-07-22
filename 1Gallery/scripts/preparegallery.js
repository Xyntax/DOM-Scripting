window.onload = preparegallery;
//addLoadEvent(preparegallery());
//addLoadEvent(showPic());

function preparegallery(){
    if (!document.getElementsByTagName) return false; // 向后兼容
    if (!document.getElementById) return false;
    if (!document.getElementById("imagegallery")) return false; // 预防性措施

    var gallery = document.getElementById("imagegallery");
    var links = gallery.getElementsByTagName("a");
    for (var i=0; i<links.length; i++) {
        links[i].onclick = function() {
            // 此处根据showPic的返回值控制了:onclick之后是否还要再打开一次链接(预留退路)
            //alert(showPic(this));
            return showPic(this);
        }
    }
}

// 改良后的showPic函数 （集成里替换图片、替换文字的两个功能）
// 为什么检测的这么细致呢，面对我们不可控制的html时写的js代码，不能主观认为html里一定有什么，有点fuzzing的感觉
function showPic(whichpic) {
    // 向后兼容，如果没有placeholder，那么onclick函数完全无用，
    // 考虑到“预留退路”，应该不取消onclick后面的return！
    // 此处用showPic的返回值进行控制是否取消onclick的"后摇"
    // （见调用showPic()的onclick函数！ ）
    if (!document.getElementById("placeholder")) return true;  // 向后兼容(不取消onclick之后的默认动作)
    var source = whichpic.getAttribute("href");
    // 检查是否是图片 注意在nodeName中全是大写的
    var placeholder = document.getElementById("placeholder");
    if (placeholder.nodeName != "IMG") return true;
    placeholder.setAttribute("src", source); // 替换图片

    if (!document.getElementById("description")) return false;  // 向后兼容(取消默认动作)
    var description = document.getElementById("description");
    if (whichpic.getAttribute("title")) {   // 继续减少依赖性，用if判断
        var text = whichpic.getAttribute("title");
    } else {
        var text = '';  // 这样处理即使出错也不会影响视觉效果
    }
    // 检查是否是文本
    if (description.firstChild.nodeType == 3) {
        description.firstChild.nodeValue = text; // 替换文本
    }
    return false; // 千万别忘了这一句
}

/*
// 加载js函数的通用方式
// 因为要将js分离，将onclick写到js里，所以需要在加载完html后、接受用户操作前加载js函数
// 为避免onload的冲突，采用以下两种通用方式

//1 为onload指定函数
window.onload = function(){
    showPic();
    preparegallery();
};
//2 程序化解决（在脚本库中添加addLoadEvent() 函数 并在添加时调用）
addLoadEvent(preparegallery());
*/