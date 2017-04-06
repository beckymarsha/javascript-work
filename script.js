// Select all HTML elements with a class of "box".
var boxes = document.querySelectorAll(".box");

boxes[0].style.backgroundColor = "green";
boxes[1].style.backgroundColor = "purple";
boxes[2].style.backgroundColor = "#191919";
boxes[3].style.backgroundColor = "blanchedAlmond";
boxes[4].style.backgroundColor = "default";

// Variable to hold the current left margin.
var leftMargin0 = 0;
var leftMargin1 = 0;
var leftMargin2 = 0;
var leftMargin3 = 0;
var topMargin = 0;

// Variable used to add to the left margin.
var moveAmount = 5;

// Function that adds moveAmount to leftMargin then appends leftMargin
// to the first box's margin left. Basically moving the box to the right.
function box0Clicked() {

    // 'console.log()' only displays in the browser console.
    // It's useful for you, the developer, to debug your code.
    console.log("Hey, box clicked!");
    leftMargin0 += moveAmount;
    boxes[0].style.marginLeft = leftMargin0 + "px";
}

function box1Clicked() {
    console.log("Hey, box clicked!");
    leftMargin1 += moveAmount;
    leftMargin1 += moveAmount;
    boxes[1].style.marginLeft = leftMargin1 + "px";
}

function box2Clicked() {
    console.log("Hey, box clicked!");
    leftMargin2 += moveAmount;
    leftMargin2 += moveAmount;
    leftMargin2 += moveAmount;
    boxes[2].style.marginLeft = leftMargin2 + "px";
}

function box3Clicked() {
    console.log("Hey, box clicked!");
    leftMargin3 += moveAmount;
    leftMargin3 += moveAmount;
    leftMargin3 += moveAmount;
    leftMargin3 += moveAmount;
    boxes[3].style.marginLeft = leftMargin3 + "px";
}

function box4Clicked() {
    console.log("Hey, box clicked!");
    topMargin += moveAmount;
    topMargin += moveAmount;
    topMargin += moveAmount;
    topMargin += moveAmount;
    topMargin += moveAmount;
    boxes[4].style.marginTop = topMargin + "px";
}

// When anyone clicks on the first box, call the function "boxClicked".
boxes[0].addEventListener("click", box0Clicked);
boxes[1].addEventListener("click", box1Clicked);
boxes[2].addEventListener("click", box2Clicked);
boxes[3].addEventListener("dblclick", box3Clicked);
boxes[4].addEventListener("click", box4Clicked);
