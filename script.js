// Initialize an array to track the current slide index for each slider
let slideIndices = [];

// Store interval references for each slider to manage auto-slide independently
let slideIntervals = [];

// Function to initialize all sliders
function initSliders() {
  const sliders = document.querySelectorAll(".slider_box");
  sliders.forEach((slider, index) => {
    slideIndices[index] = 0; // Set initial slide index for each slider
    showSlides(slideIndices[index], index); // Show the first slide in each slider

    // Start auto-sliding for each slider
    slideIntervals[index] = setInterval(() => {
      changeSlide(1, index, false); // Auto-slide
    }, 3000);
  });
}

// Function to change slides
function changeSlide(step, sliderIndex, resetInterval = true) {
  const sliders = document.querySelectorAll(".slider_box");
  const slides = sliders[sliderIndex].querySelectorAll(".image");

  // Defensive programming: Ensure slides exist
  if (slides.length === 0) return;

  // Update index
  slideIndices[sliderIndex] += step;

  // Immediate looping logic
  if (slideIndices[sliderIndex] >= slides.length) {
    slideIndices[sliderIndex] = 0; // Go back to the first slide
  } else if (slideIndices[sliderIndex] < 0) {
    slideIndices[sliderIndex] = slides.length - 1; // Go to the last slide
  }

  // Show updated slide
  showSlides(slideIndices[sliderIndex], sliderIndex);

  // Reset auto-slide interval if manual navigation is used
  if (resetInterval) {
    clearInterval(slideIntervals[sliderIndex]);
    slideIntervals[sliderIndex] = setInterval(() => {
      changeSlide(1, sliderIndex, false); // Restart auto-slide
    }, 3000);
  }
}

// Function to show slides for a specific slider
function showSlides(index, sliderIndex) {
  const sliders = document.querySelectorAll(".slider_box");
  const slides = sliders[sliderIndex].querySelectorAll(".image");

  // Defensive programming: Ensure slides exist
  if (slides.length === 0) return;

  // Hide all slides in the current slider
  slides.forEach((slide) => {
    slide.style.display = "none";
  });

  // Show the current slide
  slides[slideIndices[sliderIndex]].style.display = "block";
}

// Initialize sliders on page load
document.addEventListener("DOMContentLoaded", () => {
  initSliders();
});
