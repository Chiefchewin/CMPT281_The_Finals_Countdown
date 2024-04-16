// Maquinna Pley
// EDJ324
// 11316131

//calculate and update the countdown
function updateCountdown() {
  // Getting the current time and event time
  const currentTime = new Date();
  const eventTime = new Date('December 9, 2023 00:01:00 GMT-0600'); // Saskatchewan time

  // Calculating the remaining time until the event
  const remainingTime = eventTime - currentTime;

  // Deriving the individual time units
  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  // Updating the HTML elements with the calculated time
  document.getElementById('days').textContent = days;
  document.getElementById('hours').textContent = hours;
  document.getElementById('minutes').textContent = minutes;
  document.getElementById('seconds').textContent = seconds;

  // Check if the countdown is over
  if (remainingTime < 0) {
      clearInterval(intervalHandle);
      document.getElementById('countdown').innerHTML = "<p>FINALS HAVE STARTED GOOD LUCK!</p>";
  }
}

// Commenting function calls as per requirements
updateCountdown(); // Initial update to populate the fields

// Update the countdown every second
const intervalHandle = setInterval(updateCountdown, 1000);