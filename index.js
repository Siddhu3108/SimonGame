var gamePattern=[];
var userColor=[];
var colors=["yellow","red","blue","green"];

 pressKey();   

$("div .btn").click(function(){
    animateClick(this.id);
    userColor.push(this.id);
    if(this.id==gamePattern[userColor.length-1]){
        makeSound(this.id)
    }else{
        var a1=new Audio("sounds/wrong.mp3");
        a1.play();
        gameOver()
        $("#level-title").text("You Lose Try Again");
        setTimeout(function(){
            restartGame();
        },2000);
    }
    if(userColor.length==gamePattern.length){
        
        setTimeout(function(){
            gameSequence();
        },200);
    }
});
function makeSound(color){
    switch(color){
        case 'green':var a1=new Audio("sounds/green.mp3");
        a1.play();
        break;
        case 'blue':var a1=new Audio("sounds/blue.mp3");
        a1.play();
        break;
        case 'red':var a1=new Audio("sounds/red.mp3");
        a1.play();
        break;
        case 'yellow':var a1=new Audio("sounds/yellow.mp3");
        a1.play();
        break;
    }
}
function gameSequence(){
    var randomNumber=Math.floor(Math.random()*4);
    var chosenColor=colors[randomNumber];
    $("#level-title").text(`Level ${gamePattern.length+1}`);
    gamePattern.push(chosenColor);
    $("#"+chosenColor).animate({opacity:0}).animate({opacity:1});
    //$("#"+chosenColor).addClass("")
    makeSound(chosenColor);
    userColor=[];
}
function checkClick(){
        for (var i = 0; i < a.length; i++)
            if (a[i] != b[i])
                return False;
        return True;
}
function restartGame(){
    gamePattern=[];
    userColor=[];
    $("#level-title").text("Press A Key to Start");
    pressKey();
}
function pressKey(){
    $(document).keypress(function(){
        if(gamePattern.length===0){
        gameSequence();
        }
    });
}
function animateClick(color){
    $("#"+color).addClass("pressed");
    setTimeout(function(){
        $("#"+color).removeClass("pressed");
    },100);
}
function gameOver(){
    $("body").addClass("game-over");
    setTimeout(function(){
        $("body").removeClass("game-over");
    },100);
}