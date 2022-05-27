$( document ).ready(function() {
  
  
  /* Slideshow */
  const allSlideshowComponents = document.querySelectorAll('slideshow-component');
  for(let i = 0; i<allSlideshowComponents.length;i++) {
    const slideshow = allSlideshowComponents[i]
    const slideItems = slideshow.querySelectorAll('.slideshow__slide');
    for(let k = 0; k<slideItems.length;k++) {
      const mediaVideo = slideItems[k].querySelector('.slideshow__media .slideshow__video')
      console.log(mediaVideo, i, k)
    }
  }
  
});