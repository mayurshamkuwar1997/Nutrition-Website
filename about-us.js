
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
      const header = item.querySelector('.accordion-header');
      const content = item.querySelector('.accordion-content');

      header.addEventListener('click', () => {
        item.classList.toggle('open');
      });
    });
 