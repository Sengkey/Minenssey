

$( document ).ready(function() {
  
//   document.addEventListener("onReady", onYouTubePlayerReady() )
  
  /* Slideshow */
  const allSlideshowComponents = document.querySelectorAll('slideshow-component');
  for(let i = 0; i<allSlideshowComponents.length;i++) {
    const slideshow = allSlideshowComponents[i]
    const slideItems = slideshow.querySelectorAll('.slideshow__slide');
    for(let k = 0; k<slideItems.length;k++) {
      const mediaVideo = slideItems[k].querySelector('.slideshow__media .slideshow__video');
      const videoIframe = mediaVideo.children[0].children[0];
      console.log(videoIframe, i, k)
    }
  }
  
});