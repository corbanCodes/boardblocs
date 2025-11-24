(function () {
    function loadCTA() {
        var container = document.getElementById("cta-container");
        if (!container) return;

        container.innerHTML = `
      <style>
        .cta-section {
          padding: 6rem 2rem;
          font-family: system-ui, -apple-system, sans-serif;
        }

        .cta-inner {
          max-width: 1100px;
          margin: 0 auto;
          background: linear-gradient(135deg, #1e3a5f 0%, #2d5a8e 100%);
          border-radius: 24px;
          padding: 4rem 3rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 3rem;
        }

        /* Scroll Reveal Animations */
        .cta-reveal-up {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.5, 0, 0, 1);
        }

        .cta-reveal-up.active {
          opacity: 1;
          transform: translateY(0);
        }

        .cta-content {
          flex: 1;
        }

        .cta-title {
          font-size: clamp(1.75rem, 4vw, 2.5rem);
          font-weight: 700;
          line-height: 1.2;
          color: #ffffff;
          margin-bottom: 1rem;
        }

        .cta-description {
          font-size: 1.125rem;
          line-height: 1.6;
          color: #e0e7ff;
        }

        .cta-button {
          display: inline-block;
          background-color: #ffffff;
          color: #1e3a5f;
          font-size: 1rem;
          font-weight: 600;
          padding: 1rem 2rem;
          border-radius: 8px;
          text-decoration: none;
          transition: all 0.2s ease;
          white-space: nowrap;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .cta-button:hover {
          background-color: #f3f4f6;
          transform: translateY(-2px);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
          color: #1e3a5f;
        }

        @media (max-width: 768px) {
          .cta-inner {
            flex-direction: column;
            padding: 3rem 2rem;
            text-align: center;
            border-radius: 16px;
          }

          .cta-button {
            width: 100%;
            max-width: 320px;
            text-align: center;
          }
        }
      </style>

      <div class="cta-section">
        <div class="cta-inner cta-reveal-up">
          <div class="cta-content">
            <h2 class="cta-title">Empower your board to lead with confidence</h2>
            <p class="cta-description">
              Join thousands of nonprofits simplifying governance with BoardBlocs — the board management platform designed just for you.
            </p>
          </div>
          <a href="#" class="cta-button">Schedule Your 30-Minute Demo</a>
        </div>
      </div>
    `;

        initScrollReveal(container);
    }

    function initScrollReveal(container) {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const elements = container.querySelectorAll('.cta-reveal-up');
        elements.forEach(el => observer.observe(el));
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", loadCTA);
    } else {
        loadCTA();
    }
})();
