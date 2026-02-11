// AOS.init({ duration: 1200 });

// const photos = ['images/photo1.jpg', 'images/photo2.jpg', 'images/photo3.jpg', 'images/photo4.jpg', 'images/photo5.jpg', 'images/photo6.jpg'];

// function fillReels() {
//     // Horizontal Reels
//     ['reel1', 'reel2', 'reel3', 'reel4'].forEach(id => {
//         const container = document.getElementById(id);
//         let reelImages = [...photos].sort(() => Math.random() - 0.5);
//         [...reelImages, ...reelImages].forEach(src => {
//             const div = document.createElement('div');
//             div.className = 'reel-item';
//             div.style.backgroundImage = `url('${src}')`;
//             container.appendChild(div);
//         });
//     });

//     // Vertical Reel
//     const vContainer = document.getElementById('v-reel');
//     let vImages = [...photos].sort(() => Math.random() - 0.5);
//     [...vImages, ...vImages].forEach(src => {
//         const div = document.createElement('div');
//         div.className = 'v-item';
//         div.style.backgroundImage = `url('${src}')`;
//         vContainer.appendChild(div);
//     });
// }
// fillReels();



// setInterval(() => {
//     const flowers = ['🌸', '🌹', '🌼', '🌷'];
//     const f = document.createElement('div');
//     f.className = 'flower';
//     f.innerText = flowers[Math.floor(Math.random() * flowers.length)];
//     f.style.left = Math.random() * 100 + 'vw';
//     f.style.animationDuration = Math.random() * 4 + 2 + 's';
//     document.body.appendChild(f);
//     setTimeout(() => f.remove(), 6000);
// }, 600);

// function celebrate() {
//     const song = document.getElementById('bday-song');
//     song.currentTime = 0; 
//     song.play().catch(error => console.error("Audio error: ", error));

//     const contentBox = document.querySelector('.content-box[data-aos="zoom-out"]');
//     if (contentBox) {
//         const title = contentBox.querySelector('h1');
//         const instruction = contentBox.querySelector('p');
//         if (title) title.style.display = 'none';
//         if (instruction) instruction.style.display = 'none';
//     }

//     // Dono flames ko hide karein
//     document.getElementById('flame-left').style.display = 'none';
//     document.getElementById('flame-right').style.display = 'none';
    
//     document.getElementById('wish-msg').style.display = 'block';

//     var end = Date.now() + (5 * 1000);
//     (function frame() {
//         confetti({ particleCount: 20, angle: 60, spread: 60, origin: { x: 0 }, colors: ['#f1c40f', '#fff', '#6d4c41'] });
//         confetti({ particleCount: 20, angle: 120, spread: 60, origin: { x: 1 }, colors: ['#f1c40f', '#fff', '#6d4c41'] });
//         if (Date.now() < end) requestAnimationFrame(frame);
//     }());

//     // Emoji shower logic (purana wala hi use karein)
//     for(let i=0; i<40; i++) {
//         setTimeout(() => {
//             const icons = ['🍕', '☕', '🍫', '🌸', '🍩', '🎂'];
//             const e = document.createElement('div');
//             e.className = 'flower'; // CSS fixed h isliye ab ye girenge
//             e.innerText = icons[Math.floor(Math.random() * icons.length)];
//             e.style.left = Math.random() * 100 + 'vw';
//             e.style.fontSize = '35px';
//             e.style.animationDuration = '2.5s';
//             document.body.appendChild(e);
//             setTimeout(() => e.remove(), 2500);
//         }, i * 120);
//     }
// }



AOS.init({ duration: 1200 });

const photos = ['images/photo1.jpg', 'images/photo2.jpg', 'images/photo3.jpg', 'images/photo4.jpg', 'images/photo5.jpg', 'images/photo6.jpg'];

