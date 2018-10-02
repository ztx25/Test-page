$(document).ready(function(){
    PopUpHide();
});

function PopUpShow(){
    $("#popup1").show();
}

function PopUpHide(){
    $("#popup1").hide();
}

let nextBtn = document.querySelector('.next');
let prevBtn = document.querySelector('.prev');

let currentImg = 0;
let play = false;
let images = ['img/slide-1.jpg', 'img/slide-2.jpg', 'img/slide-3.jpg', 'img/slide-4.jpg', 'img/slide-5.jpg', 'img/slide-6.jpg', 'img/slide-7.jpg', 'img/slide-8.jpg', 'img/slide-9.jpg']
let totalImgs = images.length;
let imageContainer = document.querySelector('.slider-2 ul');
let imgWidth = 792;

function nextImg() {   
    currentImg++;
    if(currentImg >= totalImgs) {
        currentImg = 0;
    }
    animate (3);
}

nextBtn.addEventListener('click', function() {
    nextImg ();

});
    
prevBtn.addEventListener('click', function () {
    currentImg--;
    if(currentImg < 0) {
        currentImg = totalImgs -1; 
    }
        imageContainer.style.left = -imgWidth*currentImg + 'px';
} );

function animate (speed) {
    let offset = 0;
    let final;
    let isPositive;
    if (currentImg !== 0) {
        final = imgWidth;
        isPositive = false;
    } else {
        final = imgWidth*(totalImgs - 1);
        isPositive = true;
    }


    let slideInterval = setInterval( function(){
        offset+=speed;
        if(offset <= final) {
            let styles = getComputedStyle(imageContainer);
            let currentLeft = parseInt(styles.left);
            if (isPositive) {
            imageContainer.style.left = currentLeft + speed + 'px';
        } else {
            imageContainer.style.left = currentLeft - speed + 'px';
        }

    } else {
            clearInterval(slideInterval);
        }
    }, 1);
}



