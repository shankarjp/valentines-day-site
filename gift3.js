/***********************
  💖 Our Love Map Pins
  With Dates + Popup
************************/

/* All Places */
const places = [
  {
    name: "Ooty, Tamil Nadu",
    lat: 11.21,
    lon: 76.5,
    date: "May 2024",
    img: "assets/ooty.jpeg",
    desc: "Love at first sight 💖",
  },
  {
    name: "Mysore, Karnataka",
    lat: 12.3,
    lon: 76.65,
    date: "July 2024",
    img: "assets/mysore.jpeg",
    desc: "First Trip ✨",
  },
  {
    name: "Bangalore, Karnataka",
    lat: 12.97,
    lon: 77.59,
    date: "Jan 2025",
    img: "assets/bangalore.jpeg",
    desc: "Home sweet home 💕",
  },
  {
    name: "Varkala, Kerala",
    lat: 8.73,
    lon: 76.41,
    date: "Nov 2024",
    img: "assets/varkala.jpeg",
    desc: "Juicy Cafe vibes 🌊",
  },
  {
    name: "Tumkur, Karnataka",
    lat: 13.34,
    lon: 77.1,
    date: "Jan 2025",
    img: "assets/tumkur.jpeg",
    desc: "New Year together ❤️",
  },
  {
    name: "Hampi, Karnataka",
    lat: 15.34,
    lon: 76.46,
    date: "Jan 2025",
    img: "assets/hampi.jpeg",
    desc: "OG Adventure Trip 🏛️",
  },
  {
    name: "Coorg, Karnataka",
    lat: 12.42,
    lon: 75.74,
    date: "Feb 2025",
    img: "assets/coorg.jpeg",
    desc: "Civet Coffee and Wine ☕🍷",
  },
  {
    name: "Udaipur, Rajasthan",
    lat: 25.0,
    lon: 72.78,
    date: "Mar 2025",
    img: "assets/udaipur.jpeg",
    desc: "City of lakes 💙",
  },
  {
    name: "Jaipur, Rajasthan",
    lat: 27.91,
    lon: 75.79,
    date: "Mar 2025",
    img: "assets/jaipur.jpeg",
    desc: "Pink city romance 🌸",
  },
  {
    name: "Agra, Uttar Pradesh",
    lat: 28.18,
    lon: 78.02,
    date: "Mar 2025",
    img: "assets/agra.jpeg",
    desc: "Taj Mahal 🤍",
  },
  {
    name: "Erode, Tamil Nadu",
    lat: 11.34,
    lon: 77.72,
    date: "Mar 2025",
    img: "assets/erode.jpeg",
    desc: "Sneaky Dates 💕",
  },
  {
    name: "Gokarna, Karnataka",
    lat: 14.25,
    lon: 73.72,
    date: "May 2025",
    img: "assets/gokarna.jpeg",
    desc: "Seafood and Sunsets 🌴",
  },
  {
    name: "Trichy, Tamil Nadu",
    lat: 10.79,
    lon: 78.7,
    date: "July 2025",
    img: "assets/trichy.jpeg",
    desc: "Our new home 🏠",
  },
  {
    name: "Swamimalai, Tamil Nadu",
    lat: 10.95,
    lon: 79.33,
    date: "Aug 2025",
    img: "assets/swamimalai.jpeg",
    desc: "Hertiage vacation 💫",
  },
  {
    name: "Madurai, Tamil Nadu",
    lat: 9.93,
    lon: 78.12,
    date: "Aug 2025",
    img: "assets/madurai.jpeg",
    desc: "Crab Omlete and Mutton Chops ftw 🍖",
  },
  {
    name: "Tranquebar, Tamil Nadu",
    lat: 11.03,
    lon: 79.95,
    date: "Sept 2025",
    img: "assets/tranquebar.jpeg",
    desc: "Seaside paradise 🌅",
  },
  {
    name: "Pondicherry, Tamil Nadu",
    lat: 11.94,
    lon: 80.2,
    date: "Oct 2025",
    img: "assets/pondicherry.jpeg",
    desc: "Matri Mandir fan club 🇫🇷",
  },
  {
    name: "Goa, Goa",
    lat: 15.49,
    lon: 73.12,
    date: "Dec 2025",
    img: "assets/goa.jpg",
    desc: "Hilton Honors 🌊",
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
   ✅ SVG Calibration Box
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

  let xNorm = (lon - geoBounds.west) / (geoBounds.east - geoBounds.west);
  let yNorm = (geoBounds.north - lat) / (geoBounds.north - geoBounds.south);

  let x = (indiaBox.left + xNorm * (indiaBox.right - indiaBox.left)) * width;
  let y = (indiaBox.top + yNorm * (indiaBox.bottom - indiaBox.top)) * height;

  return { x, y };
}

/***********************
   Create Pins
************************/
function loadPins() {
  pinsLayer.innerHTML = "";

  // Global shift
  const offsetX = -20;
  const offsetY = 30;

  places.forEach((place) => {
    const pin = document.createElement("div");
    pin.className = "pin";

    const pos = latLonToXY(place.lat, place.lon);

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
  document.getElementById("popup-date").innerText = place.date;
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
