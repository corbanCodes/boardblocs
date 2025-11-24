(function () {
    function loadCompliance() {
        var container = document.getElementById("compliance-container");
        if (!container) return;

        container.innerHTML = `
      <style>
        .compliance-section {
          width: 90%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 6rem 0;
          font-family: system-ui, -apple-system, sans-serif;
          text-align: center;
        }

        /* Scroll Reveal Animations */
        .compliance-reveal-up {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.5, 0, 0, 1);
        }

        .compliance-reveal-up.active {
          opacity: 1;
          transform: translateY(0);
        }

        .compliance-pill {
          display: inline-block;
          padding: 0.5rem 1.5rem;
          background-color: #dbeafe;
          color: #2563eb;
          border-radius: 999px;
          font-weight: 600;
          font-size: 0.9rem;
          margin-bottom: 2rem;
        }

        .compliance-title {
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 700;
          line-height: 1.2;
          color: #1a202c;
          margin-bottom: 4rem;
          letter-spacing: -0.02em;
        }

        .compliance-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem 4rem;
          max-width: 800px;
          margin: 0 auto;
          text-align: left;
        }

        .compliance-item {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .compliance-checkmark {
          width: 32px;
          height: 32px;
          background-color: #10b981;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: white;
        }

        .compliance-text {
          font-size: 1.125rem;
          font-weight: 500;
          color: #1a202c;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .compliance-badge {
          width: 24px;
          height: 24px;
          background-color: #e5e7eb;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.7rem;
          font-weight: 600;
          color: #6b7280;
        }

        @media (max-width: 768px) {
          .compliance-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
        }
      </style>

      <div class="compliance-section">
        <div class="compliance-reveal-up">
          <span class="compliance-pill">Compliance</span>
          <h2 class="compliance-title">Compliance-Ready From Day One</h2>
        </div>

        <div class="compliance-grid">
          <div class="compliance-item compliance-reveal-up" style="transition-delay: 100ms;">
            <div class="compliance-checkmark">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
            <div class="compliance-text">
              Soc 2 Type II
              <div class="compliance-badge">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </div>
            </div>
          </div>

          <div class="compliance-item compliance-reveal-up" style="transition-delay: 200ms;">
            <div class="compliance-checkmark">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
            <div class="compliance-text">
              WCAG-AA accessibility
              <div class="compliance-badge">AA</div>
            </div>
          </div>

          <div class="compliance-item compliance-reveal-up" style="transition-delay: 150ms;">
            <div class="compliance-checkmark">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
            <div class="compliance-text">
              HIPAA Compliant
              <div class="compliance-badge">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </div>
            </div>
          </div>

          <div class="compliance-item compliance-reveal-up" style="transition-delay: 250ms;">
            <div class="compliance-checkmark">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
            <div class="compliance-text">Single-Sign-On</div>
          </div>

          <div class="compliance-item compliance-reveal-up" style="transition-delay: 200ms;">
            <div class="compliance-checkmark">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
            <div class="compliance-text">Roles & permissions</div>
          </div>

          <div class="compliance-item compliance-reveal-up" style="transition-delay: 300ms;">
            <div class="compliance-checkmark">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
            <div class="compliance-text">Two-Way Encryption</div>
          </div>

          <div class="compliance-item compliance-reveal-up" style="transition-delay: 250ms;">
            <div class="compliance-checkmark">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
            <div class="compliance-text">GDPR</div>
          </div>
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

        const elements = container.querySelectorAll('.compliance-reveal-up');
        elements.forEach(el => observer.observe(el));
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", loadCompliance);
    } else {
        loadCompliance();
    }
})();
