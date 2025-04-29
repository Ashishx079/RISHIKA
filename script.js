const messages = [
    "Every moment with you is a treasure. ❤️",
    "You're the reason my heart beats with joy. 💖",
    "I fall in love with you more each day. 💌",
    "You light up my world like nobody else. ✨",
    "With you, every day feels like a fairy tale. 🌹",
    "Aur Return Gift Mai Thoda Time De Plese"
  ];
  
  function showLove() {
    const msg = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById("message").innerText = msg;
  }
  
  