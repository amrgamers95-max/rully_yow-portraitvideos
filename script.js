// 1. Generate Twinkling Stars Background
const starsContainer = document.getElementById('stars-container');
const starCount = 150;

if (starsContainer) {
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const size = Math.random() * 3 + 1;
        const delay = Math.random() * 5;
        const duration = Math.random() * 3 + 2;

        star.style.left = `${x}vw`;
        star.style.top = `${y}vh`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.animationDelay = `${delay}s`;
        star.style.animationDuration = `${duration}s`;

        starsContainer.appendChild(star);
    }
}

// 2. Intersection Observer for Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.hidden').forEach(el => observer.observe(el));

// 3. Render Portrait (Shorts) Videos Dynamically
// Semua ID diekstrak dari URL YouTube yang kamu berikan, berurutan.
const portraitVideos = {
    "2026": [
        "zjn_2kGBnlo", "dR5CWbUoCvU", "jjy_7LDhDro", "xy1jIt4C2uA", "wgu_G_PFsfE", 
        "xDXbzWsdLjM", "VnX0tZarUbI", "zUlhXbspGNs", "byYstCwFSbY", "C3J1MK0ZRWA", 
        "-G4mkAZ_xws", "q46rO2J2Vqs", "aYDOADlErgM", "_g6IJ1h3lu0", "F3egflxjVFQ", 
        "L-Q9BOg9tgM", "c-aTZ5QMG6g", "jfBwGVPxyMI", "hil0ZYbEAsI"
    ],
    "2025": [
        "5X_DGoh7QJg", "vIu3tcFAKD4", "E59wJBLPqio", "Mo864peRErU", "SOge_9CA4kk", 
        "KDs-Zs3Yfp0", "vqKLwrK487w", "mwgPw3We8Jg", "26_3MDytruU", "Y3-oAd8mXLI", 
        "woDpW2zwmZU", "crM1E_K7aH0", "Gm_Y6F3A3Pg", "YOHn8JGuR4U", "nKa51bAtecQ", 
        "x15yLqWm9Yk", "dqNvsp4rauc", "WOleqi2z45M", "qBevK9jdlPc", "NbV7TiVpHRk", 
        "E5JBThJc0w8", "H2C-CWtWNro", "U8Rum-1Mmvo", "B5i6xIjcFpg", "1K37A5xoiXU", 
        "92jaBnJhEZA", "0g2LF3KXGoY", "Q49loXQL5wQ", "YWeLYIN8qfM", "68ZLSYBFIwE", 
        "OZqFlB8du-k", "OkJr8Sg4XJk", "zL8VsiPetJI", "mNVDJAib_wE", "nLG8zFXeJ54", 
        "sIRGfCyo47k", "CvY8Xj-b3Gc", "LvpI4oy1ysY", "jTkZaBFjhfA", "EDJzCsmE7dw", 
        "-5qn6hNfLfw", "DAtIa_fSHP8", "Vf2V5fZKyuc", "QE5K42XSB68", "NbidViKa7h0", 
        "IStZCda6WmE", "_iC8v5B1Xk4", "2Y6zkje_jVo", "cMG4nqiWgNo", "FrmWa1ciEzo"
    ],
    "2024": [
        "y0jhU2feoSg"
    ]
};

// Fungsi ini akan mencari tempat kosong di portrait.html lalu mengisi videonya
function loadPortraitVideos() {
    for (const year in portraitVideos) {
        const container = document.getElementById(`grid-${year}-p`);
        if (container) {
            let iframesHTML = '';
            portraitVideos[year].forEach(videoId => {
                // Memasukkan setiap video ID ke dalam tag iframe embed
                iframesHTML += `<iframe loading="lazy" src="https://www.youtube.com/embed/${videoId}" allowfullscreen></iframe>`;
            });
            container.innerHTML = iframesHTML;
        }
    }
}

// Jalankan fungsi pengisian video ketika website dimuat
document.addEventListener('DOMContentLoaded', loadPortraitVideos);