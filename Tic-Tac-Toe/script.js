

let boxes = document.querySelectorAll('.box');
let reset = document.querySelector('#reset');

let newGamebtn = document.querySelector('#play-again');


let msgContainer = document.querySelector('.msg-container'); 

let msg = document.querySelector('#msg');


let turn = true; // true = O, false = X
let count = 0;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  turn = true;
  count = 0;
  enableboxes();
  msgContainer.classList.add('hide');
};

boxes.forEach((box) => {
  box.addEventListener('click', () => {
    if(turn){
      box.innerText = 'O';
      turn = false;

    }else{
      box.innerText = 'X';
      turn = true;
    }
    box.disabled = true;
    count++;
    let isWinner = checkWinner();
    if(count === 9 && !isWinner){
      gameDraw();
    }
  });
});
const gameDraw = () => {
  msg.innerText = 'Game Draw';
  msgContainer.classList.remove('hide');
  disableboxes();
}
const disableboxes = () => {
  for(let box of boxes){
    box.disabled = true;
  }
};

const enableboxes = () => {
  for(let box of boxes){
    box.disabled = false;
    box.innerText = '';
  }
};



const showWinner = (winner) => {
  msg.innerText= `Congratulation , Winner is ${winner}`;
  msgContainer.classList.remove('hide');
  disableboxes();
};
const checkWinner = () => {
  for(let pattern of winPatterns){
    const box1 = boxes[pattern[0]].innerText;
    const box2 = boxes[pattern[1]].innerText;
    const box3 = boxes[pattern[2]].innerText;
    if(box1 !== '' && box1 === box2 && box2 === box3){
      if(box1 == box2 && box2 == box3){
        console.log('winner',box1);
        showWinner(box1);
        return true;
      }
    }
  }
}

newGamebtn.addEventListener('click', () => {
  resetGame();
}
);
reset.addEventListener('click', () => {
  resetGame();
});

