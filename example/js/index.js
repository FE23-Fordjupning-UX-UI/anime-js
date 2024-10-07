anime({
  targets: ".circle",
  translateX: "80vw", // Flytta cirkeln till höger på x-axeln
  backgroundColor: "#00FF00", // Ändra färg till grön
  duration: 2000, // Animationens längd i millisekunder
  easing: "easeInOutQuad", // Easing - funktion för smidigare animation
  loop: true,
  direction: "alternate",
});

anime({
  targets: ".box",
  loop: true,
  translateX: 270,
  delay: anime.stagger(100, { direction: "reverse" }),
});
