// image slideshow
const img = document.querySelectorAll('.slide');
const slider = document.querySelectorAll('.space button');

let indexValue = 1;

function showImg(e) {
    if(e > img.length) {
        indexValue = 1
    }
    if(e < 1) {
        indexValue = img.length;
    }
    for(let i = 0; i < img.length; i++) {
        img[i].style.display = 'none'
    }
    for(let i = 0; i < slider.length; i++) {
        slider[i].style.background = 'rgba(255, 255, 255, 0.0)'
    }
    img[indexValue - 1].style.display = 'block'
    slider[indexValue - 1].style.background = 'white';
}

showImg(indexValue);


function side_slide(e) {
    nextSlide();
    showImg(indexValue += e)
}
function side_slides(e) {
    prevSlide();
    showImg(indexValue += e)
}

const nextSlide = () => {
    // Get Current Class
    const current = document.querySelector('.current');
    // Remove curent class
    current.classList.remove('current')
    // Check for next Slide
    if(current.nextElementSibling) {
        // Add current to next siblings
        current.nextElementSibling.classList.add('current');
    } else {
        // Add current to start
        img[0].classList.add('current')
    }
}

const prevSlide = () => {
    // Get Current Class
    const current = document.querySelector('.current');
    // Remove curent class
    current.classList.remove('current')
    // Check for prev Slide
    if(current.previousElementSibling) {
        // Add current to prev siblings
        current.previousElementSibling.classList.add('current');
    } else {
        // Add current to last
        img[img.length - 1].classList.add('current')
    }
}


// CLICKICKING ON FAQ
const showcase = document.querySelector('#showcase');
const showcase1 = document.querySelector('#showcase1');
const showcase2 = document.querySelector('#showcase2');
const showcase3 = document.querySelector('#showcase3');
const showcase4 = document.querySelector('#showcase4');
const showcase5 = document.querySelector('#showcase5');
const showcase6 = document.querySelector('#showcase6');
const remove = document.querySelector('#remove');
const maker = document.getElementById('maker');
const maker1 = document.getElementById('maker1');
const maker2 = document.getElementById('maker2');
const maker3 = document.getElementById('maker3');
const remove1 = document.querySelector('#remove1');
const remove2 = document.querySelector('#remove2');
const remove3 = document.querySelector('#remove3');
const remove4 = document.querySelector('#remove4');
const remove5 = document.querySelector('#remove5');
const remove6 = document.querySelector('#remove6');
const li = document.querySelectorAll('.details li');
const fire = document.querySelector('.fire');
const fire1 = document.querySelector('.fire1');
const show = document.querySelector('#show');
const showing = document.querySelector('#showing');
const show1 = document.querySelector('#show1');
const showing1 = document.querySelector('#showing1');
const show2 = document.querySelector('#show2');
const showing2 = document.querySelector('#showing2');
const show3 = document.querySelector('#show3');
const showing3 = document.querySelector('#showing3');
const show4 = document.querySelector('#show4');
const showing4 = document.querySelector('#showing4');
const show5 = document.querySelector('#show5');
const showing5 = document.querySelector('#showing5');
const show6 = document.querySelector('#show6');
const showing6 = document.querySelector('#showing6');


showcase.addEventListener('click', good);
showcase1.addEventListener('click', great);
showcase2.addEventListener('click', greate);
showcase3.addEventListener('click', greater);
showcase4.addEventListener('click', greatst);
showcase5.addEventListener('click', greats);
showcase6.addEventListener('click', greation);

function good() {
    remove.style.display = 'block';
    remove1.style.display = 'none';
    remove2.style.display = 'none';
    remove3.style.display = 'none';
    remove4.style.display = 'none';
    remove5.style.display = 'none';
    remove6.style.display = 'none';
    maker.style.display = 'none';
    maker1.style.display = 'none';
    maker2.style.display = 'none';
    maker3.style.display = 'none';
    show.style.display = 'none';
    showing.style.display = 'block';
    show1.style.display = 'block';
    showing1.style.display = 'none';
    show2.style.display = 'block';
    showing2.style.display = 'none';
    show3.style.display = 'block';
    showing3.style.display = 'none';
    show4.style.display = 'block';
    showing4.style.display = 'none';
    show5.style.display = 'block';
    showing5.style.display = 'none';
    show6.style.display = 'block';
    showing6.style.display = 'none';
}

