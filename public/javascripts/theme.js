//Tema dark y light
var dark = true;
const darkLight = () => {
  let root = document.documentElement;
  if (dark) {
    root.style.setProperty('--white-color', 'hsl(0, 0%, 10%)');
    root.style.setProperty('--black-color', 'hsl(0, 0%, 95%)');
    root.style.setProperty('--contrast-color', 'hsl(0, 0%, 15%)');
    dark = false;
  } else {
    root.style.setProperty('--white-color', 'hsl(0, 0%, 95%)');
    root.style.setProperty('--black-color', 'hsl(0, 0%, 5%)');
    root.style.setProperty('--contrast-color', 'hsl(0, 0%, 80%)');

    dark = true;
  }
};
