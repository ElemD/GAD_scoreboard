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

function title(){
    document.getElementById("round").textContent = value;
    switch (value) {
        case 1:
            document.getElementById("title").textContent = "SUPERNOVA";
          break;
        case 2:
            document.getElementById("title").textContent = "BUZZER";
          break;
        case 3:
            document.getElementById("title").textContent = "WORD PROBLEM";
          break;
        case 4:
            document.getElementById("title").textContent = "RAPID FIRE";
          break;
        case 5:
            document.getElementById("title").textContent = "VISUAL ROUND";
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


