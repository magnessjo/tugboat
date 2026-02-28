const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach((item) => {
  const header = item.querySelector('.accordion-header');

  header.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');

    // Close all siblings
    accordionItems.forEach((sibling) => {
      sibling.classList.remove('open');
      sibling.querySelector('.accordion-header').setAttribute('aria-expanded', 'false');
    });

    // Toggle the clicked item
    if (!isOpen) {
      item.classList.add('open');
      header.setAttribute('aria-expanded', 'true');
    }
  });
});
