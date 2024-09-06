document.addEventListener('DOMContentLoaded', function() {
    fetch('https://thebardslegacy.github.io/menu.html')
        .then(response => response.text())
        .then(html => {
            document.body.insertAdjacentHTML('afterbegin', html);
            // After inserting the menu, initialize any necessary JavaScript
            if (window.initializeMenu) {
                window.initializeMenu();
            }
        })
        .catch(error => console.error('Error loading menu:', error));
});