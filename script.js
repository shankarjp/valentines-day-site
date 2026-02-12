const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

// Move "No" button away when hovered
noBtn.addEventListener("mouseenter", () => {
  const x = Math.random() * 250 - 125;
  const y = Math.random() * 150 - 75;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

// Redirect when "Yes" is clicked
yesBtn.addEventListener("click", () => {
  window.location.href = "yes.html";
});
