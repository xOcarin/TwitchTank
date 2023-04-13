
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
        this.checkH = true;
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
      }



      animate() {
        const currentTime = Date.now();
        const deltaTime = currentTime - this.lastFrameTime;

        switch (this.type) {
          case "1":
            this.imageL.src = 'assets/fish/testL.png';
            this.imageR.src = 'assets/fish/testR.png';
            this.numFrames = 26;
            this.frameWidth = 200;
            this.frameHeight = 200;
            break;
          case "2":
            this.imageL.src = 'assets/fish/yguyL.png';
            this.imageR.src = 'assets/fish/yguyR.png';
            this.numFrames = 26;
            this.frameWidth = 200;
            this.frameHeight = 200;
            break;
          case "3":
            this.imageL.src = 'assets/fish/rainbow_Bass_spritesheetL.png';
            this.imageR.src = 'assets/fish/rainbow_Bass_spritesheetR.png';
            this.numFrames = 15;
            this.frameWidth = 200;
            this.frameHeight = 77;
            break;
          case "4":
            this.imageL.src = 'assets/fish/Bass_spritesheet.png';
            this.imageR.src = 'assets/fish/Bass_spritesheetR.png';
            this.numFrames = 15;
            this.frameWidth = 200;
            this.frameHeight = 77;
            break;
          case "5":
            this.imageL.src = 'assets/fish/Uber_Bass_spritesheetL.png';
            this.imageR.src = 'assets/fish/Uber_Bass_spritesheetR.png';
            this.numFrames = 15;
            this.frameWidth = 200;
            this.frameHeight = 77;
            break;
          case "6":
            this.imageL.src = 'assets/fish/Sherbert_Bass_spritesheetL.png';
            this.imageR.src = 'assets/fish/Sherbert_Bass_spritesheetR.png';
            this.numFrames = 15;
            this.frameWidth = 200;
            this.frameHeight = 77;
            break;
          default:
            this.imageL.src = 'assets/fish/fish_spritesheet.png';
            this.imageR.src = 'assets/fish/fish_spritesheetR.png';
            this.numFrames = 9;
            this.frameWidth = 167;
            this.frameHeight = 77;
      }


        if (deltaTime >= 100 / this.animationSpeed) {
          const sourceX = this.spriteSheetX + this.currentFrame * this.frameWidth;
          const sourceY = this.spriteSheetY;
          const sourceWidth = this.frameWidth;
          const sourceHeight = this.frameHeight;
          //ctx.clearRect(0, 0, canvas.width, canvas.height);

          ctx.drawImage(this.image, sourceX, sourceY, sourceWidth, sourceHeight, this.x, this.y, this.width, this.height);

          // get the width of the text
          const textWidth = ctx.measureText(this.name).width;

          // adjust the x-coordinate so the text is centered on the fish
          const textX = this.x + (this.width / 2) - (textWidth / 2);

          // draw the text
          ctx.font = "15px 'Comic Sans'";
          ctx.fillStyle = "white";
          ctx.fillText(this.name, textX, this.y);

          this.currentFrame = (this.currentFrame + 1) % this.numFrames;
          this.lastFrameTime = currentTime;

        }
      }

      move() {
        if (this.x <= 0) {
          this.checkH = false;
        } else if (this.y >= (canvas.height - 75)) {
          this.checkV = false;
        } else if (this.x + this.width >= canvas.width) {
          this.checkH = true;
        } else if (this.y + this.height <= 75) {
          this.checkV = true;
        }

        if (Math.floor(Math.random() * 20) + 1 === (1 || 2)) {
          this.checkV = !this.checkV;
        }
        if (Math.floor(Math.random() * 500) + 1 === (1 || 2)) {
          this.checkH = !this.checkH;
        }

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
          //this.animate()
        }
      }} //fish object


    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = 3840;
    canvas.height = 2160;





    const presidents = ["George Washington", "John Adams", "Thomas Jefferson", "James Madison", "James Monroe", "John Quincy Adams", "Andrew Jackson", "Martin Van Buren", "William Henry Harrison", "John Tyler"];
    let numFish = 10;
    let allFish = [];

    for (let i = 0; i < numFish; i++) {
      allFish.push(new Fish(canvas.width/2, canvas.height/2, 100, 100, .75, presidents[i], "2"));
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





function incrementNumber() {
  numFish++;
  allFish.push(new Fish(canvas.width/4 + (Math.floor(Math.random() * 500) + 1), canvas.height/4 + (Math.floor(Math.random() * 500) + 1), 100, 100, .75, 'new', "2"));
  console.log(numFish);
}

function decrementNumber() {
  allFish.splice(numFish, 1)
  numFish--;
  console.log(numFish);
}
