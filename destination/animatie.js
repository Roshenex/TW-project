var canvas = document.getElementById("title");
var ctx = canvas.getContext("2d");
ctx.font = "60px Arial";
ctx.fillStyle = "yello";
ctx.lineWidth = 5;
ctx.strokeText("GALAXY",20,70);


var btnAnimatie = {
    element: document.getElementById("btnBack"),
    redirectTo: "Destination.html",
    init: function() {
      this.element.addEventListener("click", this.handleClick.bind(this));
    },
    handleClick: function() {
      window.location.href = this.redirectTo;
    }
  };

const moon = document.getElementById('moon');
let currentFrame = 0;

function animateMoon() {
  const frameWidth = 72;
  const numFrames = 8;
  const spriteWidth = frameWidth * numFrames;

  const backgroundPosition = `-${currentFrame * frameWidth}px 0`;

  moon.style.backgroundPosition = backgroundPosition;

  currentFrame = (currentFrame + 1) % numFrames;

  setTimeout(animateMoon, 500);
}

class MovingComet {
  constructor(imageSrc) {
    this.image = new Image();
    this.image.src = imageSrc;
    this.image.style.position = "absolute";
    this.image.style.left = `${window.innerWidth-150}px`;
    this.image.style.top = `${window.innerHeight-150}px`;
    this.init();
    document.body.appendChild(this.image);
  }

  init() {
    this.image.addEventListener("click", this.handleClick.bind(this));
  }

  handleClick() {
    this.moveUp();
  }

  moveUp() {
    const containerWidth = window.innerWidth-150;
    const containerHeight = window.innerHeight-150;
    const imageWidth = this.image.width;
    const imageHeight = this.image.height;
    const finalTop = -imageHeight;
    const finalLeft = -imageWidth;

    const animation = this.image.animate(
      [
        { top: `${containerHeight}px`, left: `${containerWidth}px` },
        { top: `${finalTop}px`, left: `${finalLeft}px` },
      ],
      { duration: 2000 }
    );

    animation.onfinish = () => {
      this.image.remove();
    };
  }
}

const myImage = new MovingComet("images/comet.png");

animateMoon();
btnAnimatie.init();