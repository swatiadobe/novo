/* function decorate(block) {
  block.classList.add('teaser-cols');

  const rows = [...block.children];
  rows.forEach((row) => {
    const cols = [...row.children];
    cols.forEach((col) => {
      const pic = col.querySelector('picture');
      if (pic) {
        const picWrapper = pic.closest('div');
        if (picWrapper && picWrapper.children.length === 1) {
          picWrapper.classList.add('teaser-img-col');
        }
      }
      else {
        div.className = 'exclusive-card-body';
      }
    });
  });
}

// Button click event to handle external link warning
const buttons = document.querySelectorAll('.btn');
buttons.forEach((btn) => {
  btn.addEventListener('click', function (e) {
    const leavingWarning = confirm('You are leaving this site. Do you want to continue?');
    if (!leavingWarning) {
      e.preventDefault();
    }
  });
});

// Add corner rounding dynamically
const teaserContainer = document.querySelector('.teaser-container');
teaserContainer.style.borderRadius = '16px';

// Handle GIF behavior
const teaserImage = document.querySelector('.teaser-image');
teaserImage.addEventListener('mouseover', () => {
  teaserImage.src = 'animated.gif';
});
teaserImage.addEventListener('mouseout', () => {
  teaserImage.src = 'placeholder.jpg';
}); */