function great() {
    remove.style.display = 'none';
    remove1.style.display = 'block';
    remove2.style.display = 'none';
    remove3.style.display = 'none';
    remove4.style.display = 'none';
    remove5.style.display = 'none';
    remove6.style.display = 'none';
    maker.style.display = 'none';
    maker1.style.display = 'none';
    maker2.style.display = 'none';
    maker3.style.display = 'none';
    show.style.display = 'block';
    showing.style.display = 'none';
    show1.style.display = 'none';
    showing1.style.display = 'block';
    show2.style.display = 'block';
    showing2.style.display = 'none';
    show3.style.display = 'block';
    showing3.style.display = 'none';
    show4.style.display = 'block';
    showing4.style.display = 'none';
    show5.style.display = 'block';
    showing5.style.display = 'none';
    show6.style.display = 'block';
    showing6.style.display = 'none';
}

function greate() {
    remove.style.display = 'none';
    remove1.style.display = 'none';
    remove2.style.display = 'block';
    remove3.style.display = 'none';
    remove4.style.display = 'none';
    remove5.style.display = 'none';
    remove6.style.display = 'none';
    maker.style.display = 'none';
    maker1.style.display = 'none';
    maker2.style.display = 'none';
    maker3.style.display = 'none';
    show.style.display = 'block';
    showing.style.display = 'none';
    show1.style.display = 'block';
    showing1.style.display = 'none';
    show2.style.display = 'none';
    showing2.style.display = 'block';
    show3.style.display = 'block';
    showing3.style.display = 'none';
    show4.style.display = 'block';
    showing4.style.display = 'none';
    show5.style.display = 'block';
    showing5.style.display = 'none';
    show6.style.display = 'block';
    showing6.style.display = 'none';
}

function greater() {
    remove.style.display = 'none';
    remove1.style.display = 'none';
    remove2.style.display = 'none';
    remove3.style.display = 'block';
    remove4.style.display = 'none';
    remove5.style.display = 'none';
    remove6.style.display = 'none';
    maker.style.display = 'block';
    maker1.style.display = 'block';
    maker2.style.display = 'block';
    maker3.style.display = 'block';
    show.style.display = 'block';
    showing.style.display = 'none';
    show1.style.display = 'block';
    showing1.style.display = 'none';
    show2.style.display = 'block';
    showing2.style.display = 'none';
    show3.style.display = 'none';
    showing3.style.display = 'block';
    show4.style.display = 'block';
    showing4.style.display = 'none';
    show5.style.display = 'block';
    showing5.style.display = 'none';
    show6.style.display = 'block';
    showing6.style.display = 'none';
}

function greatst() {
    remove.style.display = 'none';
    remove1.style.display = 'none';
    remove2.style.display = 'none';
    remove3.style.display = 'none';
    remove4.style.display = 'block';
    remove5.style.display = 'none';
    remove6.style.display = 'none';
    maker.style.display = 'none';
    maker1.style.display = 'none';
    maker2.style.display = 'none';
    maker3.style.display = 'none';
    show.style.display = 'block';
    showing.style.display = 'none';
    show1.style.display = 'block';
    showing1.style.display = 'none';
    show2.style.display = 'block';
    showing2.style.display = 'none';
    show4.style.display = 'none';
    showing4.style.display = 'block';
    show3.style.display = 'block';
    showing3.style.display = 'none';
    show5.style.display = 'block';
    showing5.style.display = 'none';
    show6.style.display = 'block';
    showing6.style.display = 'none';
}

function greats() {
    remove.style.display = 'none';
    remove1.style.display = 'none';
    remove2.style.display = 'none';
    remove3.style.display = 'none';
    remove4.style.display = 'none';
    remove5.style.display = 'block';
    remove6.style.display = 'none';
    maker.style.display = 'none';
    maker1.style.display = 'none';
    maker2.style.display = 'none';
    maker3.style.display = 'none';
    show.style.display = 'block';
    showing.style.display = 'none';
    show1.style.display = 'block';
    showing1.style.display = 'none';
    show2.style.display = 'block';
    showing2.style.display = 'none';
    show4.style.display = 'block';
    showing4.style.display = 'none';
    show3.style.display = 'block';
    showing3.style.display = 'none';
    show5.style.display = 'none';
    showing5.style.display = 'block';
    show6.style.display = 'block';
    showing6.style.display = 'none';
}

