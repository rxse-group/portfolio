function openNav() {
  document.getElementById("nav_func").style.height = "100%";
  document.body.style.overflow = "hidden"; // disable scroll
}

function closeNav() {
  document.getElementById("nav_func").style.height = "0%";
  document.body.style.overflow = ""; // enable scroll
}

/* Close overlay when user clicks an internal link (useful for mobile) */
document.addEventListener("click", function (e) {
  const target = e.target;
  if (
    target.tagName === "A" &&
    target.getAttribute("href") &&
    target.getAttribute("href").startsWith("#")
  ) {
    setTimeout(() => closeNav(), 120);
  }
});

/* Allow ESC to close nav */
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") closeNav();
});

/* Video Playback Speed */
let vid = document.getElementById("overlay-background");
vid.playbackRate = 0.6;
