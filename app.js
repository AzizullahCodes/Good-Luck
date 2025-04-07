
  const toggler = document.querySelector('.navbar-toggler');
  const nav = document.querySelector('#mynav');
  const home = document.querySelector('#home');

  toggler.addEventListener('click', () => {
    // Delay a little to let Bootstrap toggle the class
    setTimeout(() => {
      if (nav.classList.contains('show')) {
        home.style.display = 'none';
      } else {
        home.style.display = 'block';
      }
    }, 100);
  });
