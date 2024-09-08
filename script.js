document.addEventListener("DOMContentLoaded", () => {
    const loader = document.getElementById("loader");
    const content = document.querySelector(".content");
  
    // Preloader animation on page load
    window.addEventListener("load", () => {
      setTimeout(() => {
        loader.classList.add("hidden");
        content.classList.add("visible");
      }, 4000); // 4 seconds delay to simulate loading
    });
  
    // Page transition logic
    const links = document.querySelectorAll("a");
  
    links.forEach(link => {
      link.addEventListener("click", event => {
        event.preventDefault();
        const href = link.getAttribute("href");
  
        // Fade out current content
        content.classList.remove("visible");
        content.classList.add("fade-out");
  
        // After fade out, navigate to the new page
        setTimeout(() => {
          window.location.href = href;
        }, 700); // Delay for the fade-out effect
      });
    });

    // Smooth scroll effect
    const scrollWrap = document.getElementsByClassName("smooth-scroll-wrapper")[0];

    function setBodyHeight() {
        // Ensure the height of body is set based on the content
        const height = scrollWrap.getBoundingClientRect().height;
        document.body.style.height = `${Math.floor(height)}px`;
    }

    // Call setBodyHeight initially and on window resize
    setBodyHeight();
    window.addEventListener('resize', setBodyHeight);

    let offset = 0;
    const speed = 0.04;

    function smoothScroll() {
        offset += (window.pageYOffset - offset) * speed;
        scrollWrap.style.transform = `translateY(-${offset}px) translateZ(0)`;
        requestAnimationFrame(smoothScroll);
    }

    smoothScroll();
});
