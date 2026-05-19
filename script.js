let currentLang = 'es';

function toggleLanguage() {
    const btn = document.querySelector('.lang-btn');
    
    if (currentLang === 'es') {
        document.querySelectorAll('.lang-es').forEach(el => el.style.display = 'none');
        document.querySelectorAll('.lang-en').forEach(el => el.style.display = 'block');
        
        document.querySelectorAll('[data-en]').forEach(el => {
            el.textContent = el.getAttribute('data-en');
        });

        btn.textContent = 'Español';
        currentLang = 'en';
    } else {
        document.querySelectorAll('.lang-es').forEach(el => el.style.display = 'block');
        document.querySelectorAll('.lang-en').forEach(el => el.style.display = 'none');
        
        document.querySelectorAll('[data-es]').forEach(el => {
            el.textContent = el.getAttribute('data-es');
        });

        btn.textContent = 'English';
        currentLang = 'es';
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.lang-en').forEach(el => el.style.display = 'none');
});