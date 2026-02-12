function showPopup(place, date, desc, img) {
  document.getElementById("popup").style.display = "block";
  document.getElementById("place").innerText = place;
  document.getElementById("date").innerText = date;
  document.getElementById("desc").innerText = desc;
  document.getElementById("photo").src = img;
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}
