/**
 *
 * Created by xy on 7/18/15.
 */

function popUp(winURL){
    window.open(winURL, "popUp", "width=320, height=480");
}

/*
//分离js与html（将onclick方法放入js代码中）
//script文档在html的head标签里被引入并加载，所以下面代码将会在body加载之前就运行，是无效的

var links = document.getElementsByTagName("a");
for (var i=0; i<links.length; i++) {
    links[i].onclick = function(){
        popUp(this.getAttribute("href"));
        return false;
    }
}
*/

/*
//正确的处理方式（分离js）

window.onload = prepareLinks;
function prepareLinks(){
    var links = document.getElementsByTagName("a");
    for (var i=0; i<links.length; i++) {
        if(links[i].getAttribute("class") == "popup") { //对具有class=popup属性的标签加载onclick方法
            links[i].onclick = function() {
                popUp(this.getAttribute("href"));  //调用popUp函数
                return false;
            }
        }
    }
}
*/

//向后兼容（察看浏览器知否支持这个方法）
//为了减少大括号层数，使用if(!xxx)return false;特别注意这里的方法不是调用，方法后面不要有小括号！
//修改上例代码如下
//window.onload = prepareLinks;
function prepareLinks(){
    if (!document.getElementsByTagName) return false; // see this !
    var links = document.getElementsByTagName("a");
    for (var i=0; i<links.length; i++) {
        if(links[i].getAttribute("class") == "popup") {
            links[i].onclick = function() {
                popUp(this.getAttribute("href"));
                return false;
            }
        }
    }
}