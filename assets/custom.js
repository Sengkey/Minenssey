$( document ).ready(function() {
  
  
  /* Slideshow */
  const allSlideshowComponents = $('slideshow-component');
  for(let i = 0; i<allSlideshowComponents.length;i++) {
    const slideshow = allSlideshowComponents[i]
    const slideItems = slideshow.querySelector('.slideshow__slide');
    console.log(slideItems, i)
  }
  
});