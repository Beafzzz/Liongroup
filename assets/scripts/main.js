const remCvart = document.getElementById("rem-cvart");
const dropdownMenu = document.getElementById("dropdown");

function OpenMenu() {
	dropdownMenu.style.opacity = 1;
	dropdownMenu.style.display = "flex"
	dropdownMenu.style.maxHeight = "640px";
	dropdownMenu.style.paddingTop = "72px";
	dropdownMenu.style.marginTop = "28px";
}

function CloseMenu() {
	dropdownMenu.style.display = "none"
}
remCvart.addEventListener("mouseenter", OpenMenu);
dropdownMenu.addEventListener("mouseenter", OpenMenu);
dropdownMenu.addEventListener("mouseleave", CloseMenu);
const sliderTrack = document.getElementById("sliderTrack");
const slides = document.querySelectorAll(".slider-item");
const sliderImgs = document.querySelectorAll("#slider-img")
const slideCounter = document.querySelector(".slide-counter");
let screenWidth = window.screen.width
let currentIndex = 0;
const slideWidth = slides[0].offsetWidth;

for(let i=0; i<sliderImgs.length; i++)
if(screenWidth <= 400){
	sliderImgs[i].src = "./assets/img/mobile-slider-item.png"
} else{
	sliderImgs[i].src = "./assets/img/slider-item-1.png"
}

function updateSlider() {
	sliderTrack.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
	slideCounter.textContent = `0${currentIndex+1} / 05`;
}

function nextSlide() {
	if (currentIndex != 4) {
		currentIndex += 1;
	} else {
		currentIndex = 0;
	}
	updateSlider();
}

function prevSlide() {
	if (currentIndex != 0) {
		currentIndex -= 1;
	} else {
		currentIndex = 4;
	}
	updateSlider();
}

const keyAreas = document.querySelector(".key-areas .areas-items");
const inner = document.querySelector(".key-areas .areas-items-inner");

let startX;
let startY;
let scrollX = 0;
let isTouching = false;
let isScrolling; // Флаг для определения направления скролла
let momentum = 0; // Инерция
let lastTime = 0;

// Обработчик для мыши
keyAreas.addEventListener("wheel", (e) => {
  e.preventDefault();
  const delta = e.deltaY;
  scrollX += delta; // Увеличиваем скорость прокрутки
  updateScroll();
});

// Обработчики для тача
keyAreas.addEventListener("touchstart", (e) => {
  isTouching = true;
  startX = e.touches[0].clientX;
  startY = e.touches[0].clientY;
  lastTime = Date.now();
  momentum = 0;
  inner.style.transition = "none";
});

keyAreas.addEventListener("touchmove", (e) => {
  if (!isTouching) return;
  
  // Определяем направление скролла
  const currentX = e.touches[0].clientX;
  const currentY = e.touches[0].clientY;
  const dx = Math.abs(currentX - startX);
  const dy = Math.abs(currentY - startY);
  
  if (dx > dy && dx > 5) { // Горизонтальное движение
    e.preventDefault();
    const diff = currentX - startX;
    scrollX -= diff;
    startX = currentX;
    updateScroll();
  } else {
    isTouching = false;
  }
});

keyAreas.addEventListener("touchend", () => {
  isTouching = false;
});

function updateScroll() {
  // Расчёт границ прокрутки
  const maxScroll = inner.scrollWidth - keyAreas.clientWidth;
  scrollX = Math.max(0, Math.min(scrollX, maxScroll));
  
  // Применяем смещение
  inner.style.transform = `translateX(-${scrollX}px)`;
}

const sliderClTrack = document.getElementById("slider-cl-track");
const slidesCl = document.querySelectorAll(".slider-cl-item");
const slideClCounter = document.querySelector(".slide-cl-counter");
let currentClIndex = 0;

if(screenWidth <= 400){
	sliderClTrack.style.gap = "0px";
} else{
	sliderClTrack.style.gap = "42px";
}

sliderClTrack.style.gap = 42;

function updateClSlider() {
  if(screenWidth <= 400){
    sliderClTrack.style.transform = `translateX(-${(currentClIndex * slidesCl[0].offsetWidth)}px)`;
  } else if(screenWidth >= 400 && currentClIndex>=1){
    sliderClTrack.style.transform = `translateX(-${(currentClIndex * slidesCl[0].offsetWidth)+85}px)`;
  } else{
    sliderClTrack.style.transform = `translateX(-${(currentClIndex * slidesCl[0].offsetWidth)}px)`;
  }
  slideClCounter.textContent = `0${currentClIndex+1} / 04`;
}

function nextClSlide() {
  if (currentClIndex < 2 && screenWidth > 400) {
    currentClIndex++;
  } else if((currentClIndex < 3 && screenWidth <= 400)){
    currentClIndex++;
  } else{
    currentClIndex = 0;
  }
  updateClSlider();
}

function prevClSlide() {
  if (currentClIndex < 2 && screenWidth > 400) {
    currentClIndex--;
  } else if((currentClIndex <= 3 && screenWidth <= 400)){
    currentClIndex--;
  } 
  if(currentClIndex < 0){
    currentClIndex = 3;
  }
  updateClSlider();
}

const instaTrack = document.querySelector(".bottom-inner");
const instaSlides = document.querySelectorAll(".slider-inst-item");
const slideInstCounter = document.querySelector(".slide-inst-counter");
let currentInstIndex = 0;

function updateInstSlider() {
  if(currentInstIndex>=1){
    instaTrack.style.transform = `translateX(-${(currentInstIndex * instaSlides[0].offsetWidth)+30}px)`;
  } else{
    instaTrack.style.transform = `translateX(-${(currentInstIndex * instaSlides[0].offsetWidth)}px)`;
  }
  slideInstCounter.textContent = `0${currentInstIndex+1} / 04`;
}

function nextInstSlide() {
  if(currentInstIndex < 3){
    currentInstIndex++;
  } else{
    currentInstIndex = 0;
  }
  updateInstSlider();
}

function prevInstSlide() {
  if(currentInstIndex <= 3){
    currentInstIndex--;
  } 
  if(currentInstIndex < 0){
    currentInstIndex = 3;
  }
  updateInstSlider();
}
