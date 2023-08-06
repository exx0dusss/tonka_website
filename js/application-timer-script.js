const FULL_DASH_ARRAY = 283;
const RESET_DASH_ARRAY = `-57 ${FULL_DASH_ARRAY}`;


//DOM elements
let timer = document.querySelector("#base-timer-path-remaining");
let timeLabel = document.getElementById("base-timer-label");

//Time related vars
const TIME_LIMIT = 1800; //in seconds
let timePassed = -1;
let timeLeft = TIME_LIMIT;
let timerInterval = null;

function reset() {
    clearInterval(timerInterval);
    resetVars();
    timer.setAttribute("stroke-dasharray", RESET_DASH_ARRAY);
}


function startTimer() {
    timerInterval = setInterval(() => {
        timePassed = timePassed += 1;
        timeLeft = TIME_LIMIT - timePassed;
        timeLabel.innerHTML = formatTime(timeLeft);
        setCircleDasharray();

    }, 1000);
}

window.addEventListener("load", () => {
    timeLabel.innerHTML = formatTime(TIME_LIMIT);
});


function resetVars() {
    timePassed = -1;
    timeLeft = TIME_LIMIT;
    console.log(timePassed, timeLeft);
    timeLabel.innerHTML = formatTime(TIME_LIMIT);
}

function formatTime(time) {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    if (seconds < 10) {
        seconds = `0${seconds}`;
    }

    return `${minutes}:${seconds}`;
}

function calculateTimeFraction() {
    const rawTimeFraction = timeLeft / TIME_LIMIT;
    return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
}

function setCircleDasharray() {
    const circleDasharray = `${(
        calculateTimeFraction() * FULL_DASH_ARRAY
    ).toFixed(0)} 283`;
    timer.setAttribute("stroke-dasharray", circleDasharray);
}


const fixedInput = document.getElementById('fixed-input')
const timerInput = document.getElementById('timer-input')
const timerCircle = document.getElementById('timer-circle')

const courseMainText = document.getElementById('course-main-text')
//
// fixedInput.addEventListener('change', function () {
//     if (fixedInput.checked) {
//         timerCircle.classList.add('hidden')
//         // courseMainText.textContent = "The course is fixed for 30 minutes"
//     }
// });
//
//
// timerInput.addEventListener('change', function () {
//     if (timerInput.checked) {
//         timerCircle.classList.remove('hidden')
//         // courseMainText.textContent = "The timer is set for 30 minutes"
//     }
//
// });

startTimer();
