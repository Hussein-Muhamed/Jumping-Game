var cat = document.getElementById('cat')
var player = document.getElementById('player')
var astronaut = document.getElementById('astronaut')

var easy = document.getElementById('easy')
var meduim = document.getElementById('meduim')
var hard = document.getElementById('hard')

function card(t){
    if(t.id == "cat"){
        if(!t.className.includes(" active")){
            t.className += " active"
            localStorage.setItem("champ", "cat");
            player.className = player.className.replace(" active", "");
            astronaut.className = astronaut.className.replace(" active", "");
        }
    }
     if (t.id == "player") {
        if(!t.className.includes(" active")){
        t.className += " active"
        localStorage.setItem("champ", "player");
        cat.className = cat.className.replace(" active", "");
        astronaut.className = astronaut.className.replace(" active", "");
        }
    }
     if (t.id == "astronaut") {
        if(!t.className.includes(" active")){
        t.className += " active"
        localStorage.setItem("champ", "astronaut");
        cat.className = cat.className.replace(" active", "");
        player.className = player.className.replace(" active", "");
        }
    }
}

function difficulty(t){
    if(t.id == "easy"){
        if(!t.className.includes(" active")){
            t.className += " active"
            localStorage.setItem("difficulty", "easy");
            meduim.className = meduim.className.replace(" active", "");
            hard.className = hard.className.replace(" active", "");
        }
    }
     if (t.id == "meduim") {
        if(!t.className.includes(" active")){
        t.className += " active"
        localStorage.setItem("difficulty", "meduim");
        easy.className = easy.className.replace(" active", "");
        hard.className = hard.className.replace(" active", "");
        }
    }
     if (t.id == "hard") {
        if(!t.className.includes(" active")){
        t.className += " active"
        localStorage.setItem("difficulty", "hard");
        easy.className = easy.className.replace(" active", "");
        meduim.className = meduim.className.replace(" active", "");
        }
    }

}

function start(){
    if(localStorage.champ == "cat"){
        if(localStorage.difficulty == "easy") {
            localStorage.setItem("animationOfBlock", "1.5s")
            localStorage.setItem("animationOfJump", "700")
            location.href = ('../html/player.html')
        }
        else if(localStorage.difficulty == "meduim") {
            localStorage.setItem("animationOfBlock", "0.8s")
            localStorage.setItem("animationOfJump", "500")
            location.href = ('../html/player.html')
        }
        else if(localStorage.difficulty == "hard") {
            localStorage.setItem("animationOfBlock", "0.5s")
            localStorage.setItem("animationOfJump", "350")
            location.href = ('../html/player.html')
        }
    }
    
    if(localStorage.champ == "player"){
        if(localStorage.difficulty == "easy") {
            localStorage.setItem("animationOfBlock", "1.5s")
            localStorage.setItem("animationOfJump", "700")
            location.href = ('../html/player.html')
        }
        else if(localStorage.difficulty == "meduim") {
            localStorage.setItem("animationOfBlock", "0.8s")
            localStorage.setItem("animationOfJump", "500")
            location.href = ('../html/player.html')
        }
        else if(localStorage.difficulty == "hard") {
            localStorage.setItem("animationOfBlock", "0.5s")
            localStorage.setItem("animationOfJump", "350")
            location.href = ('../html/player.html')
        }
    }

    if(localStorage.champ == "astronaut"){
        if(localStorage.difficulty == "easy") {
            localStorage.setItem("animationOfBlock", "1.5s")
            localStorage.setItem("animationOfJump", "700")
            location.href = ('../html/player.html')
        }
        else if(localStorage.difficulty == "meduim") {
            localStorage.setItem("animationOfBlock", "0.8s")
            localStorage.setItem("animationOfJump", "500")
            location.href = ('../html/player.html')
        }
        else if(localStorage.difficulty == "hard") {
            localStorage.setItem("animationOfBlock", "0.5s")
            localStorage.setItem("animationOfJump", "350")
            location.href = ('../html/player.html')
        }
    }

}
