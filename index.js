    document.addEventListener('mousemove', function(event) {
      const motion = document.getElementById("motion");
      const offsetX = motion.offsetWidth / 2;
      const offsetY = motion.offsetHeight / 2;
      motion.style.left = (event.pageX - offsetX) + "px";
      motion.style.top = (event.pageY - offsetY) + "px";
    });

  window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section, #home, #contact, #protfolio');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
});

document.getElementById("netflix_view").addEventListener('click',(event)=>{
  window.location="https://darkegale.github.io/Netflix-clone/"
})
