(function () {
  /**
   * Injects a hero section into the page.
   * Inspired by modern SaaS landing pages with mobile responsiveness.
   */
  function loadHero() {
    var container = document.getElementById("hero-container");
    if (!container) return;

    container.innerHTML = `
      <style>
        .hero-section {
          position: relative;
          height: calc(100vh - 80px);
          min-height: 520px;
          background-color: #ffffff;
          display: flex;
          align-items: center;
          overflow: hidden;
        }

        .hero-bg-image {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 90%;
          max-width: 1300px;
          min-width: 730px;
          height: auto;
          z-index: 1;
          pointer-events: none;
        }

        .hero-container {
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding: 4rem 2rem;
        }

        .hero-content {
          max-width: 700px;
          margin-left: auto;
          margin-right: 5%;
          margin-top: -8vh;
        }

        /* Ensure content doesn't overlap widget at medium sizes */
        @media (max-width: 1400px) {
          .hero-content {
            margin-top: 0;
            margin-right: 5%;
            margin-left: 50%;
            max-width: 550px;
          }
        }

        /* Vertical layout - text below widget */
        @media (max-width: 1274px) {
          .hero-section {
            display: block;
            height: auto;
            min-height: auto;
            padding-top: 1rem;
          }

          .hero-bg-image {
            content: url('mobile hero.png');
            left: 50%;
            top: 30%;
            transform: translate(-50%, -50%);
            width: 105vw;
            max-width: 900px;
            min-width: 600px;
            height: auto;
            bottom: auto;
          }

          .hero-container {
            padding: 1rem 2rem 3rem;
          }

          .hero-content {
            margin-left: auto;
            margin-right: auto;
            margin-top: 0;
            text-align: center;
            max-width: 600px;
          }
        }

        .hero-headline {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 700;
          line-height: 1.15;
          color: #3d2817;
          margin-bottom: 1.5rem;
          letter-spacing: -0.02em;
          text-shadow: 
            0 0 20px rgba(255, 255, 255, 0.3),
            0 0 40px rgba(255, 255, 255, 0.15),
            1px 1px 1px rgba(255, 255, 255, 0.2);
        }

        .hero-subheadline {
          font-size: clamp(1.1rem, 2vw, 1.375rem);
          line-height: 1.6;
          color: #5a3e2a;
          margin-bottom: 2.5rem;
          font-weight: 400;
          text-shadow: 
            0 0 15px rgba(255, 255, 255, 0.25),
            0 0 30px rgba(255, 255, 255, 0.12),
            1px 1px 1px rgba(255, 255, 255, 0.15);
        }

        .hero-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background-color: #ff6b3d;
          color: #ffffff;
          font-size: 1.0625rem;
          font-weight: 600;
          padding: 1rem 2.5rem;
          border-radius: 999px;
          text-decoration: none;
          transition: all 0.2s ease-in-out;
          border: 2px solid rgba(255, 255, 255, 0.4);
          cursor: pointer;
          box-shadow: 0 4px 14px rgba(255, 107, 61, 0.25);
        }

        .hero-cta:hover {
          background-color: #e55a2f;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(255, 107, 61, 0.35);
          border-color: rgba(255, 255, 255, 0.6);
          color: #ffffff;
        }


        /* Continue vertical layout principles */
        @media (max-width: 991px) {
          .hero-bg-image {
            width: 110vw;
            max-width: 950px;
            min-width: 650px;
          }
        }

        /* Mobile adjustments */
        @media (max-width: 767px) {
          .hero-section {
            min-height: 100vh;
          }

          .hero-bg-image {
            width: 120vw;
            max-width: 1000px;
            min-width: 700px;
          }

          .hero-content {
            max-width: 500px;
          }
        }

          .hero-headline {
            font-size: clamp(2rem, 8vw, 2.5rem);
          }

          .hero-subheadline {
            font-size: clamp(1rem, 4vw, 1.1rem);
            margin-bottom: 2rem;
          }

          .hero-cta {
            width: 100%;
            max-width: 320px;
            padding: 0.875rem 2rem;
          }
        }

        /* Extra small devices */
        @media (max-width: 480px) {
          .hero-section {
            min-height: 450px;
          }

          .hero-bg-image {
            width: 100%;
            min-width: 390px;
            max-width: 520px;
          }
        }
      </style>

      <section class="hero-section">
        <img 
          src="clean-bg.png" 
          alt="Board Blocs background graphic" 
          class="hero-bg-image"
        />
        
        <div class="hero-container">
          <div id="hero-widget-container"></div>
          
          <div class="hero-content">
            <h1 class="hero-headline">
              Board management software built for nonprofits
            </h1>
            
            <p class="hero-subheadline">
              Lead with clarity. Board work made easy.
            </p>
            
            <a href="#" class="hero-cta">
              Schedule Your Free Demo
            </a>
          </div>
        </div>
      </section>
    `;
  }

  // Load widget script and inject it
  function loadWidget() {
    const script = document.createElement('script');
    script.src = './hero-widget.js';
    script.onload = function() {
      if (window.HeroWidget) {
        const container = document.getElementById('hero-widget-container');
        if (container) {
          container.innerHTML = window.HeroWidget.create();
          // Start animation after a short delay
          setTimeout(() => {
            window.HeroWidget.startAnimation();
          }, 500);
        }
      }
    };
    document.head.appendChild(script);
  }

  // Run when DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function() {
      loadHero();
      loadWidget();
    });
  } else {
    loadHero();
    loadWidget();
  }
})();
