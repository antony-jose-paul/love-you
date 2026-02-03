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
const firebaseConfig = {
  apiKey: "AIzaSyBf3ijy9U4ZIIyGWvMrwI0ZO0w7U2HC3gM",
  authDomain: "proposal-cbd7b.firebaseapp.com",
  databaseURL: "https://proposal-cbd7b-default-rtdb.firebaseio.com",
  projectId: "proposal-cbd7b",
  storageBucket: "proposal-cbd7b.appspot.com",
  messagingSenderId: "339849348382",
  appId: "1:339849348382:web:a45edee31fc17069f2f50f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Send "YES" to database
database.ref('responses/').push({
  status: "She said YES!",
  page: "yes.html",
  timestamp: new Date().toString(),
  userAgent: navigator.userAgent
}).then(() => {
  console.log("❤️");
}).catch((error) => {
  console.error("Database error: ", error);
});