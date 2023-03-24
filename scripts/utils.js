function playWoodSound() {
  var audio = document.getElementById("oarbuttons");
  audio.play();
}

function playSplashSound() {
  var audio = document.getElementById("splash");
  audio.play();
}


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
