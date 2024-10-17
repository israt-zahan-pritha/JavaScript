function playVideo() {
  // Hide the overlay when clicked
  document.getElementById("imageOverlay").style.display = "none";
  // Add autoplay to the video
  const iframe = document.getElementById("videoIframe");
  const src = iframe.src;
  iframe.src = src + "&autoplay=1";
}
