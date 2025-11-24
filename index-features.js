(function () {
  /**
   * Injects the features section into the page.
   * Replicates the Boardable features carousel design.
   */
  function loadFeatures() {
    var container = document.getElementById("features-container");
    if (!container) return;

    // Define the cards data
    const cards = [
      {
        title: "BoardBlocs Surveys",
        desc: "Collect feedback, visualize results, and turn insights into action—without leaving the platform.",
        color: "#1a73e8", // Blue
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>`
      },
      {
        title: "BoardBlocs Video",
        desc: "Run smoother virtual or hybrid meetings with integrated video, AI transcription, and instant summaries.",
        color: "#7c3aed", // Purple
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 8-6 4 6 4V8Z"/><rect x="2" y="6" width="14" height="12" rx="2" ry="2"/></svg>`
      },
      {
        title: "Mobile App",
        desc: "Get push alerts, join meetings fast, and access or share documents on the go.",
        color: "#db2777", // Pink
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>`
      },
      {
        title: "Document Center",
        desc: "Access polished meeting materials, including board decks, directly from the Document Center.",
        color: "#f97316", // Orange
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>`
      },
      {
        title: "AI-Powered Tools",
        desc: "Save time with guided workflows and auto-generated meeting recaps that keep everyone aligned.",
        color: "#fbbf24", // Yellow
        textColor: "#78350f", // Darker text for yellow bg
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>`
      },
      {
        title: "Accessibility",
        desc: "Give every board member an equal voice with robust, compliance-focused accessibility features.",
        color: "#1a73e8", // Blue
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="1"/><path d="m9 20 3-6 3 6"/><path d="m6 8 6 2 6-2"/><path d="M12 10v4"/></svg>`
      },
      {
        title: "Board Packet",
        desc: "Build and distribute polished board packets in a click—no formatting headaches.",
        color: "#7c3aed", // Purple
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg>`
      }
    ];

    const cardsHtml = cards.map(card => `
      <div class="feature-card" style="background-color: ${card.color}; color: ${card.textColor || '#ffffff'}">
        <div class="feature-content-top">
          <div class="feature-icon-wrapper" style="color: ${card.textColor || '#ffffff'}">
            ${card.icon}
          </div>
          <h3 class="feature-title">${card.title}</h3>
          <p class="feature-desc">${card.desc}</p>
        </div>
        <a href="#" class="feature-link" style="color: ${card.textColor || '#ffffff'}">
          Learn More 
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="arrow-icon"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
        </a>
      </div>
    `).join('');

    container.innerHTML = `
      <style>
        body {
          overflow-x: hidden; /* Prevent horizontal scroll from negative margins */
        }

        .features-section {
          width: 90%;
          max-width: 1200px;
          margin: 0 auto;
          padding-bottom: 4rem;
          font-family: system-ui, -apple-system, sans-serif;
          overflow: visible; /* Allow hover effects to show */
        }

        /* Scroll Reveal Animations */
        .reveal-up {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.5, 0, 0, 1);
        }

        .reveal-up.active {
          opacity: 1;
          transform: translateY(0);
        }

        .delay-100 { transition-delay: 0.1s; }
        .delay-200 { transition-delay: 0.2s; }

        .features-header {
          margin-bottom: 4rem;
          max-width: 800px;
        }

        .features-pill {
          display: inline-block;
          padding: 0.5rem 1.5rem;
          background-color: #e0e7ff;
          color: #2563eb;
          border-radius: 999px;
          font-weight: 600;
          font-size: 0.9rem;
          margin-bottom: 1.5rem;
        }

        .features-title {
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          font-weight: 700;
          color: #1a202c;
          margin-bottom: 1.5rem;
          line-height: 1.1;
          letter-spacing: -0.02em;
        }

        .features-subtitle {
          font-size: 1.125rem;
          line-height: 1.6;
          color: #4a5568;
          max-width: 700px;
        }

        .features-carousel-container {
          position: relative;
          width: 100%;
        }

        .features-track-wrapper {
          overflow: hidden;
          margin: 0 -1rem;
          padding: 1rem;
          margin-right: calc(50% - 50vw); /* Extend to right edge of viewport */
        }

        .features-track {
          display: flex;
          gap: 1.5rem;
          transition: transform 0.5s cubic-bezier(0.25, 1, 0.5, 1);
        }

        .feature-card {
          flex: 0 0 300px;
          height: 420px;
          border-radius: 12px;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
        }

        .feature-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }

        .feature-icon-wrapper {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.2);
          border-radius: 8px;
          margin-bottom: 1rem;
        }

        .feature-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .feature-desc {
          font-size: 0.95rem;
          line-height: 1.5;
          margin-bottom: 2rem;
          opacity: 0.9;
        }

        .feature-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.95rem;
        }

        .feature-link:hover .arrow-icon {
          transform: translate(2px, -2px);
        }

        .arrow-icon {
          transition: transform 0.2s ease;
        }

        .carousel-controls {
          display: flex;
          gap: 1rem;
          margin-top: 3rem;
          justify-content: flex-start; /* Align buttons to the left */
        }

        .carousel-btn {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: none;
          background-color: #e0e7ff;
          color: #2563eb;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .carousel-btn:hover {
          background-color: #dbeafe;
          transform: scale(1.05);
        }

        .carousel-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
          transform: none;
        }

        @media (max-width: 768px) {
          .feature-card {
            flex: 0 0 280px;
            height: 380px;
          }
          
          .features-title {
            font-size: 2.5rem;
          }
        }
      </style>

      <div class="features-section">
        <div class="features-header reveal-up">
          <span class="features-pill">Features</span>
          <h2 class="features-title">Your All-in-One Board Management Hub</h2>
          <p class="features-subtitle">
            BoardBlocs brings everything your board needs into one streamlined platform. Schedule meetings, share documents, collaborate seamlessly, and connect via mobile or video—all in one place.
          </p>
        </div>

        <div class="features-carousel-container reveal-up delay-200">
          <div class="features-track-wrapper">
            <div class="features-track" id="features-track">
              ${cardsHtml}
            </div>
          </div>

          <div class="carousel-controls">
            <button class="carousel-btn" id="prev-btn" aria-label="Previous">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            <button class="carousel-btn" id="next-btn" aria-label="Next">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>
        </div>
      </div>
    `;

    initCarousel();
    initScrollReveal();
  }

  function initScrollReveal() {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target); // Only animate once
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.reveal-up');
    elements.forEach(el => observer.observe(el));
  }

  function initCarousel() {
    const track = document.getElementById('features-track');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    if (!track || !prevBtn || !nextBtn) return;

    let scrollAmount = 0;
    const cardWidth = 300 + 24; // width + gap
    const maxScroll = track.scrollWidth - track.clientWidth;

    // Initial state
    updateButtons();

    nextBtn.addEventListener('click', () => {
      scrollAmount += cardWidth;

      if (scrollAmount > track.scrollWidth - track.parentElement.clientWidth) {
        scrollAmount = track.scrollWidth - track.parentElement.clientWidth;
      }

      track.style.transform = `translateX(-${scrollAmount}px)`;
      updateButtons();
    });

    prevBtn.addEventListener('click', () => {
      scrollAmount -= cardWidth;

      if (scrollAmount < 0) scrollAmount = 0;

      track.style.transform = `translateX(-${scrollAmount}px)`;
      updateButtons();
    });

    function updateButtons() {
      const maxScroll = track.scrollWidth - track.parentElement.clientWidth;
      prevBtn.disabled = scrollAmount <= 0;
      nextBtn.disabled = scrollAmount >= maxScroll - 10; // tolerance
    }

    // Update on resize
    window.addEventListener('resize', () => {
      // Reset or adjust logic if needed
      updateButtons();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", loadFeatures);
  } else {
    loadFeatures();
  }
})();
