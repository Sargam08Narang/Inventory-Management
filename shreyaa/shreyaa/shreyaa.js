const exitPopup = document.querySelector('.exit-popup');
const exitPopupCloseBtn = document.querySelector('.exit-popup-close-btn');

function showExitPopup() {
  exitPopup.style.display = 'block';
}

function hideExitPopup() {
  exitPopup.style.display = 'none';
}

document.addEventListener('mouseleave', function(e) {
  if (e.clientY < 0) {
    showExitPopup();
  }
});

exitPopupCloseBtn.addEventListener('click', function() {
  hideExitPopup();
});
