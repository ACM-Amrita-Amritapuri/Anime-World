// Function to toggle dark mode
function toggleDarkMode() {
    const body = document.body;
    const button = document.getElementById('dark-mode-toggle');
    
    if (body.classList.contains('dark-mode')) {
        // Disable dark mode
        body.classList.remove('dark-mode');
        button.innerText = 'Dark Mode';

    } else {
        // Enable dark mode
        body.classList.add('dark-mode');
        button.innerText = 'Light Mode';
    }
}

// Check if the user's preference is set to dark mode (optional)
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    const button = document.getElementById('dark-mode-toggle');
    button.innerText = 'Dark Mode';
}

