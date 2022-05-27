$( document ).ready(function() {
  
  
  /* Slideshow */
  const allSlideshowComponents = $('slideshow-component');
  for(let i = 0; i<allSlideshowComponents.length;i++) {
    const slideshow = allSlideshowComponents[i].children[0]
    console.log(slideshow, i)
  }
  
});