function greation() {
    remove.style.display = 'none';
    remove1.style.display = 'none';
    remove2.style.display = 'none';
    remove3.style.display = 'none';
    remove4.style.display = 'none';
    remove5.style.display = 'none';
    remove6.style.display = 'block';
    maker.style.display = 'none';
    maker1.style.display = 'none';
    maker2.style.display = 'none';
    maker3.style.display = 'none';
    show.style.display = 'block';
    showing.style.display = 'none';
    show1.style.display = 'block';
    showing1.style.display = 'none';
    show2.style.display = 'block';
    showing2.style.display = 'none';
    show3.style.display = 'block';
    showing3.style.display = 'none';
    show4.style.display = 'block';
    showing4.style.display = 'none';
    show5.style.display = 'block';
    showing5.style.display = 'none';
    show6.style.display = 'none';
    showing6.style.display = 'block';
}

// LOADING OF NUMBERS 
const nums = document.querySelectorAll('.value-1 #hund');
const num1 = document.querySelectorAll('.value-1 #hunds');
const nums1 = document.querySelectorAll('.value-i .counter');
// const section = document.querySelector('.value .value-1');

nums.forEach((num) => {
    startsCount(num)
});
num1.forEach((num) => {
    startCounts(num)
});
nums1.forEach((num) => {
    startCount(num)
});


function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if(el.textContent == goal) {
            clearInterval(count)
        }
    }, 10);
}
function startsCount(els) {
    let goal = els.dataset.goal;
    let count = setInterval(() => {
        els.textContent++;
        if(els.textContent == goal) {
            clearInterval(count)
        }
    }, 0.000000001/ 1000000000);
}
function startCounts(ele) {
    let goal = ele.dataset.goal;
    let count = setInterval(() => {
        ele.textContent++;
        if(ele.textContent == goal) {
            clearInterval(count)
        }
    }, 100);
}


// MOVEMENT OF NAME
const folder = document.querySelector(' .name ul');
const list = document.querySelectorAll('.name li');

let start = 0;

console.log(list.length-1);

function move() {
    start++;
    if(start > list.length-1) {
        start = 0;
    }

    folder.style.transform = `translateX(${-start*4}%)`;
}

setInterval(move, 2500);

// MOVEMENT OF NAME2
const folderrr = document.querySelector(' .name .fresh');
const listers = document.querySelectorAll('.name #jogo');
const sliderx = document.querySelectorAll('.masters button');

let startos = 0;
let indexValues = 1;

console.log(listers.length-1);

function moveroo() {
    startos++;
    indexValues++;
    if(startos > listers.length-1) {
        startos = 0;
    }
    if(indexValues > listers.length) {
        indexValues = 1
    }
    for(let i = 0; i < sliderx.length; i++) {
        sliderx[i].style.background = '#d6d6d6'
    }

    folderrr.style.transform = `translateX(${-startos * 18}%)`;
    sliderx[indexValues - 1].style.background = '#f7921a';
}

setInterval(moveroo, 3000);

function btm_slide(e) {
    moveroo(startos = e);
}

// CARD SLIDE MOVEMENT
const nextEl = document.querySelector('.arrow .right-arrow');
const prevEl = document.querySelector('.arrow .left-arrow');
const container = document.querySelector('.joined');
const containerPeople = document.querySelectorAll('.joinedss');

let current = 1;

nextEl.addEventListener('click', fold);
prevEl.addEventListener('click', folders);

function fold() {
    current++;
    updateImg();
}

function folders() {
    current--;
    updateImg();
}

function updateImg() {
    if(current > containerPeople.length) {
        current = 1
    }
    container.style.transform = `translateX(-${(current - 1) * 1100}px)`
}




// MOVEMENT OF LOGO
const gallery = document.querySelector(' .sizes .gallery');
const gala = document.querySelectorAll('.sizes .gala');

let startter = 0;

console.log(gala.length-1);

function moving() {
    startter++;
    if(startter > gala.length) {
        startter = 0;
    }

    gallery.style.transform = `translateX(${-startter * 15}%)`;
}

setInterval(moving, 3000);

// MENU BAR
const menu = document.querySelector('.menu-icon');

menu.addEventListener('click', main);

function main() {
    document.querySelector('body').classList.toggle('active');
}