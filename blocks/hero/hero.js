export default function decorate(block) {
  // if statement for setup full content hero banner
  if (block.children.length === 1) {
    const cols = [...block.firstElementChild.children];
    cols.forEach((col, id) => {
      col.classList.add(`herocol-${id + 1}`);
    });
  } else {
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
        if (heading) {
          const headingWrapper = heading.closest('div');
          if (headingWrapper && headingWrapper.children.length >= 1) {
            // picture is only content in column
            headingWrapper.classList.add('hero-content');
          }
        }
      });
    });
  }
}
