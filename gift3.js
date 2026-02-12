/***********************
  💖 Our Love Map Pins
  Fixed + Calibrated
************************/

/* All Places */
const places = [
  {
    name: "Ooty, Tamil Nadu",
    lat: 11.21,
    lon: 76.5,
    img: "assets/ooty.jpeg",
    desc: "Hill station magic 💕",
  },
  {
    name: "Mysore, Karnataka",
    lat: 12.3,
    lon: 76.65,
    img: "assets/mysore.jpeg",
    desc: "Palaces & peace ✨",
  },
  {
    name: "Bangalore, Karnataka",
    lat: 12.97,
    lon: 77.59,
    img: "assets/bangalore.jpeg",
    desc: "Where everything began 💖",
  },
  {
    name: "Varkala, Kerala",
    lat: 8.73,
    lon: 76.41,
    img: "assets/varkala.jpeg",
    desc: "Cliff beaches forever 🌊",
  },
  {
    name: "Tumkur, Karnataka",
    lat: 13.34,
    lon: 77.1,
    img: "assets/tumkur.jpeg",
    desc: "Sweet memories ❤️",
  },
  {
    name: "Hampi, Karnataka",
    lat: 15.34,
    lon: 76.46,
    img: "assets/hampi.jpeg",
    desc: "History + us 🏛️",
  },
  {
    name: "Coorg, Karnataka",
    lat: 12.42,
    lon: 75.74,
    img: "assets/coorg.jpeg",
    desc: "Coffee hills ☕💗",
  },
  {
    name: "Udaipur, Rajasthan",
    lat: 25.0,
    lon: 72.78,
    img: "assets/udaipur.jpeg",
    desc: "City of lakes 💙",
  },
  {
    name: "Jaipur, Rajasthan",
    lat: 27.91,
    lon: 75.79,
    img: "assets/jaipur.jpeg",
    desc: "Pink city romance 🌸",
  },
  {
    name: "Agra, Uttar Pradesh",
    lat: 28.18,
    lon: 78.02,
    img: "assets/agra.jpeg",
    desc: "Taj Mahal vibes 🤍",
  },
  {
    name: "Erode, Tamil Nadu",
    lat: 11.34,
    lon: 77.72,
    img: "assets/erode.jpeg",
    desc: "Hometown warmth 💕",
  },
  {
    name: "Gokarna, Karnataka",
    lat: 14.25,
    lon: 73.72,
    img: "assets/gokarna.jpeg",
    desc: "Quiet beach paradise 🌴",
  },
  {
    name: "Trichy, Tamil Nadu",
    lat: 10.79,
    lon: 78.7,
    img: "assets/trichy.jpeg",
    desc: "Temple city magic 🛕",
  },
  {
    name: "Swamimalai, Tamil Nadu",
    lat: 10.95,
    lon: 79.33,
    img: "assets/swamimalai.jpeg",
    desc: "Sacred memories 💫",
  },
  {
    name: "Madurai, Tamil Nadu",
    lat: 9.93,
    lon: 78.12,
    img: "assets/madurai.jpg",
    desc: "City of jasmine 🌺",
  },
  {
    name: "Tranquebar, Tamil Nadu",
    lat: 11.03,
    lon: 79.95,
    img: "assets/tranquebar.jpeg",
    desc: "Seaside peace 🌅",
  },
  {
    name: "Pondicherry, Tamil Nadu",
    lat: 11.94,
    lon: 80.2,
    img: "assets/pondicherry.jpeg",
    desc: "French love vibes 🇫🇷",
  },
  {
    name: "Goa, Goa",
    lat: 15.49,
    lon: 73.12,
    img: "assets/goa.jpg",
    desc: "Beach love forever 🌊",
  },
];

/***********************
   🌍 India Geo Bounds
************************/
const geoBounds = {
  north: 37,
  south: 6,
  west: 68,
  east: 97,
};

/***********************
   ✅ SVG Calibration Fix
   (India occupies center of SVG)
************************/
const indiaBox = {
  left: 0.18,
  right: 0.82,
  top: 0.08,
  bottom: 0.92,
};

/***********************
   Elements
************************/
const map = document.getElementById("india-map");
const pinsLayer = document.getElementById("pins-layer");

/***********************
   Convert Lat/Lon → X/Y
************************/
function latLonToXY(lat, lon) {
  const width = map.clientWidth;
  const height = map.clientHeight;

  // Normalize longitude (0 → 1)
  let xNorm = (lon - geoBounds.west) / (geoBounds.east - geoBounds.west);

  // Normalize latitude (0 → 1)
  let yNorm = (geoBounds.north - lat) / (geoBounds.north - geoBounds.south);

  // Apply calibration box
  let x = (indiaBox.left + xNorm * (indiaBox.right - indiaBox.left)) * width;

  let y = (indiaBox.top + yNorm * (indiaBox.bottom - indiaBox.top)) * height;

  return { x, y };
}

/***********************
   Create Pins
************************/
function loadPins() {
  pinsLayer.innerHTML = "";

  // Global shift for all pins
  const offsetX = -20; // LEFT
  const offsetY = 30; // DOWN

  places.forEach((place) => {
    const pin = document.createElement("div");
    pin.className = "pin";

    const pos = latLonToXY(place.lat, place.lon);

    // Apply global offset
    pin.style.left = `${pos.x + offsetX}px`;
    pin.style.top = `${pos.y + offsetY}px`;

    pin.onclick = () => showPopup(place);

    pinsLayer.appendChild(pin);
  });
}

/***********************
   Popup Functions
************************/
function showPopup(place) {
  document.getElementById("popup").classList.remove("hidden");

  document.getElementById("popup-title").innerText = place.name;
  document.getElementById("popup-desc").innerText = place.desc;
  document.getElementById("popup-img").src = place.img;
}

function closePopup() {
  document.getElementById("popup").classList.add("hidden");
}

/***********************
   Load Pins After Map Loads
************************/
window.onload = () => {
  loadPins();
};
