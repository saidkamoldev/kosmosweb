document.getElementById('applyButton').addEventListener('click', function() {
    document.getElementById('modalForm').style.display = 'flex'; // Display as flex to center vertically
});

document.getElementsByClassName('close')[0].addEventListener('click', function() {
    document.getElementById('modalForm').style.display = 'none';
});

window.onclick = function(event) {
    if (event.target == document.getElementById('modalForm')) {
        document.getElementById('modalForm').style.display = 'none';
    }
}
