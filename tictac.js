function winCheckFun(){
    for(let i = 0; i < winCombo.length; i++){
        // console.log(winCombo[i],"=>");
        if(boxAll[winCombo[i][0]].innerText != '' && boxAll[winCombo[i][1]].innerText != '' && boxAll[winCombo[i][2]].innerText != ''){
            // console.log('inside 1st if');
            if(boxAll[winCombo[i][0]].innerText == boxAll[winCombo[i][1]].innerText && boxAll[winCombo[i][1]].innerText == boxAll[winCombo[i][2]].innerText){
                winStat = 1;
                showMsg.innerText = `🎊🎉 Congratulations! Player ${boxAll[winCombo[i][0]].innerText} is Winner 🎉🎊\nPress 'Reset' to start new game.`;
                disableFunc();
            }
        }
    }
}
function disableFunc(){
    for(let i = 0; i< boxAll.length; i++){
        boxAll[i].disabled= true;
    }
}

function drawCheck(){
    if(btnClickedCou == 9 && winStat == 0){
        showMsg.innerText = `Ohh! It's a draw.\nPress 'Reset' to start new game.`;
        disableFunc();
    }
}


let boxAll = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#reset-btn');
let showMsg = document.querySelector('.showMsg');
let turnO = 1;
let btnClickedCou = 0;
let winStat = 0;
let winCombo = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
for (let i = 0; i<9; i++){
    boxAll[i].addEventListener('click',turnFunc);
    function turnFunc(){
        if(turnO == 1){
            // console.log('O');
            boxAll[i].innerText = 'O'
            boxAll[i].disabled = true;
            turnO = 0;
            winCheckFun();
        } else if (turnO == 0){
            // console.log('X');
            boxAll[i].innerText = 'X'
            boxAll[i].disabled = true;
            turnO = 1;
            winCheckFun();
        }
        btnClickedCou++;
        drawCheck();
    }
    }
resetBtn.addEventListener('click',resetGameFunc);
function resetGameFunc(){
    for(let i=0; i<9; i++){
        boxAll[i].innerText = '';
        boxAll[i].disabled = false;
        turnO = 1
        showMsg.innerText = '';
        btnClickedCou = 0;
        winStat = 0;
    }
}
