// Set launch date here (YYYY-MM-DD format)
const launchDate = new Date("2025-06-01T00:00:00").getTime();

const updateCountdown = () => {
  const now = new Date().getTime();
  const timeLeft = launchDate - now;

  if (timeLeft < 0) return;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  document.getElementById("days").innerText = String(days).padStart(2, '0');
  document.getElementById("hours").innerText = String(hours).padStart(2, '0');
  document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
  document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');
};

setInterval(updateCountdown, 1000);
updateCountdown();
