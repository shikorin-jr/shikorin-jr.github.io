window.addEventListener("DOMContentLoaded", function () {

    // Carousel Clients
  
    const root = document.documentElement;
    const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
    const marqueeContent = document.querySelector(".clients__list");
  
    root.style.setProperty("--marquee-elements", marqueeContent.children.length);
  
    for (let i = 0; i < marqueeElementsDisplayed; i++) {
      marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
    }
  
});
  