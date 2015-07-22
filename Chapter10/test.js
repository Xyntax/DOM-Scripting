window.onload = positionMessage;
//window.onload = moveMessage;
// 会直接出现第二个函数的效果 是因为js的效率太快，按顺序执行的时候瞬间把第一个执行完了
// setTimeout() - clearTimeout()

function positionMessage(){
    if (!document.getElementById) return false;
    if (!document.getElementById("message")) return false;
    var elem = document.getElementById("message");
    elem.style.position = "absolute";
    elem.style.left = "50px";
    elem.style.top = "10px";

    var move = setTimeout("moveMessage()",1000);
    //var clear_move = clearTimeout(move);
}

function moveMessage(){
    if (!document.getElementById) return false;
    if (!document.getElementById("message")) return false;
    var elem = document.getElementById("message");

    var x = parseInt(elem.style.left);
    var y = parseInt(elem.style.top);
    if (x == 200 && y == 100) {
        return true;
    }
    if (x<200) {
        x++;
    }
    if (x>200) {
        x--;
    }
    if (y<100) {
        y++;
    }
    if (y>100) {
        y--;
    }
    elem.style.left = x + "px";
    elem.style.top = y + "px";
    move = setTimeout("moveMessage()",10)
}
