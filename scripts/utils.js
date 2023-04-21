


function showLogin() {
  document.getElementById('login-container').style.display = 'block';
  document.getElementById('leftID').style.display = 'none';
  document.getElementById('rightID').style.display = 'none';
}


function showSignup() {
  document.getElementById('signup-container').style.display = 'block';
  document.getElementById('leftID').style.display = 'none';
  document.getElementById('rightID').style.display = 'none';

}

function showBackButton() {
  document.getElementById('backbutton').style.display = 'block';
}

function goBack() {
  document.getElementById('backbutton').style.display = 'none';
  document.getElementById('leftID').style.display = 'block';
  document.getElementById('rightID').style.display = 'block';
  document.getElementById('login-container').style.display = 'none';
  document.getElementById('signup-container').style.display = 'none';
}



function radioOnClick(button) {
  const originalImage = document.getElementById(button);
  const newImage = new Image();
  newImage.src = './assets/settings/button_selected.png';
    newImage.onload = function() {
      originalImage.src = newImage.src;
    };
}

function radioExclusive(button, div) {
  const myDivs = document.querySelectorAll(div);
  myDivs.forEach(function(div) {
    const images = div.querySelectorAll('img:not([id="' + button + '"])');
    images.forEach(function(image) {
      image.src = './assets/settings/button.png';
    });
  });
}



function oceanthemeOnClick() {
  const originalImage = document.getElementById("theme1");
  const newImage = new Image();
  newImage.src = './assets/settings/oceantheme_selected.png';
    newImage.onload = function() {
      originalImage.src = newImage.src;
    };
  const altImage = document.getElementById("theme2");
  const offImage = new Image();
  offImage.src = './assets/settings/pixeltheme.png';
  offImage.onload = function() {
    altImage.src = offImage.src;
  };
}


function pixelthemeOnClick() {
  const originalImage = document.getElementById("theme2");
  const newImage = new Image();
  newImage.src = './assets/settings/pixeltheme_selected.png';
    newImage.onload = function() {
      originalImage.src = newImage.src;
    };
  const altImage = document.getElementById("theme1");
  const offImage = new Image();
  offImage.src = './assets/settings/oceantheme.png';
  offImage.onload = function() {
    altImage.src = offImage.src;
  };
}

function acceptAndApply() {
  document.getElementById('settingscontainer').style.display = 'none';
}
function displaySettings() {
  document.getElementById('settingscontainer').style.display = 'flex';
}

//sounds
function playHoverSound() {
  var audio = document.getElementById("hoverAudio");
  audio.play();
  audio.volume = 0.05; // set volume to 50%
}

function playClickSound() {
  var audio = document.getElementById("clickAudio");
  audio.play();
  audio.volume = 0.05; // set volume to 50%
}

function restrictTimeoutInput() {
  var input = document.getElementById("timeoutform");
  var value = parseInt(input.value);
  if (value < 1 || value > 30 || isNaN(value)) {
    input.value = 15;
  }
}
