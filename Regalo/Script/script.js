const startDate = new Date(2025, 9, 18); // Octubre 18
const giftBox = document.getElementById('gift-click');
const overlay = document.getElementById('gift-overlay');
const mainContent = document.getElementById('main-content');
const slider = document.querySelector('.horizontal-slider');
const cards = document.querySelectorAll('.card-trigger');

let currentSlide = 0;
const totalSlides = 9;
let typewriterActive = false;

// 1. ABRIR REGALO
giftBox.addEventListener('click', () => {
    giftBox.classList.add('open');
    document.getElementById('gift-text').innerText = "Son mis dedos (*/ω＼*) Ahre";
    
    setTimeout(() => {
        overlay.classList.add('fade-out');
        setTimeout(() => {
            overlay.style.display = 'none';
            mainContent.classList.remove('hidden');
            iniciarContador();
        }, 1000);
    }, 1000);
});

// 2. NAVEGACIÓN (Solo clic en tarjeta)
cards.forEach(card => {
    card.addEventListener('click', () => {
        if (currentSlide < totalSlides - 1) {
            currentSlide++;
            slider.style.transform = `translateX(-${currentSlide * 100}vw)`;
            
            if (currentSlide === totalSlides - 1 && !typewriterActive) {
                escribirMensaje();
            }
        }
    });
});

// 3. CONTADOR
function iniciarContador() {
    setInterval(() => {
        const diff = new Date() - startDate;
        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((diff % (1000 * 60)) / 1000);
        document.getElementById('counter-fixed').innerText = 
            `Juntos: ${d}d ${h}h ${m}m ${s}s`;
    }, 1000);
}

// 4. MÁQUINA DE ESCRIBIR
function escribirMensaje() {
    typewriterActive = true;
    const texto = "Disculpa si hay algún fallido en un lado que otro, pero esto sería mi regalo de navidad, eso y mi prensencia, que aunque ya no sea el día, hay que pasarlo en familia, y algún día tú serás de la mía.";
    let i = 0;
    const target = document.getElementById('final-message');
    target.innerHTML = "";
    
    function type() {
        if (i < texto.length) {
            target.innerHTML += texto.charAt(i);
            i++;
            setTimeout(type, 60);
        }
    }
    type();
}

function reiniciar() {
    currentSlide = 0;
    typewriterActive = false;
    slider.style.transform = `translateX(0)`;
    document.getElementById('final-message').innerHTML = "";
}