var player = document.getElementsByClassName('character')[0]
var block = document.getElementsByClassName('block')[0]
var score = document.getElementsByTagName('span')[0]
var container = document.getElementsByClassName('game')[0];
var divOfScore = document.getElementById('score')
var text = document.getElementById('text')
var box = document.getElementsByClassName('box')[0]
var btns = document.getElementsByTagName('input')
var level = document.getElementById('level')
var target = document.getElementById('target')
var btn = document.getElementById('btn')
var sound = new Audio('./effects/jump.mp3')
var over = new Audio('./effects/lose.wav')
var victory = new Audio('./effects/tada.mp3')
var crowd = new Audio('./effects/crowd.mp3')

function jump() {
    if (player.classList != "animation") {
        player.classList.add("animation")
        sound.play()
    }
    setTimeout(function () {
        player.classList.remove('animation')
    }, 400)
}

function display() {
    player.style.display = "none"
    block.style.animation = "none"
    block.style.display = "none"
    clearInterval(userScore)
}

var deadCheck = setInterval(function () {
    var topPlayer = parseInt(window.getComputedStyle(player).getPropertyValue('top'))
    var leftBlock = parseInt(window.getComputedStyle(block).getPropertyValue('left'))
    if (leftBlock < 100 && leftBlock > -100 && topPlayer >= 450) {
        box.style.display = "block"
        text.innerHTML = `Game Over 💥`
        over.play()
        display()
    }
}, 10)

function win() {
    box.style.display = "block"
    text.innerHTML = `Level Complete 🐱‍🚀🎇`
    victory.play()
    crowd.play()
    display()
}

var userScore = setInterval(function () {
    score.innerHTML = Number(score.innerText) + 1
    if (score.innerHTML == 5) {
        win()
    }
}, 700)

function again() {
    location.reload()
}



