// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Show loading screen
    const showLoadingScreen = () => {
        const loadingScreen = document.querySelector('.showSeven');
        loadingScreen.style.display = 'block';
        loadingScreen.style.opacity = '1';
    };

    // Hide loading screen
    const hideLoadingScreen = () => {
        const loadingScreen = document.querySelector('.showSeven');
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500); // Match the CSS transition duration
    };

    // Show main content
    const showMainContent = () => {
        const mainContent = document.querySelector('.hideSeven');
        mainContent.style.display = 'block';
        setTimeout(() => {
            mainContent.style.opacity = '1';
        }, 50);
    };

    // Initialize the sequence
    showLoadingScreen();
    
    // Hide loading screen after 2.5 seconds
    setTimeout(hideLoadingScreen, 2500);
    
    // Show main content after loading screen is hidden
    setTimeout(showMainContent, 3000);

    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});