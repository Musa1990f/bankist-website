'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///////////////////////////////////////
// Selecting elements
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// const header = document.querySelector('.header');
// const allSections = document.querySelectorAll('.section');
// console.log(allSections);

// document.getElementById('section--1');
// const allButtons = document.getElementsByName('button');
// console.log(allButtons);

// console.log(document.getElementsByClassName('btn'));

// // Creating and inserting elements
// const message = document.createElement('div');
// message.classList.add('cookie-message');

// // message.textContent = 'We use cookies for improved functionality and analytics.';
// message.innerHTML =
//   ' we use cookies for improved functionality and analytics. <button class = "btn btn--close-cookie">Got it!</button>';
// // header.prepend(message);
// header.append(message);
// // header.append(message.cloneNode(true));

// // header.before(message);
// // header.after(message);

// // Delete elements
// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function () {
//     // message.remove();
//     message.parentElement.removeChild(message);
//   });

// // Styles
// message.style.backgroundColor = '#37383d';
// message.style.width = '120';

// console.log(message.style.backgroundColor);

// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);

// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

// document.documentElement.style.setProperty('--color-primary', 'orangered');

// // Attributes
// const logo = document.querySelector('.nav_logo');
// // console.log(logo.alt);
// // console.log(logo.src);
// // console.log(logo.className);

// const btnScrollTo = document.querySelector('.btn--scroll-to');
// const section1 = document.querySelector('#section1');

// btnScrollTo.addEventListener('click', function (e) {
//   const s1coords = s1coords.getBoundingClientRect();
//   console.log(s1coords);

//   console.log(e.target.getBoundingClientRect());

//   console.log('Current scroll (x/y)', window.pageXOffset.pageYOffset, window.pageYOffset);

//   console.log('height/width viewpoint', document.documentElement.clientHeight,document.documentElement.clientWidth);
// });

// // Scrolling 
// // window.scrollTo(s1coords.left + window.pageXOffset ,
// //    s1coords.top + window.pageYOffset);

//   //  section1.scrollIntoView({behavior : 'smooth'});

//   //  Events and Event Handlers
//    const h1 = document.querySelector('h1');
   
   

//    const alertH1 = function(e) {
//     alert('addEventListener: Great! your are reading the heading: D')};

//     h1.addEventListener('mouseenter', alertH1);

//     setTimeout(() => h1.removeEventListener('mouseenter',alertH1), 3000);

    // rgb(255,255,255)
    // const randomInt = (min, max) => Math.floor(math.random() * (max - min + 1) + min);
    // const randomColor = () => `rgb(${randomInt(0,255)},${randomInt(0,255)},${randomInt(0,255)})`;
    // // console.log(randomColor(0,255));
    // document.querySelector('.nav__link').addEventListener('click',function (e) {this.style.backgroundColor = randomColor()});
    // console.log('LINK',e.target, e.currentTarget);
    // console.log(e.currentTarget === .this);

    // document.querySelector('.nav__link').addEventListener('click',function (e) {this.style.backgroundColor = randomColor()});
    // console.log('CONTAINER', e.target,e.currentTarget);

    // document.querySelector('.nav').addEventListener('click',function (e) {this.style.backgroundColor = randomColor()});
    // console.log('NAV',e.target,e.currentTarget);


    // DOM traversing
    const h1 = document.querySelector('h1');
    // Going downwards: child

    console.log(h1.querySelectorAll('.highlight'));
    console.log(h1.childNodes);
    console.log(h1.children);
    h1.firstElementChild.style.color = 'blue';
    h1.lastElementChild.style.color = ' red';

    // Going upwards: parent
    console.log(h1.parentNodes);
    console.log(h1.parentElement);

    h1.closest('.header').style.background = 'var( --gradient-secondary)'

    h1.closest('h1').style.background = 'var( --gradient-primary)'
    
    // Going sideways: siblings
    console.log(h1.nextElementSibling);
    console.log(h1.previousElementSibling);

    console.log(h1.previousSibling);
    console.log(h1.nextSibling);
    console.log(h1.parentElement.children);
    // [...parentElement.children].forEach(function(el) {
    //   if(el !== h1) el.style.transform = 'scale(0.5)';
    // })