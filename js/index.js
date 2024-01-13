$(document).ready(function() {
  const slider = $(".slider");
  const totalImages = $(".slider img").length;
  let currentIndex = 0;

  // Create bubbles
  for (let i = 0; i < totalImages; i++) {
    $(".bubbles").append('<div class="bubble"></div>');
  }

  updateBubbles();

  $(".arrow.next").click(function() {
    if (currentIndex < totalImages - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    updateSlider();
    updateBubbles();
  });

  function updateSlider() {
    const translateValue = currentIndex * -100 + "%";
    slider.css("transform", "translateX(" + translateValue + ")");
  }

  function updateBubbles() {
    $(".bubble").removeClass("active");
    $(".bubble:eq(" + currentIndex + ")").addClass("active");
  }

  // Initially hide all images except the first one
  $(".slider img").hide();
  $(".slider img:eq(" + currentIndex + ")").show();
});
