const mainImage = document.getElementById('main-image');
const thumbs = document.querySelectorAll('.thumb');
const swatches = document.querySelectorAll('.swatch');
const colorName = document.getElementById('selected-color-name');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mainNav = document.getElementById('main-nav');

// Thumbnail click → swap main image
thumbs.forEach((thumb) => {
  thumb.addEventListener('click', () => {
    const src = thumb.dataset.image;
    mainImage.src = src;
    mainImage.alt = thumb.getAttribute('aria-label');

    thumbs.forEach((t) => t.classList.remove('active'));
    thumb.classList.add('active');
  });
});

// Color swatch click → swap product image and update label
swatches.forEach((swatch) => {
  swatch.addEventListener('click', () => {
    const src = swatch.dataset.image;
    const name = swatch.dataset.name;
    const color = swatch.dataset.color;

    mainImage.src = src;
    mainImage.alt = `Harbor Buddy Tugboat in ${name}`;
    colorName.textContent = name;

    swatches.forEach((s) => s.classList.remove('active'));
    swatch.classList.add('active');

    // Also activate the matching thumbnail
    thumbs.forEach((t) => {
      t.classList.remove('active');
      if (t.dataset.color === color) {
        t.classList.add('active');
      }
    });
  });
});

// Mobile menu toggle
if (mobileMenuBtn && mainNav) {
  mobileMenuBtn.addEventListener('click', () => {
    const expanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
    mobileMenuBtn.setAttribute('aria-expanded', String(!expanded));
    mainNav.classList.toggle('open');
  });
}
