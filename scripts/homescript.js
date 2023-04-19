let counter = 0;
    class Fish {
      constructor(x, y, width, height, speed, name, type) {
        this.image = new Image();
        this.imageR = new Image();
        this.imageL = new Image();
        this.image.src;
        this.imageR.src;
        this.imageL.src;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.checkH = false;
        this.checkV = false;
        this.numFrames;
        this.frameWidth;
        this.frameHeight;
        this.spriteSheetX = 0;
        this.spriteSheetY = 0;
        this.currentFrame = 0;
        this.animationSpeed = 15;
        this.lastFrameTime = 0;
        this.name = name;
        this.type = type;
        this.isAlive = true;
        this.deathx = 0;
        this.deathy = 0;
        this.swaydistance = -1;
        this.swayspeed = 0;
      }



      animate() {
        const currentTime = Date.now();
        const deltaTime = currentTime - this.lastFrameTime;

        switch (this.type) {
          case "1":
            this.imageL.src = 'assets/fish/angelL.png';
            this.imageR.src = 'assets/fish/angelR.png';
            this.numFrames = 26;
            this.frameWidth = 200;
            this.frameHeight = 200;
            break;
          case "2":
            this.imageL.src = 'assets/fish/batL.png';
            this.imageR.src = 'assets/fish/batR.png';
            this.numFrames = 26;
            this.frameWidth = 200;
            this.frameHeight = 200;
            break;
          case "3":
            this.imageL.src = 'assets/fish/longnoseL.png';
            this.imageR.src = 'assets/fish/longnoseR.png';
            this.numFrames = 26;
            this.frameWidth = 200;
            this.frameHeight = 200;
            break;
          case "4":
            this.imageL.src = 'assets/fish/unicornL.png';
            this.imageR.src = 'assets/fish/unicornR.png';
            this.numFrames = 26;
            this.frameWidth = 200;
            this.frameHeight = 200;
            break;
          case "5":
            this.imageL.src = 'assets/fish/angelL.png';
            this.imageR.src = 'assets/fish/angelR.png';
            this.numFrames = 26;
            this.frameWidth = 200;
            this.frameHeight = 200;
            break;
          case "6":
            this.imageL.src = 'assets/fish/Sherbert_Bass_spritesheetL.png';
            this.imageR.src = 'assets/fish/Sherbert_Bass_spritesheetR.png';
            this.numFrames = 15;
            this.frameWidth = 200;
            this.frameHeight = 77;
            break;
          case "7":
            this.imageL.src = 'assets/fish/fish_spritesheet.png';
            this.imageR.src = 'assets/fish/fish_spritesheetR.png';
            this.numFrames = 9;
            this.frameWidth = 167;
            this.frameHeight = 77;
            break;
          case "8":
            this.imageL.src = 'assets/fish/Beepo_Bass_spritesheetL.png';
            this.imageR.src = 'assets/fish/Beepo_Bass_spritesheetR.png';
            this.numFrames = 15;
            this.frameWidth = 200;
            this.frameHeight = 77;
            break;
          case "9":
            this.imageL.src = 'assets/fish/rainbow_Bass_spritesheetL.png';
            this.imageR.src = 'assets/fish/rainbow_Bass_spritesheetR.png';
            this.numFrames = 15;
            this.frameWidth = 200;
            this.frameHeight = 77;
            break;
          case "10":
            this.imageL.src = 'assets/fish/Bass_spritesheet.png';
            this.imageR.src = 'assets/fish/Bass_spritesheetR.png';
            this.numFrames = 15;
            this.frameWidth = 200;
            this.frameHeight = 77;
            break;
          case "11":
            this.imageL.src = 'assets/fish/Uber_Bass_spritesheetL.png';
            this.imageR.src = 'assets/fish/Uber_Bass_spritesheetR.png';
            this.numFrames = 15;
            this.frameWidth = 200;
            this.frameHeight = 77;
            break;
          case "12":
            this.imageL.src = 'assets/fish/Sherbert_Bass_spritesheetL.png';
            this.imageR.src = 'assets/fish/Sherbert_Bass_spritesheetR.png';
            this.numFrames = 15;
            this.frameWidth = 200;
            this.frameHeight = 77;
            break;
          default:
            this.imageL.src = 'assets/fish/angelL.png';
            this.imageR.src = 'assets/fish/angelR.png';
            this.numFrames = 9;
            this.frameWidth = 200;
            this.frameHeight = 200;
      }


        if (deltaTime >= 100 / this.animationSpeed) {
          const sourceX = this.spriteSheetX + this.currentFrame * this.frameWidth;
          const sourceY = this.spriteSheetY;
          const sourceWidth = this.frameWidth;
          const sourceHeight = this.frameHeight;
          //ctx.clearRect(0, 0, canvas.width, canvas.height);


        if(!this.isAlive){
            ctx.drawImage(this.image, 0, 0, sourceWidth, sourceHeight, this.deathx, this.deathy, this.width, this.height);
            this.deathy = this.deathy - 1;
          if(this.swayspeed < 25){
            this.deathx = this.deathx - this.swaydistance;
            this.swayspeed++;
            }
          else{
            this.swaydistance = (this.swaydistance * -1);
            this.swayspeed = 0;
          }
          }
        if(this.isAlive){
          ctx.drawImage(this.image, sourceX, sourceY, sourceWidth, sourceHeight, this.x, this.y, this.width, this.height);

          // get the width of the text
          const textWidth = ctx.measureText(this.name).width;

          // adjust the x-coordinate so the text is centered on the fish
          const textX = this.x + (this.width / 2) - (textWidth / 2);

          // draw the text
          ctx.font = "15px 'Comic Sans'";
          ctx.fillStyle = "white";
          //ctx.fillText(this.name, textX, this.y);
          counter++;
        }




          this.currentFrame = (this.currentFrame + 1) % this.numFrames;
          this.lastFrameTime = currentTime;

        }
      }

      move() {
        //are you in canvas bounds?
        if (this.x <= 0) {
          this.checkH = false;
        } else if (this.y >= (canvas.height - 75)) {
          this.checkV = false;
        } else if (this.x + this.width >= canvas.width) {
          this.checkH = true;
        } else if (this.y + this.height <= 75) {
          this.checkV = true;
        }


        //random vertical reverse
        if (Math.floor(Math.random() * 20) + 1 === (1 || 2)) {
          this.checkV = !this.checkV;
        }
        //random horizontal reverse
        if (Math.floor(Math.random() * 500) + 1 === (1 || 2)) {
          this.checkH = !this.checkH;
        }

        //if direction changes, change movement direction/image
        if (this.checkH === true) {
          this.x -= this.speed;
          this.image = this.imageL;
          if (this.checkV === false) {
            this.y -= this.speed;
          } else {
            this.y += this.speed;
          }
          //this.animate();
        } else if (this.checkH === false) {
          this.x += this.speed;
          this.image = this.imageR;

          if (this.checkV === true) {
            this.y += this.speed;
          } else {
            this.y -= this.speed;
          }
        }
      }} //fish object


    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = 3840;
    canvas.height = 2160;

    let enterfish = [];
    let numFish = 1;
    let allFish = [];
    let names = [];

    let firstLetter = " ";
    let type = "0"

    setInterval(() => {
        fetch('/viewers')
          .then(response => response.json())
          .then(data => {


            enterfish = data.viewers;

            console.log("current: " +  enterfish);

            enterfish.forEach((value) => {
              if (!names.includes(value)) {
                names.push(value);
                firstLetter = value.charAt(0);
                type = charToNum(firstLetter);
                type = type % 6;



                let xpos = Math.floor(Math.random() * (canvas.width - 100 + 1) + 100);
                let ypos = Math.floor(Math.random() * (canvas.height - 100 + 1) + 100);
                allFish.push(new Fish(xpos, ypos, 100, 100, .75, value, type.toString()));
              }
            });

            names.forEach((value) => {
              if (names.includes(value) && !enterfish.includes(value)) {
                const index = names.indexOf(value);
                const fishdex = allFish.indexOf(value);
                if (index !== -1) {
                  //names.splice(index, 1);
                  //death(value);
                  removeFromArr(value);
                }
              }
            });



          })
          .catch(error => console.error("mf: " + error));

    }, 1000);










    for (let i = 0; i < numFish; i++) {
      if(names.length > 0)
      {
        allFish.push(new Fish(canvas.width/2, canvas.height/2, 100, 100, .75, names[i], "2"));
      }
      else //for testing purposes
      {
        let size = Math.floor(Math.random() * (125 - 100 + 1) + 100);
        let type = Math.floor(Math.random() * (5 - 1 + 1) + 1);
        type = type.toString();

        for(let i = 0; i < 30; i++){
          size = Math.floor(Math.random() * (125 - 100 + 1) + 100);
          type = Math.floor(Math.random() * (5 - 1 + 1) + 1);
          type = type.toString();
          allFish.push(new Fish(canvas.width/2, canvas.height/2, size, size, .75, "Steve", type));
      }



      }
}

    function updateFishDimensions() {


      allFish.forEach((fish) => {


        let minx = 100;
        let maxx = canvas.width;
        let miny = 100;
        let maxy = canvas.height;
        let sx = Math.floor(Math.random() * (maxx - minx + 1) + minx);
        let sy = Math.floor(Math.random() * (maxy - miny + 1) + miny);

        fish.x = sx;
        fish.y = sy;
      });
    }



    function animateAllFish() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      allFish.forEach((fish) => {
        fish.animate();
      });
    }

    const moveFishInterval = setInterval(() => {
      allFish.forEach((fish) => {
        fish.move(canvas.width, canvas.height);
      });
    }, 50);

    setInterval(() => {
      animateAllFish();
    }, 20);

window.addEventListener('resize', () => {
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;
  updateFishDimensions();
});



window.dispatchEvent(new Event('resize'));







function removeFromArr(name){
  for (i in allFish)
  {
    if(allFish[i].name == name)
    {
      //allFish.splice(i, 1);
      death(allFish[i]);
      return "Fish Removed";
    }
  }
}


function charToNum(char) {
  const charCode = char.charCodeAt(0);
  const aCode = 'a'.charCodeAt(0);
  return charCode - aCode + 1;
}

var img1 = new Image();
img1.src = "assets/fish/fish.png";

function death(fish) {
  if(fish.isAlive){
      fish.isAlive = false;
      fish.deathx = fish.x;
      fish.deathy = fish.y;
    }
      return "Fish Removed";

}
