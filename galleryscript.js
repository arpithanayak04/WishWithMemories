let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav ul li a');

window.onscroll=()=>{
    sections.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop - 140;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');
        if(top >= offset && top < offset + height){
            navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav ul li a[href*=' + id + ']' ).classList.add('active');
            });

        };
    });

};

$(document).ready(function(){
    $('#icon').click(function(){
        $('nav ul').toggleClass('show');

    });

});

let next = document.querySelector('.next')
let prev = document.querySelector('.prev')


next.addEventListener('click', function () {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').appendChild(items[0]);
});
prev.addEventListener('click', function () {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').prepend(items[items.length - 1]);
});


let images = [
    { src: 'image1.jpg' },{ src: 'image2.jpg' },{ src: 'image3.jpg' },{ src: 'image4.jpg' },{ src: 'image5.jpg' },{ src: 'image6.jpg' },
    { src: 'image7.jpg' },{ src: 'image8.jpg' },{ src: 'image9.jpg' },{ src: 'image10.jpg' },{ src: 'image11.jpg' },{ src: 'image12.jpg' },{ src: 'image13.jpg' },{ src: 'image14.jpg' },
    { src: 'image15.jpg' },{ src: 'image16.jpg' },{ src: 'image17.jpg' },{ src: 'image18.jpg' },{ src: 'image19.jpg' },{ src: 'image20.jpg' },{ src: 'image21.jpg' },{ src: 'image22.jpg' },
    { src: 'image23.jpg' },{ src: 'image24.jpg' },{ src: 'image25.jpg' },{ src: 'image26.jpg' },{ src: 'image27.jpg' },{ src: 'image28.jpg' }, { src: 'image29.jpg' },{ src: 'image30.jpg' },{src: 'image31.jpg'},
    { src: 'image32.jpg' }, { src: 'image33.jpg' }, { src: 'image34.jpg' }, { src: 'image35.jpg' }, { src: 'image36.jpg' }, { src: 'image37.jpg' }, { src: 'image38.jpg' }, { src: 'image39.jpg' },{ src: 'image40.jpg' },
    { src: 'image41.jpg' },{ src: 'image42.jpg' },{ src: 'image43.jpg' },{ src: 'image44.jpg' },{ src: 'image45.jpg' },{ src: 'image46.jpg' },{ src: 'image47.jpg' },{ src: 'image48.jpg' },{ src: 'image49.jpg' },{ src: 'image50.jpg' },
    { src: 'image51.jpg' },{ src: 'image52.jpg' },{ src: 'image53.jpg' },{ src: 'image54.jpg' },{ src: 'image55.jpg' }, { src: 'image56.jpg' },{ src: 'image57.jpg' },{ src: 'image58.jpg' },{ src: 'image59.jpg' },{ src: 'image60.jpg' },
    { src: 'image61.jpg' },{ src: 'image62.jpg' },{ src: 'image63.jpg' },{ src: 'image64.jpg' },{ src: 'image65.jpg' },{ src: 'image66.jpg' },{ src: 'image67.jpg' },{ src: 'image68.jpg' },{ src: 'image69.jpg' },{ src: 'image70.jpg' },
    { src: 'image71.jpg' },{ src: 'image72.jpg' },{ src: 'image73.jpg' },{ src: 'image74.jpg' },{ src: 'image75.jpg' },{ src: 'image76.jpg' },{ src: 'image77.jpg' },{ src: 'image78.jpg' },{ src: 'image79.jpg' },{ src: 'image80.jpg' },
    { src: 'image81.jpg' },{ src: 'image82.jpg' },{ src: 'image83.jpg' },{ src: 'image84.jpg' },{ src: 'image85.jpg' },{ src: 'image86.jpg' },{ src: 'image87.jpg' },{ src: 'image88.jpg' },{ src: 'image89.jpg' },{ src: 'image90.jpg' },
    { src: 'image91.jpg' },{ src: 'image92.jpg' },{ src: 'image93.jpg' },{ src: 'image94.jpg' },{ src: 'image95.jpg' },{ src: 'image96.jpg' },{ src: 'image97.jpg' },{ src: 'image98.jpg' },{ src: 'image99.jpg' },{ src: 'image100.jpg' },
    { src: 'image101.jpg' },{ src: 'image102.jpg' },{ src: 'image103.jpg' },{ src: 'image104.jpg' },{ src: 'image105.jpg' },{ src: 'image106.jpg' },{ src: 'image107.jpg' },{ src: 'image108.jpg' },{ src: 'image109.jpg' },{ src: 'image110.jpg' },
    { src: 'image111.jpg' },{ src: 'image112.jpg' },{ src: 'image113.jpg' },{ src: 'image114.jpg' },{ src: 'image115.jpg' },{ src: 'image116.jpg' },{ src: 'image117.jpg' },{ src: 'image118.jpg' },{ src: 'image119.jpg' },{ src: 'image120.jpg' },
    { src: 'image121.jpg' },{ src: 'image122.jpg' },{ src: 'image123.jpg' },{ src: 'image124.jpg' },{ src: 'image125.jpg' },{ src: 'image126.jpg' },{ src: 'image127.jpg' },{ src: 'image128.jpg' },{ src: 'image129.jpg' },{ src: 'image130.jpg' },
    { src: 'image131.jpg' },{ src: 'image132.jpg' },{ src: 'image133.jpg' },{ src: 'image134.jpg' },{ src: 'image135.jpg' },{ src: 'image136.jpg' },{ src: 'image137.jpg' },{ src: 'image138.jpg' },{ src: 'image139.jpg' },{ src: 'image140.jpg' },
    { src: 'image141.jpg' },{ src: 'image142.jpg' },{ src: 'image143.jpg' },{ src: 'image144.jpg' },{ src: 'image145.jpg' },{ src: 'image146.jpg' },{ src: 'image147.jpg' },{ src: 'image148.jpg' },{ src: 'image149.jpg' },{ src: 'image150.jpg' },
    { src: 'image151.jpg' },{ src: 'image152.jpeg' },{ src: 'image153.jpg' },{ src: 'image154.png' },{ src: 'image155.jpg' },{ src: 'image156.jpg' },{ src: 'image157.jpg' },{ src: 'image158.jpg' },{ src: 'image159.jpg' }
];

