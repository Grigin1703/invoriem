$(document).ready(function(){
	$(".owl-carousel").owlCarousel({
		responsive: {
			0: {
				items: 2,
				margin: 32,
				loop: true,
				dots: false,
			},

			601: {
				items: 3,
				dots: false,
				margin: 32,
				loop: true,
			},

			1001: {
				items: 3,
				margin: 48,
				loop: true,
				dots: false,
			},
		},

	});
 });

 /* VIDEO */

 const videoBtn = document.querySelector('#video-btn');
 const videoPicture = document.querySelector('.video-picture');
 const videoWrapper = document.querySelector('.video');
 const video = document.querySelector('#video-file');


 videoWrapper.addEventListener('click', function(){
	
	if (video.paused) {
		videoPicture.classList.add('none');
		videoWrapper.classList.remove('video-overlay');
		videoBtn.classList.add('none');
		video.play()
	} else {
		videoWrapper.classList.add('video-overlay');
		videoBtn.classList.remove('none');
		video.pause();
	}
 })