let l = console.log;
let dots = document.querySelectorAll('.dots');
let img = document.querySelectorAll('.imgSlider');

let dot, auto, newInterval = true, index = 0;
l(newInterval);
const showDot = () => {
    for(let i = 0; i < img.length; i++){
        dots[0].innerHTML += `<span class="dot" onclick="selectSlider(${i})"></span>`;
    }

    dot = document.querySelectorAll('.dot');

    return changeSlider(1);
}
const selectSlider = (x) => {
    clearInterval(auto);
    l('stop interval auto');
    index = x;
    slider(index);
    
    if(newInterval){
        setTimeout(function(){
            auto = setInterval(autoSlides, 4000);
		l('nuevo intervalo activado')
        },10000);
	    
        newInterval = false;
l(newInterval);
    }
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
}
auto = setInterval(autoSlides, 4000);
function autoSlides(){
    changeSlider(1);
}
showDot();
