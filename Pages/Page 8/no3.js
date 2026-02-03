//Changing gif while hovering on a button
const img = document.getElementById('image');

const images = {
    depressed: '../Assets/attitude.gif',
    ori: "../Assets/angry.gif"
};

function ChangeImage(giphy) {
    img.src = images[giphy];
}
function ResetImage() {
    img.src = images.ori;
};

//BG image change while hovering on a button
var body = document.body;

function bg2() {
    body.className = 'noo';
};

function resetBG() {
    body.className = '';
};

//Moving button
const buttonHeight = 50;
const buttonWidth = 150;

//Making bg
function lines() {
    let sizeW = Math.random() * 12;
    let duration = Math.random() * 3;
    let e = document.createElement('div');
    e.setAttribute('class', 'circle');
    document.body.appendChild(e);
    e.style.width = 2 * sizeW + 'px';
    e.style.left = Math.random() * + innerWidth + 'px';
    e.style.animationDuration = 2 + duration + 's';
    setTimeout(function () {
        document.body.removeChild(e)
    }, 4000);
}

setInterval(function () {
    lines();
}, 200);

function moveButton() {
    const button = document.getElementById('yes');
    // Set position to fixed so it can jump anywhere on the screen
    button.style.position = 'fixed';

    const x = Math.random() * (window.innerWidth - button.offsetWidth);
    const y = Math.random() * (window.innerHeight - button.offsetHeight);

    button.style.left = x + 'px';
    button.style.top = y + 'px';
}

//BG image change while hovering on a button
var body = document.body;

function bg() {
    body.className = 'noo';
};

function resetBG() {
    body.className = '';
};

//Linking to no page
function noFunction() {
    window.location.href = "../Page 5/yes.html";
}