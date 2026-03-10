let highlightColor = "#888888";
let unhighlightColor = "#aaaaaa";

function userHighlight(id) {
    let elem = document.getElementById(id);

    elem.style.backgroundColor = highlightColor;
}

function userUnhighlight(id) {
    let elem = document.getElementById(id);

    elem.style.backgroundColor = unhighlightColor;
}

function toggleBottom(id) {
    let elem = document.getElementById(id);

    if (elem.style.display == "block")
        elem.style.display = "none";
    else
        elem.style.display = "block";
}