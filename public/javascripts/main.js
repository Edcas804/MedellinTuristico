let l = console.log;
let dots = document.querySelectorAll('.dots');
let img = document.querySelectorAll('.imgSlider');

let dot, auto, interval = 8000, newInterval = true, index = 0;

const showDot = () => {
    for(let i = 0; i < img.length; i++){
        dots[0].innerHTML += `<span class="dot" onclick="selectSlider(${i})"></span>`;
    }

    dot = document.querySelectorAll('.dot');

    return changeSlider(1);
}
const selectSlider = (x) => {
    index = x;
		clearInterval(auto);
    slider(index);
}
const changeSlider = (n) => {
    index = parseInt(index)+ n;

    if(index == img.length) index = 0;
    if(index < 0) index = parseInt(img.length) - 1;

    return slider(index)
}

const slider = (index) => {
    img.forEach( images => {
        images.classList.add('hide');
    });
    dot.forEach( dots => {
        dots.classList.remove('b-black');
    });

    img[index].classList.remove('hide');
    dot[index].classList.add('b-black');

		auto = setTimeout (autoSlider, interval);

		function autoSlider() {
        changeSlider(1);
		}
}
showDot();
