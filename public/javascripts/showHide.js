if (window.screen.width <= 900) {
  document.querySelector('#ulHeader').classList.add('hide');
}
const showHideMenuHeader = () => {
  document.querySelector('#ulHeader').classList.toggle('hide');
  setTimeout(() => {
    document.querySelector('#ulHeader').classList.toggle('animationShow');
  }, 5);
};

var sellector = document.querySelectorAll('.toggleMenuHe');
if (window.screen.width <= 900) {
  sellector.forEach(select => {
    select.addEventListener('click', showHideMenuHeader);
  });
}

