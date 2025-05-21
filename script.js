// Countdown Timer (2 Days)
const countdown = () => {
  const launchDate = new Date().getTime() + (2 * 24 * 60 * 60 * 1000); // 2 days from now
  const now = new Date().getTime();
  const gap = launchDate - now;

  const days = Math.floor(gap / (1000 * 60 * 60 * 24));
  const hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  document.getElementById("countdown").innerHTML = `${days}d ${hours}h`;
};

setInterval(countdown, 1000);

// Fake Wallet Connection (for fun)
document.querySelector(".connect-wallet").addEventListener("click", () => {
  alert("🚀 Wallet Connected! (Just kidding, this is a mockup)");
});