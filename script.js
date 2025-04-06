// Side Navbar
const sidebarClose = document.querySelector('.sidebar-close'),
      navbar = document.querySelector('.navbar'),
      sidebarOpen = document.querySelector('.sidebar-open');

sidebarOpen.addEventListener("click", ()=> {
  navbar.classList.add("active");
});
sidebarClose.addEventListener("click", () => {
  navbar.classList.remove("active");
});


// Sticky Navbar
const header = document.querySelector(".navbar");
window.onscroll=()=>{
this.scrollY>20? header.classList.add("sticky") : header.classList.remove("sticky");
}

// Splide Carousel
document.addEventListener("DOMContentLoaded", function () {
  new Splide(".splide2", {
    type: "loop",
    autoplay: "play",
    perPage: 5,
    breakpoints: {
  1200: {
    perPage: 4,
  },
  992: {
    perPage: 3,
  },
  768: {
    perPage: 2,
  },
  576: {
    perPage: 1,
  },
},
  }).mount();
});
// second splide
document.addEventListener("DOMContentLoaded", function () {
  new Splide(".splide1", {
    type: "loop",
    autoplay: "play",
    perPage: 2,
   breakpoints:{
    768: {
    perPage: 1,
  },
   }
  }).mount();
});




// Scroll to Top Button
const scrollToTopButton = document.getElementById('scrollToTop');

  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) { 
      scrollToTopButton.style.display = 'block';
    } else {
      scrollToTopButton.style.display = 'none';
    }
  });

  scrollToTopButton.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Shopping Cart and searchbar
  const cartLogo = document.querySelector('.cart-logo'),
  shoppingList = document.querySelector('.shopping-list'),
  searchToggle= document.querySelector('.search-toggle');

  cartLogo.addEventListener('click', function() {
    shoppingList.style.display = shoppingList.style.display === 'none' || shoppingList.style.display === '' ? 'block' : 'none';
  });
  searchToggle.addEventListener("click", () => {  
    searchToggle.classList.toggle("active");
  });