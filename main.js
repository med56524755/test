// JavaScript to handle subtitle change

document.addEventListener("DOMContentLoaded", function() {
    const videoPlayer = document.getElementById('videoPlayer');
    const selectedSubtitleElement = document.getElementById('selectedSubtitle');

    videoPlayer.addEventListener('loadedmetadata', function() {
        // Set default subtitle language
        videoPlayer.textTracks[0].mode = 'showing'; // Arabic
        selectedSubtitleElement.innerText = 'Arabic';
    });

    videoPlayer.addEventListener('subtitlestrackchange', function() {
        const selectedSubtitle = videoPlayer.textTracks[videoPlayer.textTracks.length - 1].language;
        selectedSubtitleElement.innerText = selectedSubtitle;
    });
});
