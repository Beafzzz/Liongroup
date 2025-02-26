const remCvart = document.getElementById("rem-cvart")
const dropdownMenu = document.getElementById("dropdown")

function OpenMenu(){
    dropdownMenu.style.display = "flex"
    dropdownMenu.style.position = "relative"
}

function CloseMenu(){
    dropdownMenu.style.display = "none"
}

remCvart.addEventListener("mouseover", OpenMenu)
dropdownMenu.addEventListener("mouseover", OpenMenu)
dropdownMenu.addEventListener("mouseout", CloseMenu)


// Получаем элементы
const videoPlayer = document.getElementById('video-slider');
const playPauseButton = document.getElementById('playPause');
const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');

// Массив с путями к видео
const videos = ['interior-1.mp4', 'interior-2.mp4', 'interior-3.mp4', 'interior-4.mp4', 'interior-5.mp4'];
let currentVideoIndex = 0;

// Функция для переключения видео
function changeVideo(index) {
    videoPlayer. = videos[index];
    videoPlayer.load();
    videoPlayer.play();
}

// Обработчик для кнопки "Предыдущее видео"
prevButton.addEventListener('click', () => {
    currentVideoIndex = currentVideoIndex - 1;
    changeVideo(currentVideoIndex);
});

// Обработчик для кнопки "Следующее видео"
nextButton.addEventListener('click', () => {
    currentVideoIndex = currentVideoIndex + 1;
    changeVideo(currentVideoIndex);
});
