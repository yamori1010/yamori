/* ═══════════════════════════════════════════════════════════
   🌸 Birthday Surprise — Interactive Experience Engine
   ═══════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  // ── CONFIG ──
  const CONFIG = {
    particleCount: 30,
    heartCount: 15,
    sakuraCount: 20,
    loadingDuration: 3500,
    // Set your anniversary/relationship start date here for the countdown
    loveStartDate: new Date('2024-01-01T00:00:00'),
  };

  // ═══════════════════════════════════════════════════════════
  // LOADING SCREEN
  // ═══════════════════════════════════════════════════════════
  function initLoadingScreen() {
    const petalsContainer = document.getElementById('loadingPetals');
    const sparklesContainer = document.getElementById('loadingSparkles');

    // Create loading petals
    const petalEmojis = ['🌸', '🏵️', '✿', '❀', '🌷'];
    for (let i = 0; i < 15; i++) {
      const petal = document.createElement('div');
      petal.className = 'loading-petal';
      petal.textContent = petalEmojis[Math.floor(Math.random() * petalEmojis.length)];
      petal.style.left = Math.random() * 100 + '%';
      petal.style.animationDelay = Math.random() * 5 + 's';
      petal.style.animationDuration = (4 + Math.random() * 3) + 's';
      petal.style.fontSize = (0.8 + Math.random() * 0.8) + 'rem';
      petalsContainer.appendChild(petal);
    }

    // Create sparkles
    for (let i = 0; i < 25; i++) {
      const sparkle = document.createElement('div');
      sparkle.className = 'sparkle';
      sparkle.style.left = Math.random() * 100 + '%';
      sparkle.style.top = Math.random() * 100 + '%';
      sparkle.style.animationDelay = Math.random() * 3 + 's';
      sparkle.style.animationDuration = (1.5 + Math.random() * 2) + 's';
      sparkle.style.width = (2 + Math.random() * 4) + 'px';
      sparkle.style.height = sparkle.style.width;
      sparklesContainer.appendChild(sparkle);
    }

    // Dismiss loading screen
    setTimeout(() => {
      const loadingScreen = document.getElementById('loadingScreen');
      loadingScreen.classList.add('fade-out');
      setTimeout(() => {
        loadingScreen.style.display = 'none';
        animateHeroEntrance();
      }, 800);
    }, CONFIG.loadingDuration);
  }

  // ═══════════════════════════════════════════════════════════
  // CUSTOM CURSOR
  // ═══════════════════════════════════════════════════════════
  function initCursor() {
    if (window.innerWidth <= 768) return;

    const glow = document.getElementById('cursorGlow');
    const trail = document.getElementById('cursorTrail');
    let mouseX = 0, mouseY = 0;
    let trailX = 0, trailY = 0;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      glow.style.left = mouseX + 'px';
      glow.style.top = mouseY + 'px';
    });

    function animateTrail() {
      trailX += (mouseX - trailX) * 0.08;
      trailY += (mouseY - trailY) * 0.08;
      trail.style.left = trailX + 'px';
      trail.style.top = trailY + 'px';
      requestAnimationFrame(animateTrail);
    }
    animateTrail();

    // Enlarge on hover over interactive elements
    document.querySelectorAll('a, button, .gallery-item, .surprise-box, .nav-dot, .music-toggle').forEach(el => {
      el.addEventListener('mouseenter', () => {
        glow.style.transform = 'translate(-50%, -50%) scale(2)';
        glow.style.background = 'radial-gradient(circle, rgba(244, 114, 182, 0.8), rgba(236, 72, 153, 0.3), transparent)';
      });
      el.addEventListener('mouseleave', () => {
        glow.style.transform = 'translate(-50%, -50%) scale(1)';
        glow.style.background = 'radial-gradient(circle, rgba(244, 114, 182, 0.6), rgba(236, 72, 153, 0.2), transparent)';
      });
    });
  }

  // ═══════════════════════════════════════════════════════════
  // FLOATING PARTICLES
  // ═══════════════════════════════════════════════════════════
  function initParticles() {
    const container = document.getElementById('particlesContainer');

    for (let i = 0; i < CONFIG.particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      const size = 3 + Math.random() * 8;
      particle.style.width = size + 'px';
      particle.style.height = size + 'px';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 15 + 's';
      particle.style.animationDuration = (10 + Math.random() * 20) + 's';
      particle.style.opacity = 0.1 + Math.random() * 0.3;

      // Color variations
      const colors = [
        'rgba(244, 114, 182, 0.4)',
        'rgba(251, 207, 232, 0.3)',
        'rgba(192, 132, 252, 0.3)',
        'rgba(253, 164, 175, 0.3)',
      ];
      particle.style.background = `radial-gradient(circle, ${colors[Math.floor(Math.random() * colors.length)]}, transparent)`;
      container.appendChild(particle);
    }
  }

  // ═══════════════════════════════════════════════════════════
  // FLOATING HEARTS
  // ═══════════════════════════════════════════════════════════
  function initFloatingHearts() {
    const container = document.getElementById('floatingHearts');
    const hearts = ['💕', '💖', '💗', '💓', '💘', '💝', '♥', '❤️‍🔥'];

    for (let i = 0; i < CONFIG.heartCount; i++) {
      const heart = document.createElement('div');
      heart.className = 'floating-heart';
      heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
      heart.style.left = Math.random() * 100 + '%';
      heart.style.animationDelay = Math.random() * 12 + 's';
      heart.style.animationDuration = (8 + Math.random() * 12) + 's';
      heart.style.fontSize = (0.6 + Math.random() * 1) + 'rem';
      container.appendChild(heart);
    }
  }

  // ═══════════════════════════════════════════════════════════
  // SAKURA PETALS
  // ═══════════════════════════════════════════════════════════
  function initSakuraPetals() {
    const container = document.getElementById('sakuraContainer');

    for (let i = 0; i < CONFIG.sakuraCount; i++) {
      const petal = document.createElement('div');
      petal.className = 'sakura-petal';
      const size = 8 + Math.random() * 10;
      petal.style.width = size + 'px';
      petal.style.height = size + 'px';
      petal.style.left = Math.random() * 100 + '%';
      petal.style.animationDelay = Math.random() * 15 + 's';
      petal.style.animationDuration = (8 + Math.random() * 12) + 's';

      // Vary petal colors
      const pinks = [
        'linear-gradient(135deg, #fbb6ce, #f9a8d4, #fbcfe8)',
        'linear-gradient(135deg, #fecdd3, #fda4af, #ffe4e6)',
        'linear-gradient(135deg, #f9a8d4, #f472b6, #fbb6ce)',
      ];
      petal.style.background = pinks[Math.floor(Math.random() * pinks.length)];
      container.appendChild(petal);
    }
  }

  // ═══════════════════════════════════════════════════════════
  // HERO ENTRANCE ANIMATION (GSAP)
  // ═══════════════════════════════════════════════════════════
  function animateHeroEntrance() {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.to('#heroSubtitle', {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 0.2,
    })
    .to('#heroTitle', {
      opacity: 1,
      y: 0,
      duration: 1.2,
    }, '-=0.5')
    .to('#heroEmoji', {
      opacity: 1,
      scale: 1,
      duration: 0.8,
    }, '-=0.4')
    .to('#heroTagline', {
      opacity: 1,
      y: 0,
      duration: 1,
    }, '-=0.3');

    // Animate hero title letters with anime.js
    setTimeout(() => {
      anime({
        targets: '.hero-title .line1',
        backgroundPosition: ['0% 50%', '100% 50%'],
        duration: 4000,
        easing: 'linear',
        loop: true,
        direction: 'alternate',
      });
    }, 1500);
  }

  // ═══════════════════════════════════════════════════════════
  // SCROLL REVEAL (using GSAP ScrollTrigger)
  // ═══════════════════════════════════════════════════════════
  function initScrollAnimations() {
    gsap.registerPlugin(ScrollTrigger);

    // Timeline items
    document.querySelectorAll('.timeline-item').forEach((item, i) => {
      gsap.fromTo(item, 
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          delay: i * 0.1,
          onComplete: () => item.classList.add('visible'),
        }
      );
    });

    // Gallery items
    document.querySelectorAll('.gallery-item').forEach((item, i) => {
      gsap.fromTo(item,
        { opacity: 0, y: 50, scale: 0.92 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
          delay: i * 0.12,
          onComplete: () => item.classList.add('visible'),
        }
      );
    });

    // Letter paragraphs
    document.querySelectorAll('.letter-body p').forEach((p, i) => {
      gsap.fromTo(p,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: p,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
          delay: i * 0.15,
          onComplete: () => p.classList.add('visible'),
        }
      );
    });

    // Section headers
    document.querySelectorAll('.section-header').forEach((header) => {
      gsap.fromTo(header,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: header,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    // Surprise section
    gsap.fromTo('.surprise-box',
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: '.surprise-box',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );

    // Parallax effect on hero orbs
    gsap.to('.hero-orb:nth-child(1)', {
      y: -100,
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      },
    });

    gsap.to('.hero-orb:nth-child(2)', {
      y: 80,
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      },
    });
  }

  // ═══════════════════════════════════════════════════════════
  // PHOTO GALLERY
  // ═══════════════════════════════════════════════════════════
  function initGallery() {
    const grid = document.getElementById('galleryGrid');
    const galleryData = [
      { image: 'assets/1.jpeg', caption: 'Where it all began', subcaption: 'The first chapter' },
      { image: 'assets/2.jpeg', caption: 'Golden hours together', subcaption: 'Chasing sunsets' },
      { image: 'assets/3.jpeg', caption: 'Under the stars', subcaption: 'Our universe' },
      { image: 'assets/4.png', caption: 'Music that binds us', subcaption: 'Every note is you' },
      { image: 'assets/5.jpeg', caption: 'Sweet moments', subcaption: 'Celebrating us' },
      { image: 'assets/6.jpeg', caption: 'Endless love', subcaption: 'Our forever story' },
    ];

    galleryData.forEach((item, index) => {
      const el = document.createElement('div');
      el.className = 'gallery-item';
      el.innerHTML = `
        <div class="gallery-item-inner glass-card">
          <img src="${item.image}" alt="${item.caption}" class="gallery-img revealed" />
          <div class="gallery-overlay-gradient"></div>
          <div class="gallery-vignette"></div>
          <div class="gallery-overlay">
            <span class="gallery-caption">${item.caption}</span>
            <span class="gallery-subcaption">${item.subcaption}</span>
          </div>
          <div class="gallery-number">0${index + 1}</div>
          <div class="gallery-heart">💖</div>
        </div>
      `;
      grid.appendChild(el);
    });
  }

  // ═══════════════════════════════════════════════════════════
  // MUSIC TOGGLE
  // ═══════════════════════════════════════════════════════════
  function initMusic() {
    const toggle = document.getElementById('musicToggle');
    const icon = toggle.querySelector('.music-icon');
    let isPlaying = false;

    // We won't load actual audio — just toggle the UI
    // Users can replace this with their own audio file
    let audio = null;
    try {
      audio = new Audio();
      // Placeholder: set audio.src = 'your-romantic-song.mp3' to add music
      // audio.src = 'romantic-bg-music.mp3';
      audio.loop = true;
      audio.volume = 0.3;
    } catch (e) {
      // Audio not supported
    }

    toggle.addEventListener('click', () => {
      isPlaying = !isPlaying;
      if (isPlaying) {
        toggle.classList.add('playing');
        icon.style.display = 'none';
        if (audio && audio.src) {
          audio.play().catch(() => {});
        }
      } else {
        toggle.classList.remove('playing');
        icon.style.display = 'inline';
        if (audio) {
          audio.pause();
        }
      }
    });
  }

  // ═══════════════════════════════════════════════════════════
  // NAV DOTS
  // ═══════════════════════════════════════════════════════════
  function initNavDots() {
    const dots = document.querySelectorAll('.nav-dot');
    const sections = ['hero', 'memories', 'gallery', 'letter', 'surprise'];

    dots.forEach((dot) => {
      dot.addEventListener('click', () => {
        const sectionId = dot.getAttribute('data-section');
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

    // Update active dot on scroll
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      sections.forEach((sectionId, i) => {
        const section = document.getElementById(sectionId);
        if (!section) return;
        const rect = section.getBoundingClientRect();
        if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
          dots.forEach(d => d.classList.remove('active'));
          dots[i].classList.add('active');
        }
      });
    });
  }

  // ═══════════════════════════════════════════════════════════
  // SURPRISE REVEAL + CONFETTI
  // ═══════════════════════════════════════════════════════════
  function initSurprise() {
    const box = document.getElementById('surpriseBox');
    const revealed = document.getElementById('surpriseRevealed');
    let isRevealed = false;

    box.addEventListener('click', () => {
      if (isRevealed) return;
      isRevealed = true;

      // Animate gift out
      gsap.to(box, {
        scale: 0,
        rotation: 360,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.in',
        onComplete: () => {
          box.style.display = 'none';
          box.nextElementSibling.style.display = 'none'; // hide hint

          // Show revealed content
          revealed.classList.add('active');

          // Launch confetti
          launchConfetti();

          // Burst floating hearts
          burstHearts();
        },
      });
    });
  }

  // ═══════════════════════════════════════════════════════════
  // CONFETTI ENGINE
  // ═══════════════════════════════════════════════════════════
  function launchConfetti() {
    const canvas = document.getElementById('confettiCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const confettiPieces = [];
    const colors = ['#f472b6', '#ec4899', '#db2777', '#c084fc', '#a855f7', '#fda4af', '#fb7185', '#fbb6ce', '#fbcfe8', '#ffe4e6'];
    const shapes = ['circle', 'rect', 'heart'];

    for (let i = 0; i < 200; i++) {
      confettiPieces.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        w: 6 + Math.random() * 8,
        h: 6 + Math.random() * 8,
        color: colors[Math.floor(Math.random() * colors.length)],
        shape: shapes[Math.floor(Math.random() * shapes.length)],
        vx: (Math.random() - 0.5) * 4,
        vy: 2 + Math.random() * 4,
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 8,
        opacity: 0.8 + Math.random() * 0.2,
        life: 1,
      });
    }

    let frameCount = 0;
    function drawHeart(ctx, x, y, size) {
      ctx.beginPath();
      const topCurveHeight = size * 0.3;
      ctx.moveTo(x, y + topCurveHeight);
      ctx.bezierCurveTo(x, y, x - size / 2, y, x - size / 2, y + topCurveHeight);
      ctx.bezierCurveTo(x - size / 2, y + (size + topCurveHeight) / 2, x, y + (size + topCurveHeight) / 1.5, x, y + size);
      ctx.bezierCurveTo(x, y + (size + topCurveHeight) / 1.5, x + size / 2, y + (size + topCurveHeight) / 2, x + size / 2, y + topCurveHeight);
      ctx.bezierCurveTo(x + size / 2, y, x, y, x, y + topCurveHeight);
      ctx.closePath();
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      frameCount++;

      let activeCount = 0;
      confettiPieces.forEach(piece => {
        if (piece.life <= 0) return;
        activeCount++;

        piece.x += piece.vx;
        piece.y += piece.vy;
        piece.rotation += piece.rotSpeed;
        piece.vy += 0.05; // gravity

        if (frameCount > 120) {
          piece.life -= 0.005;
          piece.opacity = Math.max(0, piece.life);
        }

        ctx.save();
        ctx.translate(piece.x, piece.y);
        ctx.rotate((piece.rotation * Math.PI) / 180);
        ctx.globalAlpha = piece.opacity;
        ctx.fillStyle = piece.color;

        if (piece.shape === 'circle') {
          ctx.beginPath();
          ctx.arc(0, 0, piece.w / 2, 0, Math.PI * 2);
          ctx.fill();
        } else if (piece.shape === 'rect') {
          ctx.fillRect(-piece.w / 2, -piece.h / 2, piece.w, piece.h);
        } else {
          drawHeart(ctx, 0, 0, piece.w);
          ctx.fill();
        }

        ctx.restore();
      });

      if (activeCount > 0) {
        requestAnimationFrame(animate);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    }

    animate();
  }

  // ═══════════════════════════════════════════════════════════
  // BURST HEARTS (on surprise reveal)
  // ═══════════════════════════════════════════════════════════
  function burstHearts() {
    const hearts = ['💖', '💕', '💗', '💓', '✨', '🌸', '💝', '🎉', '🎊'];
    for (let i = 0; i < 30; i++) {
      setTimeout(() => {
        const heart = document.createElement('div');
        heart.style.position = 'fixed';
        heart.style.fontSize = (1 + Math.random() * 2) + 'rem';
        heart.style.left = (10 + Math.random() * 80) + '%';
        heart.style.bottom = '-20px';
        heart.style.zIndex = '10000';
        heart.style.pointerEvents = 'none';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        document.body.appendChild(heart);

        gsap.to(heart, {
          y: -(200 + Math.random() * 400),
          x: (Math.random() - 0.5) * 200,
          rotation: (Math.random() - 0.5) * 360,
          opacity: 0,
          duration: 2 + Math.random() * 2,
          ease: 'power2.out',
          onComplete: () => heart.remove(),
        });
      }, i * 50);
    }
  }

  // ═══════════════════════════════════════════════════════════
  // COUNTDOWN TIMER
  // ═══════════════════════════════════════════════════════════
  function initCountdown() {
    function update() {
      const now = new Date();
      const diff = now - CONFIG.loveStartDate;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      const grid = document.getElementById('countdownGrid');
      grid.innerHTML = `
        <div class="countdown-item">
          <span class="countdown-number">${days}</span>
          <span class="countdown-label">Days</span>
        </div>
        <div class="countdown-item">
          <span class="countdown-number">${hours}</span>
          <span class="countdown-label">Hours</span>
        </div>
        <div class="countdown-item">
          <span class="countdown-number">${minutes}</span>
          <span class="countdown-label">Minutes</span>
        </div>
        <div class="countdown-item">
          <span class="countdown-number">${seconds}</span>
          <span class="countdown-label">Seconds</span>
        </div>
      `;
    }

    update();
    setInterval(update, 1000);
  }

  // ═══════════════════════════════════════════════════════════
  // SMOOTH SCROLL (lightweight Lenis-inspired)
  // ═══════════════════════════════════════════════════════════
  function initSmoothScroll() {
    // Simple smooth scroll enhancement
    let currentScroll = window.scrollY;
    let targetScroll = window.scrollY;
    let isScrolling = false;

    window.addEventListener('scroll', () => {
      targetScroll = window.scrollY;
    }, { passive: true });
  }

  // ═══════════════════════════════════════════════════════════
  // ANIME.JS AMBIENT ANIMATIONS
  // ═══════════════════════════════════════════════════════════
  function initAmbientAnimations() {
    // Animate section dividers
    anime({
      targets: '.section-divider',
      width: ['0px', '60px'],
      duration: 1500,
      easing: 'easeInOutQuad',
      delay: anime.stagger(200),
    });

    // Subtle float on glass cards
    anime({
      targets: '.glass-card',
      translateY: [-3, 3],
      duration: 4000,
      direction: 'alternate',
      easing: 'easeInOutSine',
      loop: true,
      delay: anime.stagger(500),
    });

    // Letter seal rotation
    anime({
      targets: '.letter-seal',
      rotate: [0, 5, -5, 0],
      duration: 6000,
      easing: 'easeInOutSine',
      loop: true,
    });

    // Footer heart
    anime({
      targets: '.footer-heart',
      scale: [1, 1.2, 1],
      duration: 2000,
      easing: 'easeInOutSine',
      loop: true,
    });

    // Nav dots subtle pulse
    anime({
      targets: '.nav-dot',
      boxShadow: [
        '0 0 0px rgba(244,114,182,0)',
        '0 0 12px rgba(244,114,182,0.4)',
        '0 0 0px rgba(244,114,182,0)',
      ],
      duration: 3000,
      easing: 'easeInOutSine',
      loop: true,
      delay: anime.stagger(300),
    });
  }

  // ═══════════════════════════════════════════════════════════
  // SPARKLE ON CLICK
  // ═══════════════════════════════════════════════════════════
  function initClickSparkles() {
    document.addEventListener('click', (e) => {
      for (let i = 0; i < 8; i++) {
        const sparkle = document.createElement('div');
        sparkle.style.position = 'fixed';
        sparkle.style.left = e.clientX + 'px';
        sparkle.style.top = e.clientY + 'px';
        sparkle.style.width = '4px';
        sparkle.style.height = '4px';
        sparkle.style.borderRadius = '50%';
        sparkle.style.background = ['#f472b6', '#ec4899', '#c084fc', '#fda4af', '#fbb6ce', '#fbcfe8'][Math.floor(Math.random() * 6)];
        sparkle.style.pointerEvents = 'none';
        sparkle.style.zIndex = '99999';
        document.body.appendChild(sparkle);

        const angle = (Math.PI * 2 * i) / 8;
        const distance = 30 + Math.random() * 40;

        gsap.to(sparkle, {
          x: Math.cos(angle) * distance,
          y: Math.sin(angle) * distance,
          opacity: 0,
          scale: 0,
          duration: 0.6 + Math.random() * 0.4,
          ease: 'power2.out',
          onComplete: () => sparkle.remove(),
        });
      }
    });
  }

  // ═══════════════════════════════════════════════════════════
  // TILT EFFECT ON GALLERY ITEMS
  // ═══════════════════════════════════════════════════════════
  function initTiltEffect() {
    if (window.innerWidth <= 768) return;

    document.querySelectorAll('.gallery-item').forEach(item => {
      item.addEventListener('mousemove', (e) => {
        const rect = item.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / centerY * -8;
        const rotateY = (x - centerX) / centerX * 8;

        item.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
      });

      item.addEventListener('mouseleave', () => {
        item.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)';
        item.style.transition = 'transform 0.5s ease';
      });

      item.addEventListener('mouseenter', () => {
        item.style.transition = 'none';
      });
    });
  }

  // ═══════════════════════════════════════════════════════════
  // WINDOW RESIZE HANDLER
  // ═══════════════════════════════════════════════════════════
  function initResizeHandler() {
    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        const canvas = document.getElementById('confettiCanvas');
        if (canvas) {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
        }
      }, 250);
    });
  }

  // ═══════════════════════════════════════════════════════════
  // INITIALIZE EVERYTHING
  // ═══════════════════════════════════════════════════════════
  function init() {
    initLoadingScreen();
    initCursor();
    initParticles();
    initFloatingHearts();
    initSakuraPetals();
    initGallery();
    initMusic();
    initNavDots();
    initSurprise();
    initCountdown();
    initSmoothScroll();
    initClickSparkles();
    initResizeHandler();

    // Delay scroll and ambient animations until after loading screen
    setTimeout(() => {
      initScrollAnimations();
      initAmbientAnimations();
      initTiltEffect();
    }, CONFIG.loadingDuration + 500);
  }

  // Start when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
