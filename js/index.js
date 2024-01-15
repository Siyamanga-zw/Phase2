$(document).ready(function() {
  const slider = $(".slider");
  const totalImages = $(".slider img").length;
  let currentIndex = 0;


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
    $(".slider img").hide();
    $(".slider img:eq(" + currentIndex + ")").show();
  }

  function updateBubbles() {
    $(".bubble").removeClass("active");
    $(".bubble:eq(" + currentIndex + ")").addClass("active");
  }

  $(".slider img").hide();
  $(".slider img:eq(" + currentIndex + ")").show();
});
