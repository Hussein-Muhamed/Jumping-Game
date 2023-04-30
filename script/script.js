var player = document.getElementsByClassName('character')[0]
var block = document.getElementsByClassName('block')[0]
var score = document.getElementsByTagName('span')[0]
var bg = document.getElementsByClassName('bg')[0];
var divOfScore = document.getElementById('score')
var text = document.getElementById('text')
var box = document.getElementsByClassName('box')[0]
var btns = document.getElementsByTagName('input')
var level = document.getElementById('level')
var target = document.getElementById('target')
var btn = document.getElementById('btn')

var sound = new Audio('../effects/jump.mp3')
var cat = new Audio('../effects/lose.wav')
var victory = new Audio('../effects/tada.mp3')
var crowd = new Audio('../effects/crowd.mp3')
var refe = new Audio('../effects/referee.mp3')
var space = new Audio('../effects/space.mp3')

level.innerText = localStorage.getItem("difficulty")

if(localStorage.getItem("champ") == "cat"){
    player.src = "../imgs/icons/kitty.png"
    block.src = "../imgs/icons/garbage.png"
    bg.src = "../imgs/game/bg4.avif"
}

else if(localStorage.getItem("champ") == "player"){
    player.src = "../imgs/icons/football-player.png"
    block.src = "../imgs/icons/cone.png"
    bg.src = "../imgs/game/staduiom.gif"
}

else if(localStorage.getItem("champ") == "astronaut"){
    player.src = "../imgs/icons/astronaut.png"
    block.src = "../imgs/icons/comet.png"
    bg.src = "../imgs/game/space (2).gif"
}

block.style.animation = `move ${localStorage.getItem("animationOfBlock")} infinite linear`

function jump(e) {
    if(e.keyCode == 13){
        location.reload()
    }
    if (!player.style.animation) {
        player.style.animation = `jump ${(localStorage.getItem("animationOfJump")/1000)}s  linear`
            sound.play()
    }
    setTimeout(function () {
        player.style.animation = ""
    }, Number(localStorage.getItem('animationOfJump')))
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
    if (leftBlock < 100 && leftBlock > -100 && topPlayer >= 400) {
        box.style.display = "block"
        text.innerHTML = `Game Over 💥`
        if(localStorage.getItem('champ') == "cat"){
            cat.play()
        }
        if(localStorage.getItem('champ') == "player"){
            refe.play()
        }
        if(localStorage.getItem('champ') == "astronaut"){
            space.play()
        }
        display()
    }
}, 5)

function win() {
    box.style.display = "block"
    text.innerHTML = `Level Complete 🐱‍🚀🎇`
    crowd.play()
    display()
}

function clap(){
    victory.play()
}

var userScore = setInterval(function () {
    score.innerHTML = Number(score.innerText) + 1
        if(score.innerHTML == 10){
        clap()
        win()
    }
}, 800)

function again() {
    location.reload()
}





