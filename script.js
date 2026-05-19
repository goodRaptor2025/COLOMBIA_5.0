let currentLang = 'es';

function toggleLanguage() {
    const btn = document.querySelector('.lang-btn');
    
    if (currentLang === 'es') {
        // Ocultar componentes en Español, mostrar en Inglés
        document.querySelectorAll('.lang-es').forEach(el => el.style.display = 'none');
        document.querySelectorAll('.lang-en').forEach(el => el.style.display = 'block');
        
        // Traducir dinámicamente los elementos de menú e inputs con atributos de datos
        document.querySelectorAll('[data-en]').forEach(el => {
            el.textContent = el.getAttribute('data-en');
        });

        btn.textContent = 'Español';
        currentLang = 'en';
    } else {
        // Ocultar componentes en Inglés, mostrar en Español
        document.querySelectorAll('.lang-es').forEach(el => el.style.display = 'block');
        document.querySelectorAll('.lang-en').forEach(el => el.style.display = 'none');
        
        document.querySelectorAll('[data-es]').forEach(el => {
            el.textContent = el.getAttribute('data-es');
        });

        btn.textContent = 'English';
        currentLang = 'es';
    }
}

// Asegurar estado por defecto en español al cargar el navegador
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.lang-en').forEach(el => el.style.display = 'none');
});