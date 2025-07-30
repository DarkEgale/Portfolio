    document.addEventListener('mousemove', function(event) {
      const motion = document.getElementById("motion");

      // মাউস পজিশনের slightly center এ রাখার জন্য offset
      const offsetX = motion.offsetWidth / 2;
      const offsetY = motion.offsetHeight / 2;

      motion.style.left = (event.pageX - offsetX) + "px";
      motion.style.top = (event.pageY - offsetY) + "px";
    });