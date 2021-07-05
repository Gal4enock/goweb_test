const refs = {
  header: document.querySelector(".header")
}

window.addEventListener('scroll', function() {
  refs.header.classList.add("newHeader")
  console.log(pageYOffset);
  // console.log(window.innerWidth);
  if (window.innerWidth >= 320 && pageYOffset > 120
    || window.innerWidth >= 768 && pageYOffset > 70
  || window.innerWidth >= 1360 && pageYOffset > 70) {
     refs.header.classList.add("headerScrolled")
  } else refs.header.classList.remove("headerScrolled")
});