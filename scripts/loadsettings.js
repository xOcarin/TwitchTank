let globalSettings = {};

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

readSettings()
  .then(settings => {
    // Call the functions that need the settings variables
    setSizeImg(settings);
    setCounterImg(settings);
  })
  .catch(err => {
    console.error(err);
  });
