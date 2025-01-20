
// 1) Grab all slides and all thumbnails
const slides = document.querySelectorAll('.testimonial-slide');
const thumbs = document.querySelectorAll('.img-sub-section');

  thumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {

      // 2) Remove "active" from all slides and thumbs
      slides.forEach(s => s.classList.remove('active'));
      thumbs.forEach(t => t.classList.remove('active'));

      // 3) Add "active" to the chosen thumb
      thumb.classList.add('active');

      // 4) Find the related slide by ID
      const targetId = thumb.dataset.target;
      const targetSlide = document.getElementById(targetId);

      // 5) Show that slide
      if (targetSlide) {
        targetSlide.classList.add('active');
      }
    });
});
