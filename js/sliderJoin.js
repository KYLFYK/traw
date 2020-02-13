let image = document.getElementById('backG');
let image2 = document.getElementById('backG2');
let image3 = document.getElementById('backG3');
let date = document.querySelector('.trip__date');
let name1 = document.querySelector('.trip__city__sw');
let name2 = document.querySelector('.trip__city__fr');
let name3 = document.querySelector('.trip__city__an');
let orderBtn = document.getElementById('btn');
let blockOfJoin = document.getElementById('join-block');
let closeBtn = document.getElementById('join-close');

closeBtn.addEventListener('click', function() {
    blockOfJoin.className = 'join__block unvisible';
});

orderBtn.addEventListener('click', function() {
    blockOfJoin.className = 'join__block';
});

let changeTrip1 = function () {
    image.className = 'trip__block__bg trip__block__bg1';
    image2.className = 'trip__block__bg trip__block__bg2 unvisible';
    image3.className = 'trip__block__bg trip__block__bg3 unvisible';
    date.textContent = '20.05.2020';
    name1.className = 'trip__city trip__city__sw selected';
    name2.className = 'trip__city trip__city__fr';
    name3.className = 'trip__city trip__city__an';
    setTimeout(function(){
        changeTrip2();
    },7000);
};

let changeTrip2 = function () {
    image.className = 'trip__block__bg trip__block__bg1 unvisible';
    image2.className = 'trip__block__bg trip__block__bg2';
    image3.className = 'trip__block__bg trip__block__bg3 unvisible';
    date.textContent = '13.06.2020';
    name1.className = 'trip__city trip__city__sw';
    name2.className = 'trip__city trip__city__fr selected';
    name3.className = 'trip__city trip__city__an';
    setTimeout(function(){
        changeTrip3();
    },7000);
};

let changeTrip3 = function () {
    image.className = 'trip__block__bg trip__block__bg1 unvisible';
    image2.className = 'trip__block__bg trip__block__bg2 unvisible';
    image3.className = 'trip__block__bg trip__block__bg3';
    date.textContent = '27.07.2020';
    name1.className = 'trip__city trip__city__sw';
    name2.className = 'trip__city trip__city__fr';
    name3.className = 'trip__city trip__city__an selected';
};

name1.addEventListener('click', function() {
    image.className = 'trip__block__bg trip__block__bg1';
    image2.className = 'trip__block__bg trip__block__bg2 unvisible';
    image3.className = 'trip__block__bg trip__block__bg3 unvisible';
    date.textContent = '20.05.2020';
    name1.className = 'trip__city trip__city__sw selected';
    name2.className = 'trip__city trip__city__fr';
    name3.className = 'trip__city trip__city__an';
    setTimeout(function(){
        changeTrip2();
    },7000);
});

name2.addEventListener('click', function() {
    image.className = 'trip__block__bg trip__block__bg1 unvisible';
    image2.className = 'trip__block__bg trip__block__bg2';
    image3.className = 'trip__block__bg trip__block__bg3 unvisible';
    date.textContent = '13.06.2020';
    name1.className = 'trip__city trip__city__sw';
    name2.className = 'trip__city trip__city__fr selected';
    name3.className = 'trip__city trip__city__an';
    setTimeout(function(){
        changeTrip3();
    },7000);
});

name3.addEventListener('click', function() {
    image.className = 'trip__block__bg trip__block__bg1 unvisible';
    image2.className = 'trip__block__bg trip__block__bg2 unvisible';
    image3.className = 'trip__block__bg trip__block__bg3';
    date.textContent = '27.07.2020';
    name1.className = 'trip__city trip__city__sw';
    name2.className = 'trip__city trip__city__fr';
    name3.className = 'trip__city trip__city__an selected';
    setTimeout(function(){
        changeTrip1();
    },7000);
});

changeTrip1();