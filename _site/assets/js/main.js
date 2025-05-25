// Theme Toggle Functionality
const initThemeToggle = () => {
    const toggleSwitches = document.querySelectorAll('#theme-toggle, #theme-toggle-mobile');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

    // Initialize theme based on localStorage or system preference
    const initTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            document.body.classList.toggle('dark-theme', savedTheme === 'dark');
            toggleSwitches.forEach(t => t.checked = savedTheme === 'dark');
        } else {
            const systemTheme = prefersDarkScheme.matches ? 'dark' : 'light';
            document.body.classList.toggle('dark-theme', systemTheme === 'dark');
            toggleSwitches.forEach(t => t.checked = systemTheme === 'dark');
            localStorage.setItem('theme', systemTheme);
        }
    };

    // Handle theme toggle
    const handleThemeToggle = (toggleSwitch) => {
        const isDark = toggleSwitch.checked;
        document.body.classList.toggle('dark-theme', isDark);
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        toggleSwitches.forEach(t => t.checked = isDark);
    };

    // Initialize theme
    initTheme();

    // Add event listeners
    toggleSwitches.forEach(toggleSwitch => {
        toggleSwitch.addEventListener('change', () => handleThemeToggle(toggleSwitch));
    });

    // Listen for system theme changes
    prefersDarkScheme.addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            const systemTheme = e.matches ? 'dark' : 'light';
            document.body.classList.toggle('dark-theme', systemTheme === 'dark');
            toggleSwitches.forEach(t => t.checked = systemTheme === 'dark');
        }
    });
};

// Mobile Menu Functionality
const initMobileMenu = () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileLinks = document.querySelectorAll('.mobile-nav a');

    const toggleMenu = () => {
        menuToggle.classList.toggle('active');
        mobileNav.classList.toggle('active');
        document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
    };

    menuToggle.addEventListener('click', toggleMenu);

    // Close menu when clicking a link
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileNav.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (mobileNav.classList.contains('active') && 
            !e.target.closest('.mobile-nav') && 
            !e.target.closest('.menu-toggle')) {
            toggleMenu();
        }
    });
};

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initThemeToggle();
    initMobileMenu();
}); 