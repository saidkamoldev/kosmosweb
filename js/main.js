document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById('modalForm');
    var closeBtn = document.querySelector('.modal .close');

    var applyButtons = document.querySelectorAll('.applyButton');
    applyButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            modal.style.display = 'flex'; // Faqat tugma bosilganda modalni ko'rsatish
        });
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none'; // Modalni yashirish
    });

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none'; // Modalni yashirish
        }
    };
});


document.addEventListener("DOMContentLoaded", function() {
    var iframe = document.getElementById('videoFrame');
    // URLga autoplay va mute parametrlarini qo'shing
    iframe.src += "&autoplay=1&mute=1";
});

function closeVideo() {
    var videoContainer = document.getElementById('videoContainer');
    videoContainer.style.display = 'none';
    // Video to'xtatish
    var iframe = document.getElementById('videoFrame');
    iframe.src = iframe.src; // Reload the iframe to stop the video
    
}

document.addEventListener("DOMContentLoaded", function() {
    var iframe = document.getElementById('videoFrame');
    var src = iframe.getAttribute('src');
    iframe.setAttribute('src', src + (src.includes('?') ? '&' : '?') + 'autoplay=1&mute=1');
});


