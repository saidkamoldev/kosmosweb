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
