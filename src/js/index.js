const refs = {
  header: document.querySelector(".header")
}

window.addEventListener('scroll', function() {
  refs.header.classList.add("newHeader")
 if (window.innerWidth >= 320 && pageYOffset > 120
    || window.innerWidth >= 768 && pageYOffset > 70
    || window.innerWidth >= 1360 && pageYOffset > 70) {
     refs.header.classList.add("headerScrolled")
  } else refs.header.classList.remove("headerScrolled")
});

document.querySelectorAll('a[href^="#"').forEach(link => {

    link.addEventListener('click', function(e) {
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);

        const topOffset = document.querySelector('.scrollto').offsetHeight;
        // const topOffset = 0; // если не нужен отступ сверху 
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});