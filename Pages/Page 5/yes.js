const container = document.querySelector(".container");
for (var i = 1; i <= 100; i++) {
  const hearts = document.createElement("div");
  hearts.classList.add("heart");
  container.appendChild(hearts);
}

function animateHearts() {
  anime({
    targets: ".heart",
    translateX: function () {
      return anime.random(-700, 700);
    },
    translateY: function () {
      return anime.random(-500, 500);
    },
    rotate: 45,
    scale: function () {
      return anime.random(1, 5);
    },
    easing: "easeInOutBack",
    duration: 1000,
    delay: anime.stagger(10),
    complete: animateHearts,
  });
}

animateHearts();

// --- DATABASE INTEGRATION ---
// 1. Go to Firebase Console -> Project Settings -> Add Web App
// 2. Copy your config object and replace the one below
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT_ID-default-rtdb.firebaseio.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
if (firebaseConfig.apiKey !== "YOUR_API_KEY") {
  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();

  // Send "YES" to database
  database.ref('responses/').push({
    status: "She said YES!",
    page: "yes.html",
    timestamp: new Date().toString(),
    userAgent: navigator.userAgent
  }).then(() => {
    console.log("Response saved to database! ❤️");
  }).catch((error) => {
    console.error("Database error: ", error);
  });
} else {
  console.warn("Firebase not configured. Please add your config in yes.js");
}