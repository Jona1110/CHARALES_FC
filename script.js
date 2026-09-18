document.addEventListener('DOMContentLoaded', () => {
    // 1. Manejo del Menú Móvil
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const closeMenu = document.getElementById('closeMenu');

    if (hamburger && navMenu && closeMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.add('active');
        });

        closeMenu.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });

        const mobileLinks = navMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }

    // 2. Transición del Navbar 
    window.addEventListener('scroll', () => {
        const nav = document.getElementById('navbar');
        if (!nav) return;
        
        if (window.scrollY > 50) {
            nav.style.padding = '0.4rem 1.5rem';
            nav.style.width = '100%';
            nav.style.borderRadius = '0';
            nav.style.top = '0';
            nav.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
        } else {
            nav.style.padding = '0.6rem 2rem';
            nav.style.width = '90%';
            nav.style.borderRadius = '50px';
            nav.style.top = '20px';
            nav.style.boxShadow = '0 10px 30px rgba(0,0,0,0.06)';
        }
    });

    // 3. Sistema de Votos Interactivo Premium
    const voteBtns = document.querySelectorAll('.vote-btn-premium');
    voteBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            alert('¡Excelente elección! Tu voto se ha sumado a la base de datos de la afición.');
            this.style.background = '#d31e2b'; 
            this.style.borderColor = '#d31e2b';
            this.style.color = '#ffffff';
            this.innerText = '✓ REGISTRADO';
            this.disabled = true; 
            this.style.cursor = 'default';
            this.style.boxShadow = '0 4px 15px rgba(211,30,43,0.4)';
        });
    });

    // 4. Botón de Proyecto Comercial
    const btnMenuProy = document.getElementById('btnMenuProy');
    if(btnMenuProy) {
        btnMenuProy.addEventListener('click', () => {
            alert('Desarrollado por DIGITALITY: Elevando el estándar digital en el deporte de Jalisco.');
        });
    }

    // 5. Inicializar Reloj Regresivo
    updateCountdown();
    setInterval(updateCountdown, 1000);
});

// --- LÓGICA DEL CONTADOR REGRESIVO ---
function updateCountdown() {
    const countdownEl = document.getElementById("countdown");
    if (!countdownEl) return;

    // Configurado para el partido: 3 de Octubre de 2026, 16:00 HRS
    const nextMatchDate = new Date(2026, 9, 3, 16, 0, 0).getTime(); 
    const now = new Date().getTime();
    const distance = nextMatchDate - now;

    if (distance < 0) {
        countdownEl.innerHTML = "<p style='font-size:1.5rem; font-weight:900; color: #d31e2b;'>¡EL PARTIDO ESTÁ EN CURSO!</p>";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days.toString().padStart(2, '0');
    document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
    document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');
}