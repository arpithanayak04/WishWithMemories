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

//for blog website open
document.getElementById("visit-site-btn").addEventListener("click", function() {
    window.open("https://aryas-tandem-tales.blogspot.com/", "_blank");
});

//for viewing more image
document.getElementById("loadimage").addEventListener("click", function() {
    window.location.href="gallery.html";
});

//for viewing more video
document.getElementById("loadvideo").addEventListener("click", function() {
    window.location.href="gallery.html#video-gallery";
});

let images = [
    { src: 'image4.jpg' },{ src: 'image54.jpg' },{ src: 'image56.jpg' },{ src: 'image60.jpg' },{ src: 'image90.jpg' },{ src: 'image111.jpg' },
    { src: 'image114.jpg' },{ src: 'image116.jpg' }
];

let videos = [
    { src: 'video1.mp4', thumbnail: 'thumb1.mp4' },
    { src: 'video2.mp4', thumbnail: 'thumb2.mp4' },
    { src: 'video4.mp4', thumbnail: 'thumb4.mp4' },
    { src: 'video5.mp4', thumbnail: 'thumb.mp4' }
];

// Load images dynamically
function loadImages() {
    const imageGalleryContent = document.getElementById('image-gallery-content1');
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

    images.forEach(img => {
        img.addEventListener('click', function () {
            lightbox.style.display = 'block';
            lightboxImage.src = this.src;
        });
    });

    close.addEventListener('click', function () {
        lightbox.style.display = 'none';
    });
}

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
});

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

//code for hire me button
document.getElementById('btnabout').addEventListener('click', function() {
    window.location.href = 'mailto:arpinayak04@gmail.com@example.com?subject=Hiring Inquiry&body=Hello, I would like to discuss a project.';
});



function sendEmail(event) {
    event.preventDefault(); // Prevent form from submitting normally

    // Collect form data
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Send email via EmailJS
    emailjs.send("service_ogzfvpn", "template_c04ln2e", {
        full_name: fullName,
        email: email,
        message: message
    })
    .then((response) => {
        // Display success message
        alert("Wishes sent successfully to Soujanya!");
        document.querySelector("form").reset(); // Reset the form fields
    }, (error) => {
        alert("Failed to send the message. Please try again.");
        console.error("EmailJS Error:", error);
    });
}