let videos = [
    { src: 'video1.mp4', thumbnail: 'thumb1.mp4' },
    { src: 'video2.mp4', thumbnail: 'thumb2.mp4' },
    { src: 'video4.mp4', thumbnail: 'thumb4.mp4' },
    { src: 'video5.mp4', thumbnail: 'thumb5.mp4' },
    { src: 'video6.mp4', thumbnail: 'thumb6.mp4' },
    { src: 'video7.mp4', thumbnail: 'thumb7.mp4' },
    { src: 'video8.mp4', thumbnail: 'thumb8.mp4' },
    { src: 'video9.mp4', thumbnail: 'thumb9.mp4' },
    { src: 'video10.mp4', thumbnail: 'thumb10.mp4' }
];

// Load images dynamically
function loadImages() {
    const imageGalleryContent = document.getElementById('image-gallery-content');
    images.forEach(image => {
        let imgElement = document.createElement('div');
        imgElement.classList.add('gallery-item');
        imgElement.innerHTML = `
            <div class="gallery-item-inner">
                <img src="${image.src}" alt="gallery image" class="clickable-image" />
            </div>
        `;
        imageGalleryContent.appendChild(imgElement);
    });
}

// Load videos dynamically
function loadVideos() {
    const videoGalleryContent = document.getElementById('video-gallery-content');
    videos.forEach(video => {
        let videoElement = document.createElement('div');
        videoElement.classList.add('gallery-item');
        videoElement.innerHTML = `
            <div class="gallery-item-inner">
                <video src="${video.src}" class="hover-video"></video>
            </div>
        `;
        videoGalleryContent.appendChild(videoElement);
    });
}

// Add functionality for video hover
function videoHoverEffect() {
    const videos = document.querySelectorAll('.hover-video');
    videos.forEach(video => {
        video.addEventListener('mouseover', () => {
            video.setAttribute('controls', 'controls');
        });
        video.addEventListener('mouseout', () => {
            video.removeAttribute('controls');
        });
    });
}

// Full-screen image functionality
function enableFullScreenImage() {
    const images = document.querySelectorAll('.clickable-image');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const close = document.querySelector('.close');

    images.forEach((img, index) => {
        img.addEventListener('click', function () {
            currentIndex = index;
            lightbox.style.display = 'block';
            lightboxImage.src = this.src;
            updateLightboxContent();
        });
    });

    close.addEventListener('click', function () {
        lightbox.style.display = 'none';
    });
}

let currentIndex = 0;

// Function to update lightbox content based on the current index
function updateLightboxContent() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxVideo = document.getElementById('lightbox-video');
    
    let currentItem = images[currentIndex] || videos[currentIndex - images.length];

    if (currentIndex < images.length) {
        // Display an image
        lightboxImage.src = currentItem.src;
        lightboxImage.style.display = 'block';
        lightboxVideo.style.display = 'none';
    } else {
        // Display a video
        lightboxVideo.src = currentItem.src;
        lightboxVideo.style.display = 'block';
        lightboxImage.style.display = 'none';
    }

    lightbox.style.display = 'block';
}

document.getElementById('nextbtn').addEventListener('click', function () {
    currentIndex = (currentIndex + 1) % (images.length + videos.length); // Loop back to the start
    updateLightboxContent();
});

document.getElementById('previous').addEventListener('click', function () {
    currentIndex = (currentIndex - 1 + images.length + videos.length) % (images.length + videos.length); // Loop to the end
    updateLightboxContent();
});

// Initial load
window.onload = function () {
    loadImages();
    loadVideos();
    videoHoverEffect();
    enableFullScreenImage();
};

//code to stop loader when website loads
var loader=document.getElementById("preloader");
window.addEventListener("load",function(){
    loader.style.display="none";
})

// Get references to the button and audio element
const musicButton = document.getElementById('musicButton');
const backgroundAudio = document.getElementById('backgroundAudio');

// Toggle play/pause on button click
let isPlaying = false;

musicButton.addEventListener('click', () => {
  if (isPlaying) {
    backgroundAudio.pause();
    musicButton.style.backgroundColor = '#4caf50'; // Change back to green when stopped
  } else {
    backgroundAudio.play();
    musicButton.style.backgroundColor = '#f44336'; // Change to red when playing
  }
  isPlaying = !isPlaying;
});
