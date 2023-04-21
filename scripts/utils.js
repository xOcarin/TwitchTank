const { app } = require('electron');

const fs = require('fs');

// Set the values of the settings variables
let settings_size = 1;
let settings_counterstate = true;
let settings_timeout = 15;
let settings_theme = 1;
let settings_streamername;

// Create an object with the settings variables
let settings = {
  size: settings_size,
  counterstate: settings_counterstate,
  timeout: settings_timeout,
  theme: settings_theme,
  streamername: settings_streamername
};





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
switch (button) {
  case "small":
    settings_size = 1;
    break;
  case "medium":
    settings_size = 2;
    break;
  case "large":
    settings_size = 3;
    break;
  case "off":
    settings_counterstate = false;
    break;
  case "on":
    settings_counterstate = true;
    break;
  default:

}


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
  settings_theme = 1;
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
  settings_theme = 2;
}

function acceptAndApply() {
  document.getElementById('settingscontainer').style.display = 'none';
  // Create an object with the settings variables

  console.log("size:" + settings_size);
  console.log("counter:" + settings_counterstate);
  console.log("theme:" + settings_theme);
  console.log("timeout:" + settings_timeout);
  settings.size = settings_size;
  settings.counterstate = settings_counterstate;
  settings.theme = settings_theme;
  settings.timeout = settings_timeout
  const settingsJSON = JSON.stringify(settings);

  // Write the JSON string to a file named "settings.json"
  fs.writeFile('settings.json', settingsJSON, (err) => {
    if (err) throw err;
    console.log('Settings saved to file');
  });

  document.body.classList.add('fade-out');

  // Wait for the fade-out transition to finish before reloading the page
  setTimeout(function() {
    // Reload the page after a short delay
    setTimeout(function() {
      location.reload();
    }, 500); // wait 500ms (0.5s) before reloading
  }, 500); // wait 500ms (0.5s) for the fade-out transition to finish

}



function displaySettings() {
  document.getElementById('settingscontainer').style.display = 'flex';
}


function resizeInput() {
  var input = document.getElementById('twitchname');
  input.style.width = ((input.value.length + 4) * 8) + 'px';
}



function validateInput() {
  var input = document.getElementById('twitchname');
  var value = input.value.trim();
  console.log("here:             " + value);
  settings.streamername = value;
  if (value === '') {
    input.value = 'Enter streamer name here';
    input.style.width = ((input.value.length + 4) * 8) + 'px';
  }else{
    fs.writeFile('streamername.txt', settings.streamername, (err) => {
      if (err) throw err;
        console.log('Streamer name saved to file');
      });
      setTimeout(function() {
        // Reload the page after a short delay
        setTimeout(function() {
          location.reload();
        }, 500); // wait 500ms (0.5s) before reloading
      }, 500); // wait 500ms (0.5s) for the fade-out transition to finish
  }

}

//enterkey for input
function handleKeyDown(event) {
  if (event.key === 'Enter') {
    event.target.blur();
  }
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
