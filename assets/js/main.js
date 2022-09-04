//Get the button

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

let navbarWrapper = document.querySelector('.navbar-wrapper')
function scrollFunction() {
  if (document.documentElement.scrollTop > 50) {
      navbarWrapper.classList.add('sticky bg-white end-0 navbar_fixed position-fixed start-0 top-0')
  } else {
    navbarWrapper.classList.remove('sticky')
  }
}

