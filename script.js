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

// --- GENERADOR AUTOMÁTICO DE GOTAS DE AGUA (LIQUID GLASS) ---
document.addEventListener('DOMContentLoaded', () => {
    const waterContainer = document.getElementById('waterContainer');
    if (!waterContainer) return;

    function createWaterDrop() {
        const drop = document.createElement('div');
        drop.classList.add('water-drop');

        // Tamaño aleatorio para la gota
        const size = Math.random() * 60 + 30; // Entre 30px y 90px
        drop.style.width = `${size}px`;
        drop.style.height = `${size}px`;

        // Posición aleatoria dentro del Hero
        const posX = Math.random() * window.innerWidth;
        const posY = Math.random() * (window.innerHeight * 0.7); // En la parte superior/media
        drop.style.left = `${posX}px`;
        drop.style.top = `${posY}px`;

        waterContainer.appendChild(drop);

        // Eliminar el elemento del DOM al terminar la animación para optimizar rendimiento
        setTimeout(() => {
            drop.remove();
        }, 2500);
    }

    // Generar una salpicadura nueva cada 1.2 segundos
    setInterval(createWaterDrop, 1200);
});

// --- SIMULADOR DE LIGUILLA G14 ---
document.addEventListener('DOMContentLoaded', () => {
    const btnSimular = document.getElementById('btnSimular');
    if (!btnSimular) return;

    btnSimular.addEventListener('click', () => {
        // Leer goles ingresados
        const gA1 = parseInt(document.getElementById('scoreA1').value) || 0;
        const gB1 = parseInt(document.getElementById('scoreB1').value) || 0;
        
        const gA2 = parseInt(document.getElementById('scoreA2').value) || 0;
        const gB2 = parseInt(document.getElementById('scoreB2').value) || 0;

        // Base inicial de puntos y goles antes de los 2 partidos simulados
        // Charales parte con 12 pts y +6 de diferencia
        let ptsCharales = 12;
        let difCharales = 6;

        let ptsDiablos = 9;
        let difDiablos = 4;

        let ptsAcatlan = 7;
        let difAcatlan = 2;

        // Partido 1: Charales vs Diablos
        difCharales += (gA1 - gB1);
        difDiablos += (gB1 - gA1);
        if (gA1 > gB1) {
            ptsCharales += 3;
        } else if (gA1 === gB1) {
            ptsCharales += 1;
            ptsDiablos += 1;
        } else {
            ptsDiablos += 3;
        }

        // Partido 2: Charales vs Acatlán
        difCharales += (gA2 - gB2);
        difAcatlan += (gB2 - gA2);
        if (gA2 > gB2) {
            ptsCharales += 3;
        } else if (gA2 === gB2) {
            ptsCharales += 1;
            ptsAcatlan += 1;
        } else {
            ptsAcatlan += 3;
        }

        // Actualizar en el DOM de la tabla proyectada
        document.getElementById('ptsCharales').innerText = ptsCharales;
        document.getElementById('difCharales').innerText = (difCharales >= 0 ? '+' : '') + difCharales;

        document.getElementById('ptsDiablos').innerText = ptsDiablos;
        document.getElementById('difDiablos').innerText = (difDiablos >= 0 ? '+' : '') + difDiablos;

        document.getElementById('ptsAcatlan').innerText = ptsAcatlan;
        document.getElementById('difAcatlan').innerText = (difAcatlan >= 0 ? '+' : '') + difAcatlan;

        // Animación sutil de actualización
        const tableBox = document.getElementById('simTable');
        tableBox.style.transform = 'scale(1.02)';
        setTimeout(() => {
            tableBox.style.transform = 'scale(1)';
        }, 200);
    });
});

// --- CONEXIÓN AUTOMÁTICA CON GOOGLE SHEETS (APPS SCRIPT) ---
document.addEventListener('DOMContentLoaded', () => {
    const WEB_APP_URL = "https://script.google.com/macros/s/AKfycby9RJE6aLI5rzpG27QHc7u9Gzxwc564Ma-Mh3aouUPbwkuDNmZ66s3ZVn_zFk3Ct7o/exec"; // Reemplaza con tu URL generada

    if (WEB_APP_URL.includes("PEGAR_AQUI")) return; // Evita error si no está configurado aún

    fetch(WEB_APP_URL)
        .then(response => response.json())
        .then(data => {
            console.log("Datos sincronizados con Google Sheets:", data);
            
            // Aquí puedes actualizar dinámicamente los elementos del DOM 
            // de la tabla de posiciones con data.tabla y de los partidos con data.partidos.
        })
        .catch(error => console.error("Error al sincronizar con Google Sheets:", error));
});