// Gift Open aur Music Logic
function openGift() {
    const bgMusic = document.getElementById('bg-music');
    const intro = document.getElementById('intro-screen');
    const main = document.getElementById('main-site');

    // Gift animation aur transition
    intro.style.opacity = "0";
    setTimeout(() => {
        intro.style.display = "none";
        main.style.visibility = "visible";
        main.style.opacity = "1";
        
        // --- Music starting point fix ---
        // 2 minute 10 second = 130 seconds
        // bgMusic.currentTime = 130; this is for background_music.mp3
        
        bgMusic.currentTime = 20; // this is for background_music2.mp3 

        bgMusic.play().catch(e => console.log("Music play blocked by browser."));
    }, 1000);
}



function celebrate() {
    const bgMusic = document.getElementById('bg-music');
    const bdaySong = document.getElementById('bday-song');
    
    bgMusic.pause(); // Purana music band
    bdaySong.currentTime = 0; 
    bdaySong.play().catch(error => console.error(error));

    document.getElementById('flame-left').style.display = 'none';
    document.getElementById('flame-right').style.display = 'none';
    document.getElementById('wish-msg').style.display = 'block';

    const contentBox = document.querySelector('.content-box[data-aos="zoom-out"]');
    if (contentBox) {
        contentBox.querySelector('h1').style.display = 'none';
        contentBox.querySelector('p').style.display = 'none';
    }

    // Confetti
    var end = Date.now() + (5 * 1000);
    (function frame() {
        confetti({ particleCount: 30, angle: 60, spread: 55, origin: { x: 0 }, colors: ['#f1c40f', '#fff'] });
        confetti({ particleCount: 30, angle: 120, spread: 55, origin: { x: 1 }, colors: ['#f1c40f', '#fff'] });
        if (Date.now() < end) requestAnimationFrame(frame);
    }());

    // Special Emoji Shower
    for(let i=0; i<40; i++) {
        setTimeout(() => {
            const icons = ['🍕', '☕', '🍫', '🌸', '🎂','🏎️', '🎈'];
            const e = document.createElement('div');
            e.className = 'flower'; 
            e.innerText = icons[Math.floor(Math.random() * icons.length)];
            e.style.left = Math.random() * 100 + 'vw';
            e.style.fontSize = '35px';
            e.style.animationDuration = '2.5s';
            document.body.appendChild(e);
            setTimeout(() => e.remove(), 2500);
        }, i * 120);
    }
}

// Background Falling Flowers
setInterval(() => {
    const flowers = ['🌸', '🌹', '🌼', '🌷'];
    const f = document.createElement('div');
    f.className = 'flower';
    f.innerText = flowers[Math.floor(Math.random() * flowers.length)];
    f.style.left = Math.random() * 100 + 'vw';
    f.style.animationDuration = Math.random() * 4 + 2 + 's';
    document.body.appendChild(f);
    setTimeout(() => f.remove(), 6000);
}, 600);


// --- Dynamic Reel Filler (Wapas Slider banane ke liye) ---
function fillReels() {
    ['reel1', 'reel2', 'reel3', 'reel4'].forEach(id => {
        const container = document.getElementById(id);
        if(!container) return;
        
        // Photos ko shuffle karke double kar dete hain loop ke liye
        let reelImages = [...photos].sort(() => Math.random() - 0.5);
        [...reelImages, ...reelImages, ...reelImages].forEach(src => {
            const div = document.createElement('div');
            div.className = 'reel-item';
            div.style.backgroundImage = `url('${src}')`;
            container.appendChild(div);
        });
    });

    // Vertical Reel for Last Section
    const vContainer = document.getElementById('v-reel');
    if(vContainer) {
        let vImages = [...photos].sort(() => Math.random() - 0.5);
        [...vImages, ...vImages].forEach(src => {
            const div = document.createElement('div');
            div.className = 'v-item';
            div.style.backgroundImage = `url('${src}')`;
            vContainer.appendChild(div);
        });
    }
}
fillReels();

// ...Celebrate aur Flower logic waisa hi rahega...