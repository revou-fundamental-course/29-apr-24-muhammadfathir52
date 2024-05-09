
//section slide
let indexSlide =1; // [0, 1, 2, 3, 4, 5]
showSlide(1);

// Trigger Slide
function nextSlide(n) {
    console.log('nextSlide: ' + n);
    showSlide(indexSlide += n);

}

//slide logic

function showSlide(index) {
    let listImage = document.getElementsByClassName('banner-item');
    console.log(listImage);
    console.log('banyaknya image: ' + listImage.length);

    //reset slide index
    if (index > listImage.length) indexSlide = 1;

    // hide all images
    let i = 0;
    while (i < listImage.length) {
        listImage[i].style.display = 'none';
        i++;
    }

    // show only none images
    listImage[indexSlide - 1].style.display = 'block';
    console.log('showslide' + index);
}

setInterval(() => nextSlide(1), 4000);

document.getElementById('send-button').addEventListener('click',() => nextSlide(1))