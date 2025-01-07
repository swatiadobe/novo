export default function decorate(block) {
  // setup image columns
  [...block.children].forEach((row) => {
    [...row.children].forEach((col) => {
      const pic = col.querySelector('picture');
      const heading = col.querySelector('h1');
      if (pic) {
        const picWrapper = pic.closest('div');
        if (picWrapper && picWrapper.children.length === 1) {
          // picture is only content in column
          picWrapper.classList.add('hero-img');
        }
      }
      if(heading){
        const headingWrapper = heading.closest('div');
        if (headingWrapper && headingWrapper.children.length >= 1) {
            // picture is only content in column
            headingWrapper.classList.add('hero-content');
        }
      }
    });
  });
}
