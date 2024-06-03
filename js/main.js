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
    var videoFrame = document.getElementById('videoFrame');

    // Video ijrosini to'xtatish
    videoFrame.src = ""; // Bu video manzilini tozalaydi va shu tariqa videoni to'xtatadi

    // Video oynasini yashirish
    videoContainer.style.display = 'none';
}


document.addEventListener("DOMContentLoaded", function() {
    var iframe = document.getElementById('videoFrame');
    var src = iframe.getAttribute('src');
    iframe.setAttribute('src', src + (src.includes('?') ? '&' : '?') + 'autoplay=1&mute=1');
});



