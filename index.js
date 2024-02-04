const noBtn = document.querySelector('.no-btn');
const yesBtn = document.querySelector('.yes-btn');

if (noBtn) {
  noBtn.addEventListener('click', change);
}

if (yesBtn) {
  yesBtn.addEventListener('click', accepted);
}

// Functions

function accepted() {
  location.href = './accepted.html';
}

function change() {
  var i = Math.floor(Math.random() * 50) + 1;
  var j = Math.floor(Math.random() * 300) + 1;
  noBtn.style.left = i + 'px';
  noBtn.style.top = j + 'px';
}
