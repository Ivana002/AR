var editable = document.getElementById("editable");
editable.focus();

editable.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    var inputValue = editable.innerText.trim().toUpperCase();
    switch (inputValue) {
      case "WATER":
        window.location.href = "water.html";
        break;
      case "EYE":
        window.location.href = "eye.html";
        break;
      case "SPACE":
        window.location.href = "space.html";
        break;
      default:
        break;
    }
  }
});

function closePopup() {
  var popup = document.querySelector('.popup');
  popup.classList.remove('visible');
  document.body.classList.remove('blur');
}

window.onload = function() {
  var popup = document.querySelector('.popup');
  popup.classList.add('visible');
  document.body.classList.add('blur');
};