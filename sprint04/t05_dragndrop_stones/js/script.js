let area = document.getElementById("area");
let state = {
    target: null
}


area.addEventListener("dblclick", ev => {
    if (ev.target.getAttribute("lock")==="on"){
        ev.target.setAttribute("lock","off");
    } else {
        ev.target.setAttribute("lock","on");
    }
});

area.addEventListener("mouseup", ev => {
    if (ev.target.getAttribute("lock")==="on"){
        state.target = ev.target;
        state.offsetX = ev.offsetX;
        state.offsetY = ev.offsetY;
    }
});

area.addEventListener("mousedown", ev => {
    state.target = null;
});

area.addEventListener("mousemove", ev => {
    if (state.target) {
        state.target.style.left = (ev.pageX - state.offsetX) + "px";
        state.target.style.top = (ev.pageY - state.offsetY) + "px";
    }
});