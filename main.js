function onScroll() {
  showNavOnScroll();

  showToTopButtonOnScroll();
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add("scroll");
  } else {
    navigation.classList.remove("scroll");
  }
}

function showToTopButtonOnScroll() {
  if (scrollY > 500) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
}

function openMenu() {
  document.body.classList.add("menu-expanded");
}

function closeMenu() {
  document.body.classList.remove("menu-expanded");
}

ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 700,
}).reveal(`
  #home, 
  #home img,
  #home .stats, 
  #services,
  #services header,
  #services .card,
  #about header,
  #about .content`);
