
document.querySelectorAll('.accordion__title').forEach(title => {
  title.addEventListener('click', () => {
    const accordion = title.parentElement;
    accordion.classList.toggle('active');
  });
});
