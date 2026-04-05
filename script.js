document.getElementById("face").style.filter = "hue-rotate(20deg)";
  alert(color + " lipstick applied 💄");
}

function applyBlush() {
  document.getElementById("face").style.filter = "brightness(1.2)";
  alert("Blush applied 😊");
}

function resetMakeup() {
  document.getElementById("face").style.filter = "none";
  alert("Makeup reset 🔄");
}
