// language-toggle.js

document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('language-toggle');

    // Check saved language in localStorage
    const savedLanguage = localStorage.getItem('language') || 'en';
    setLanguage(savedLanguage);

    // Toggle language on button click
    toggleButton.addEventListener('click', function() {
        const currentLanguage = toggleButton.getAttribute('data-language');
        const newLanguage = currentLanguage === 'en' ? 'ru' : 'en';
        localStorage.setItem('language', newLanguage);
        setLanguage(newLanguage);
    });

    function setLanguage(language) {
        document.documentElement.lang = language;
        toggleButton.setAttribute('data-language', language);
        toggleButton.textContent = language === 'en' ? 'Switch to Russian' : 'Switch to English';

        // Update content based on language
        updateContent(language);
    }

    function updateContent(language) {
        // Define translations
        const translations = {
            en: {
                aboutUs: 'About Us',
                mission: 'Our Mission',
                goal: 'Our Goal',
                principles: 'Our Principles:',
                // Add all other translations here
            },
            ru: {
                aboutUs: 'О нас',
                mission: 'Наша миссия',
                goal: 'Наша цель',
                principles: 'Наши принципы:',
                // Add all other translations here
            }
        };

        // Get elements and update their content
        document.querySelectorAll('[data-translate]').forEach(el => {
            const key = el.getAttribute('data-translate');
            el.textContent = translations[language][key] || el.textContent;
        });
    }
});
