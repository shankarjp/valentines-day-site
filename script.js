const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

// Move "No" button away when hovered
noBtn.addEventListener("mouseenter", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 100 - 50;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

// Redirect when "Yes" is clicked
yesBtn.addEventListener("click", () => {
  window.location.href = "yes.html";
});
