const exploreButton = {
    button: document.querySelector(".explore-btn"),
  
    handleClick: function() {
      const num = Math.floor((Math.random() * 3) + 1);
      if (num === 1) {
        window.open("../destination/destination.html", "_self");
      } else if (num === 2) {
        window.open("../crew/crew.html", "_self");
      } else if (num === 3) {
        window.open("../technology/technology.html", "_self");
      }
    },
  
    init: function() {
      this.button.addEventListener('click', this.handleClick);
    },
  };

  const rocketCanvas = {
    canvas: null,
    context: null,
    emoji: '🚀',
  
    init() {
      this.canvas = document.getElementById('rocket');
      this.context = this.canvas.getContext('2d');
      this.canvas.addEventListener('mouseenter', this.mouseHover.bind(this));
    },
  
    mouseHover() {
      this.drawEmoji();
    },
  
    drawEmoji() {
      this.context.font = '20px sans-serif';
      this.context.fillText(this.emoji, -5, 20);
    },
  };
  
  rocketCanvas.init();
  exploreButton.init();
  
  