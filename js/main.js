document.addEventListener("DOMContentLoaded", function() {
    // Modalni boshqarish uchun o'zgaruvchini olish
    var modal = document.getElementById('modalForm');
    var closeBtn = document.querySelector('.close');

    // "Ariza Qoldirish" tugmalariga murojaat qilish va ular uchun voqea qo'shish
    var applyButtons = document.querySelectorAll('.applyButton');
    applyButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            modal.style.display = 'flex'; // Faqat tugma bosilganda modalni ko'rsatish
        });
    });

    // Yopish tugmasiga voqea qo'shish
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none'; // Modalni yashirish
    });

    // Tashqi maydonga bosilganda modalni yopish
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none'; // Modalni yashirish
        }
    };
});


