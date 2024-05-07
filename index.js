var numberOfDrumButtons = document.querySelectorAll(".drum").length;
//detects button click
for (var i = 0; i<numberOfDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        /*document.querySelector("."+this.innerHTML).style.color = "white";*/
        var buttonInnerHTML = this.innerHTML;
        
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
});
}


//detects keyboard press
document.addEventListener("keydown",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
})



function makeSound(key){

    switch (key) {
        case "w":
            var tom1 = new Audio("./sounds/dekujudekujubymujeblo.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("./sounds/stacitak.mp3");
            tom2.play();
            break
        case "s":
            var tom3 = new Audio("./sounds/dobrepodivamse.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("./sounds/jetotvojenebocomore.mp3");
            tom4.play();
            break
        case "j":
            var crash = new Audio("./sounds/neumimprecistcotampise.mp3");
            crash.play();
            break
        case "k":
            var kick = new Audio("./sounds/vitosnoo.mp3");
            kick.play();
            break
        case "l":
            var snare = new Audio("./sounds/uztitojdeposlatpry.mp3");
            snare.play();
            break

        default:
            break;
    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("."+currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 200);

}

/*function handleClick() {
    alert("i got clicked");
}*/

/*var audio = new Audio("./sounds/tom-1.mp3");
        audio.play();*/