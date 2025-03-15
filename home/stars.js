function createStar() {
  const star = $("<span class='star'>★</span>");
  const container = $("body");
  const containerWidth = container.width();
  const xPos = Math.random() * containerWidth;
  const yPos = -50;
    
  star.css("left", `${xPos}px`);
  star.css("top", `${yPos}px`);
  container.append(star);
    
  const animation = star.animate(
    {top: `${$(window).height()}px`},
    {duration: 1000}
  );
    
  animation.promise().done(() => {
    star.remove();
  });
}
  
setInterval(createStar, 1000);