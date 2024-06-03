document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.contact-form button').addEventListener('click', function() {
        var name = document.querySelector('.contact-form input[type="text"]').value;
        var phone_number = document.querySelector('.contact-form input[type="tel"]').value;

        var data = {
            name: name,
            phone_number: phone_number
        };

        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://admin.kosmostj.uz/client/', true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onload = function() {
            if (xhr.status === 200) {
                console.log(xhr.responseText);
            }
        };

        xhr.send(JSON.stringify(data));
    });
});


  