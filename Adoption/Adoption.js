// Image Swiper for the Adoption Page
// -------------------------------------
const left = document.getElementById('left');
const right = document.getElementById('right');
const images = document.querySelector('.adoption').children;
const imagesTotal = images.length;

let index = 0;

left.addEventListener('click', () =>{
    index--;
    nextImage('left');
});

right.addEventListener('click', () =>{
    index++;
    nextImage('right');
});

function nextImage(swipeDirection){
    if(swipeDirection === 'right'){
        index++;
    if (index === imagesTotal){
        index = 0;
    }
    } else {
        if (index === 0){
            index = imagesTotal - 1;
        }
        else {
            index--;
        }
    }
    for (let i = 0; i < imagesTotal; i++){
        images[i].classList.remove('main');
    }
    images[index].classList.add('main');
}