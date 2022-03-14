const cells = document.querySelectorAll(".cell");
const rows = document.querySelectorAll(".row");
const p = document.querySelector("p");
const container = document.querySelector(".container");
const replay = document.createElement("button");
replay.textContent = "다시시작하기"
container.appendChild(replay);
replay.hidden = true;


let isTrue = true;
let count = 0;
let	play = ["","","","","","","","",""];


function reset(){
	p.textContent = "";
	replay.hidden = true;
	isTrue = true;
	count = 0;
	play = ["","","","","","","","",""];
	for(let i=0; i<cells.length; i++){
		cells[i].textContent = "";
	}
}

function start() {
	for(let i=0; i<cells.length; i++){
		cells[i].addEventListener("click", function() {
			if(cells[i].textContent === "O" || cells[i].textContent === "X"){
			}else {
				if(isTrue){
					play[i] = "O"
					cells[i].textContent = play[i]
					isTrue = false;
					count++;
				} else {
					play[i] = "X"
					cells[i].textContent = play[i]
					isTrue = true;
					count++;
				}
			}
			for(let i=0; i<play.length; i++){
				if(i === 0 || i === 3 || i === 6) { //가로
					if(play[i] !== "" && play[i] === play[i+1] && play[i+1] === play[i+2]){
						p.textContent = `끝 ${play[i]}의 승리`;
						replay.hidden = false;
					}
				}else if(i === 0 || i === 1 || i === 2){ //세로
					if(play[i] !== "" && play[i] === play[i+3] && play[i+3] === play[i+6]){
						p.textContent = `끝 ${play[i]}의 승리`;
						replay.hidden = false;
					}
				}else if(play[0] !== "" && play[0]=== play[4] && play[4] === play[8]){ //대각선
					p.textContent = `끝 ${play[0]}의 승리`;
					replay.hidden = false;
				}else if(play[2] !== "" && play[2]=== play[4] && play[4] === play[6]){
					p.textContent = `끝 ${play[2]}의 승리`;
					replay.hidden = false;
				}
			}
		})
	}
}

start();
replay.addEventListener("click", function() {
	reset();
	start();
})

