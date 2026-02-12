const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

// Move "No" button away smoothly when hovered
noBtn.addEventListener("mouseenter", () => {
  const x = Math.floor(Math.random() * 300) - 150;
  const y = Math.floor(Math.random() * 200) - 100;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

// Redirect to a new page when "Yes" is clicked
yesBtn.addEventListener("click", () => {
  window.location.href = "yes.html";
});
