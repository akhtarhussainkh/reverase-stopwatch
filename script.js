function startCountdown(totalSeconds) {
  clearInterval(timer);
  let seconds = totalSeconds;

  const display = document.getElementById('display');
  display.style.border = '2px solid #27ae60'; // Dark green border
  display.style.padding = '10px';
  display.style.borderRadius = '5px';
  display.style.color = '#27ae60'; // Dark green color
  display.style.backgroundColor = '#f0f0f0'; // Light gray background

  timer = setInterval(() => {
    if (seconds <= 0) {
      clearInterval(timer);
      display.innerText = 'Countdown Complete!';
      return;
    }

    const hours = Math.floor(seconds / 3600);
    const remainingSeconds = seconds % 3600;
    const minutes = Math.floor(remainingSeconds / 60);
    const displaySeconds = remainingSeconds % 60;

    display.innerText = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${displaySeconds < 10 ? '0' : ''}${displaySeconds}`;

    seconds--;
  }, 1000);

  isRunning = true;
}
