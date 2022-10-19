let saveBtn = document.querySelector("#save");
let resetBtn = document.querySelector("#reset");
let colorBall = document.querySelector("#ballColor")
// let boxX = document.getElementById("boxWidth").value;
// let boxy = document.getElementById("boxHeight").value;
// let ballXY = document.getElementById("ballWidthAndHeight").value;
let ball = document.querySelector('.ball');
let box = document.querySelector('.box');
let step = document.getElementById("step").value;


saveBtn.addEventListener('click',function(){
    
})

resetBtn.addEventListener('click',function(){
    resetBall()
})
resetBall()
function resetBall(){
   ball.style.left = (box.clientWidth - ball.clientWidth) / 2 + 'px';
   ball.style.top = (box.clientHeight - ball.clientHeight) / 2 + 'px';
}
document.body.addEventListener('keydown',e=>{
    if(e.key == 'ArrowUp'){
        if(parseInt(ball.style.top ) > 0){

            ball.style.top = parseInt(ball.style.top) - Number(step) + 'px'
        }
        
    }
    else if(e.key == 'ArrowDown'){
        if(parseInt(ball.style.top) < box.clientHeight - ball.clientHeight){

            ball.style.top = parseInt(ball.style.top) + Number(step) + 'px'
        }
    }
    else if(e.key == 'ArrowLeft'){
        if(parseInt(ball.style.left) > 0){

            ball.style.left = parseInt(ball.style.left) - Number(step) + 'px'
        }
    }
    else if(e.key == 'ArrowRight'){
        if(parseInt(ball.style.left) < box.clientWidth - ball.clientWidth){
            ball.style.left = parseInt(ball.style.left) + Number(step) + 'px'
        }
    }
})