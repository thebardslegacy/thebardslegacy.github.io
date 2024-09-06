document.addEventListener('DOMContentLoaded', function() {
    // Load CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://thebardslegacy.github.io/styles/main.css';
    document.head.appendChild(link);

    // Load menu
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