const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');
const opacity = 0.6;

// Set First Image Opacity
imgs[0].style.opacity = opacity;

imgs.forEach(img => img.addEventListener('click', imgClick));

function imgClick(e) {
  // Reset The Opacity
  imgs.forEach(img => img.style.opacity = 1);

  // Change Current Image To Source Of CLicked Image
  current.src = e.target.src;

  // Add FadeIn class
  current.classList.add('fade-in');

  // Remove fade-in Class After .5 Seconds
  setTimeout(() => current.classList.remove('fade-in'), 500);

  // Change The Opacity To Opacity Var
  e.target.style.opacity = opacity;
}
