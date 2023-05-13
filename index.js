const screens = document.querySelectorAll(".screen")
const startButton = document.querySelector("#start")
const timeList = document.querySelector("#time_list")
let time = 0
let score = 0
startButton.addEventListener('click', (event) => {
    event.preventDefault()
    screens[0].classList.add('up')
    console.log("dd")
})
timeList.addEventListener('click', (event) => {
    if (event.target.classList.contains('button')) {
        parseInt(
            time = event.target.getAttribute('data-time')
        )
        screens[1].classList.add('up')
        console.log(time)
    }
})