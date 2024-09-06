function createClouds() {
    const cloudContainer = document.createElement('div');
    cloudContainer.className = 'cloud-container';
    document.body.appendChild(cloudContainer);

    const isPortrait = window.innerHeight > window.innerWidth;
    const minSizePercent = isPortrait ? 20 : 15;
    const maxSizePercent = isPortrait ? 30 : 25;

    for (let i = 1; i <= 10; i++) {
        const cloud = document.createElement('img');
        cloud.src = `/images/cloud_${i}.png`;
        cloud.className = 'cloud';
        
        const sizePercent = Math.random() * (maxSizePercent - minSizePercent) + minSizePercent;
        
        const sizeDimension = isPortrait ? 'vw' : 'vh';
        cloud.style.width = `${sizePercent}${sizeDimension}`;
        
        let x, y;
        if (Math.random() < 0.7) {
            x = Math.random() < 0.5 ? Math.random() * 20 : 80 + Math.random() * 20;
            y = Math.random() * 100;
        } else {
            x = Math.random() * 100;
            y = Math.random() < 0.5 ? Math.random() * 20 : 80 + Math.random() * 20;
        }
        
        cloud.style.left = `${x}vw`;
        cloud.style.top = `${y}vh`;
        
        const duration = Math.random() * 20 + 30;
        cloud.style.animation = `floatCloud ${duration}s infinite ease-in-out`;
        
        cloudContainer.appendChild(cloud);
    }
}

let animationsInitialized = false;

function animatePolaroids() {
    if (animationsInitialized) return;

    const polaroids = [
        { id: 'shakespeare', angle: 0, zIndex: 5, offsetX: 85, offsetY: -55, scale: 0.9 },
        { id: 'royal-opera-house', angle: -40, zIndex: 4, offsetX: -10, offsetY: 10 },
        { id: 'st-pauls', angle: -10, zIndex: 3, offsetX: 220, offsetY: 230, scale: 1.1 },
        { id: 'stratford', angle: 15, zIndex: 2, offsetX: 200, offsetY: 50 },
        { id: 'the-globe', angle: 20, zIndex: 1, offsetX: -20, offsetY: 220 },
    ];

    polaroids.forEach(({ id, angle, zIndex, offsetX, offsetY, scale }, index) => {
        const polaroid = document.getElementById(id);
        
        polaroid.style.transform = 'translate(-0%, -60%) rotate(0deg)';
        polaroid.style.zIndex = zIndex;

        setTimeout(() => {
            polaroid.style.transition = 'transform 1s ease-out';
            polaroid.style.transform = `
                translate(calc(-50% + ${offsetX}px), calc(-50% + ${offsetY}px))
                rotate(${angle}deg)
                ${scale ? `scale(${scale})` : ''}
            `;

            setTimeout(() => {
                const duration = 15 + Math.random() * 10;
                const xMove = (Math.random() - 0.5) * 20;
                const yMove = (Math.random() - 0.5) * 20;
                const rotateAdd = (Math.random() - 0.5) * 6;

                polaroid.style.transition = `transform ${duration}s ease-in-out infinite`;
                polaroid.style.animation = `float${index + 1} ${duration}s ease-in-out infinite`;

                const keyframes = `
                    @keyframes float${index + 1} {
                        0%, 100% {
                            transform: translate(calc(-50% + ${offsetX}px), calc(-50% + ${offsetY}px))
                                       rotate(${angle}deg) ${scale ? `scale(${scale})` : ''};
                        }
                        50% {
                            transform: translate(calc(-50% + ${offsetX + xMove}px), calc(-50% + ${offsetY + yMove}px))
                                       rotate(${angle + rotateAdd}deg) ${scale ? `scale(${scale})` : ''};
                        }
                    }
                `;
                const styleSheet = document.createElement("style");
                styleSheet.type = "text/css";
                styleSheet.innerText = keyframes;
                document.head.appendChild(styleSheet);
            }, 1000);
        }, 100 * index);
    });

    animationsInitialized = true;
}

function toggleMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuItems = document.querySelector('.menu-items');
    menuToggle.classList.toggle('open');
    menuItems.classList.toggle('show');
}

// Event listeners
window.addEventListener('load', createClouds);
window.addEventListener('load', animatePolaroids);
window.addEventListener('resize', () => {
    const existingContainer = document.querySelector('.cloud-container');
    if (existingContainer) {
        existingContainer.remove();
    }
    createClouds();
});

// Close the menu when clicking outside
document.addEventListener('click', (event) => {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuItems = document.querySelector('.menu-items');
    if (!menuToggle.contains(event.target) && !menuItems.contains(event.target)) {
        menuToggle.classList.remove('open');
        menuItems.classList.remove('show');
    }
});

// Submenu functionality
document.addEventListener('DOMContentLoaded', () => {
    const submenuParents = document.querySelectorAll('.submenu-parent');
    
    submenuParents.forEach(parent => {
        parent.addEventListener('click', (e) => {
            e.preventDefault();
            const submenu = parent.nextElementSibling;
            const toggle = parent.querySelector('.submenu-toggle');
            submenu.classList.toggle('show');
            toggle.classList.toggle('open');
        });
    });
});