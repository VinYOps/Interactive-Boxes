const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
  box.addEventListener('click', () => {
    box.classList.toggle('expanded');
  });

  const colorOptions = box.querySelectorAll('.color-option');
  colorOptions.forEach(option => {
    option.addEventListener('click', (event) => {
      const color = event.target.dataset.color;
      box.style.backgroundColor = color;
      event.stopPropagation();
    });
  });

  const sizeOptions = box.querySelectorAll('.size-option');
  sizeOptions.forEach(option => {
    option.addEventListener('click', (event) => {
      const size = event.target.dataset.size;
      box.style.width = size;
      event.stopPropagation();
    });
  });
});