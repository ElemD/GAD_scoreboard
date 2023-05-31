var countdown = null; // Declare a global variable to hold the interval ID

function startTimer(duration, displayElementId) {
  if (countdown) {
    return; // Return early if countdown is already running
  }

  var timer = duration;
  var displayElement = document.getElementById(displayElementId);

  countdown = setInterval(function() {
    displayElement.textContent = timer;

    timer--;

    if (timer < 0) {
      clearInterval(countdown);
      displayElement.textContent = "UP";
      displayElement.style.color = "red";
      countdown = null; // Reset the countdown variable
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(countdown);
  countdown = null; // Reset the countdown variable
}
