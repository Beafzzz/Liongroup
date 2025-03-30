const remCvart = document.getElementById("rem-cvart");
const dropdownMenu = document.getElementById("dropdown");

function OpenMenu() {
	dropdownMenu.style.opacity = 1;
	dropdownMenu.style.maxHeight = "640px";
	dropdownMenu.style.paddingTop = "72px";
	dropdownMenu.style.marginTop = "28px";
}

function CloseMenu() {
	dropdownMenu.style.opacity = 0;
	dropdownMenu.style.maxHeight = "0px";
	dropdownMenu.style.paddingTop = "0px";
	dropdownMenu.style.marginTop = "0px";
}
remCvart.addEventListener("mouseover", OpenMenu);
dropdownMenu.addEventListener("mouseover", OpenMenu);
dropdownMenu.addEventListener("mouseout", CloseMenu);
const sliderTrack = document.getElementById("sliderTrack");
const slides = document.querySelectorAll(".slider-item");
const slideCounter = document.querySelector(".slide-counter");
let currentIndex = 0;
const slideWidth = slides[0].offsetWidth;

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

document.querySelector(".key-areas .areas-items").addEventListener("wheel", (e) => {
	e.preventDefault();
	const inner = document.querySelector(".key-areas .areas-items-inner");
	const delta = e.deltaY;
	let currentScrollX = parseInt(inner.dataset.scrollX || 0);
	if (delta > 0) {
		currentScrollX -= 50;
	} else {
		currentScrollX += 50;
	}
	currentScrollX = Math.max(Math.min(currentScrollX, 0), -550);
	inner.style.transform = `translateX(${currentScrollX}px)`;
	inner.dataset.scrollX = currentScrollX;
});

const sliderClTrack = document.getElementById("slider-cl-track");
const slidesCl = document.querySelectorAll(".slider-cl-item");
let currentClIndex = 0;

function updateClSlider() {
  sliderClTrack.style.transform = `translateX(-${(currentClIndex * 802)}px)`;
}

function nextClSlide() {
  if (currentClIndex < 2) {
    currentClIndex++;
  } else {
    currentClIndex = 0;
  }
  updateClSlider();
}

function prevClSlide() {
  if (currentClIndex > 0) {
    currentClIndex--;
  } else {
    currentClIndex = 2;
  }
  updateClSlider();
}