const transections = document.querySelector('.transections');

let isDragStart = false, prevPageX, prevScrollLeft;

const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = transections.scrollLeft;
}

const dragging = (e) => {
    if (!isDragStart) return;
    e.preventDefault();
    let positionDiff = e.pageX - prevPageX;
    transections.scrollLeft = prevScrollLeft - positionDiff;
}

const dragStop = (e) => {
    isDragStart = false;
}

transections.addEventListener("mousedown", dragStart);
transections.addEventListener("mousemove", dragging);
transections.addEventListener("mouseup", dragStop);

// For mobile view

const nav = document.querySelector('.nav');

function closeMenu() {
    nav.style.right = '-200px';
}

function openMenu(){
    nav.style.right = '0';
}