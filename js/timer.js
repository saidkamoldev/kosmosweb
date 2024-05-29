let timer;

function setEndTime() {
    const endTime = new Date();
    endTime.setSeconds(endTime.getSeconds() + (2 * 86400 + 2 * 3600 + 18 * 60 + 54)); // 2 kun, 2 soat, 18 daqiqa, 54 soniya qo'shish
    return endTime;
}

function startTimer() {
    let endTime = setEndTime(); // Har safar timer qayta ishga tushirilganda yangi tugash vaqtini belgilaymiz

    if (timer) {
        clearInterval(timer);
    }

    timer = setInterval(function() {
        const now = new Date();
        const distance = endTime - now;

        if (distance < 0) {
            clearInterval(timer);
            document.getElementById("days").textContent = "00";
            document.getElementById("hours").textContent = "00";
            document.getElementById("minutes").textContent = "00";
            document.getElementById("seconds").textContent = "00";
            startTimer(); // Timer tugagandan so'ng qayta ishga tushirish
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").textContent = days < 10 ? `0${days}` : days;
        document.getElementById("hours").textContent = hours < 10 ? `0${hours}` : hours;
        document.getElementById("minutes").textContent = minutes < 10 ? `0${minutes}` : minutes;
        document.getElementById("seconds").textContent = seconds < 10 ? `0${seconds}` : seconds;
    }, 1000);
}

// HTML sahifasida Timer'ni birinchi marta ishga tushirish uchun
document.addEventListener("DOMContentLoaded", function() {
    startTimer();
});
