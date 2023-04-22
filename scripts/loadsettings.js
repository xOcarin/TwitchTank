let globalSettings = {};


function readStreamerName(filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

readStreamerName('streamername.txt')
  .then((data) => {
    console.log(`File contents: ${data}`);
    document.getElementById('twitchname').value = data;
  })
  .catch((err) => {
    console.error(err);
  });





function readSettings() {
  return new Promise((resolve, reject) => {
    fs.readFile('settings.json', 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        const settings = JSON.parse(data);
        globalSettings.size = settings.size;
        globalSettings.counterstate = settings.counterstate;
        globalSettings.timeout = settings.timeout;
        globalSettings.theme = settings.theme;
        globalSettings.streamername = settings.streamername;
        console.log("hello: " + globalSettings.streamername);
        resolve(settings);
      }
    });
  });
}

function setSizeImg(settings) {
  // Use the settings variables
  let x = settings.size;
  const s = document.getElementById("small");
  const m = document.getElementById("medium");
  const l = document.getElementById("large");


  const sizeselected = new Image();
  sizeselected.src = './assets/settings/button_selected.png';

  if(x == 1){
    console.log(x);
      sizeselected.onload = function() {
        s.src = sizeselected.src;
      };
  }else if (x == 2) {
    console.log(x);
      sizeselected.onload = function() {
       m.src = sizeselected.src;
      };
  }else if (x == 3) {
    console.log(x);
      sizeselected.onload = function() {
       l.src = sizeselected.src;
      };
  }
}

function setCounterImg(settings) {
  let x = settings.counterstate;
  const on = document.getElementById("on");
  const off = document.getElementById("off");
  console.log("heredasdasd" + x);

  const newImage = new Image();
  newImage.src = './assets/settings/button_selected.png';

  if(x == false){
      newImage.onload = function() {
        off.src = newImage.src;
      };
  }else if (x == true) {
    console.log(x);
      newImage.onload = function() {
       on.src = newImage.src;
      };
    }
}

function setTheme(settings) {

  let x = settings.theme;
  console.log("THE THEME SHOULD BE: " + x);
  const canvas = document.getElementById('canvas');
  if(settings.theme == 1){
    canvas.style.backgroundImage = 'url(./assets/bg/realbg.png)';

  }else{
    canvas.style.backgroundImage = 'url(./assets/bg/pixelbg.png)';

  }
}

function setThemeImg(settings) {
  // Use the settings variables
  let x = settings.theme;
  const theme1 = document.getElementById("theme1");
  const theme2 = document.getElementById("theme2");


  const theme1selected = new Image();
  theme1selected.src = './assets/settings/oceantheme_selected.png';
  const theme2selected = new Image();
  theme2selected.src = './assets/settings/pixeltheme_selected.png';

  console.log("THIS ONE: " + x);
  if(x == 1){
    console.log("here: " + x);
      theme1selected.onload = function() {
        theme1.src = theme1selected.src;
      };
  }else if (x == 2) {
    console.log("hered: " + x);
      theme2selected.onload = function() {
         theme2.src = theme2selected.src;
      };
  }
}


function setTimeoutValue(settings) {
  let x = settings.timeout;
  document.getElementById('timeoutform').value = x;

}

function setCounter(settings) {
  let x = settings.counterstate;
  console.log("whats the settings:" + x);
  if(x == false){
    console.log("MADE IT" + x);
    document.getElementById('counter').style.display = 'none';
  }else{
    document.getElementById('counter').style.position = 'flex';
  }
}

readSettings()
  .then(settings => {
    // Call the functions that need the settings variables
    setSizeImg(settings);
    setCounterImg(settings);
    setTheme(settings);
    setThemeImg(settings);
    setTimeoutValue(settings);
    setCounter(settings);
  })
  .catch(err => {
    console.error(err);
  });
