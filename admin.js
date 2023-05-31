var value = 1;


function upRound() {
  value++;
  document.getElementById("round").textContent = value;
  title();
  resetPoint();
}
function downRound() {
  value--;
  document.getElementById("round").textContent = value;
  title();
}
function incrPoint(elementid) {
  value = parseInt(document.getElementById(elementid).textContent);
  value++;
  document.getElementById(elementid).textContent = value;
}
function decrPoint(elementid) {
  value = parseInt(document.getElementById(elementid).textContent);
  value--;
  document.getElementById(elementid).textContent = value;
}


function title(){
    document.getElementById("round").textContent = value;
    switch (value) {
        case 1:
            document.getElementById("title").textContent = "SUPERNOVA";
          break;
        case 2:
            document.getElementById("title").textContent = "RAPID FIRE";
          break;
        case 3:
            document.getElementById("title").textContent = "SUDOKU";
          break;
        case 4:
            document.getElementById("title").textContent = "WORD PROBLEM";
          break;
        case 5:
            document.getElementById("title").textContent = "VISUAL ROUND";
          break;
        case 6:
            document.getElementById("title").textContent = "PROBLEM SOLVING";
          break;
        case 7:
            document.getElementById("title").textContent = "BUZZER";
          break;
        default:
            document.getElementById("title").textContent = " ";
          break;
      }
}

function point(point,elementid){
    score = parseInt(document.getElementById(elementid).textContent);
    document.getElementById(elementid).textContent = score + parseInt(point);
}

function resetPoint(){
    document.getElementById("g1").textContent = 00;
    document.getElementById("g2").textContent = 00;
    document.getElementById("g3").textContent = 00;
    document.getElementById("g4").textContent = 00;
}


