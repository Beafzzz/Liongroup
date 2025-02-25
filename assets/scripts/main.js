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
remCvart.addEventListener("mouseout", CloseMenu)