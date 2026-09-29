"use strict";

// Native <details> elements provide keyboard-accessible expansion without JS.

// Hide a missing photograph so the initials underneath remain visible.
const portrait = document.querySelector(".portrait img");

if (portrait) {
  const showFallback = () => {
    portrait.hidden = true;
    portrait.style.display = "none";
  };

  portrait.addEventListener("error", showFallback);

  if (portrait.complete && portrait.naturalWidth === 0) {
    showFallback();
  }
}
