(function () {
  /**
   * Injects the comparison section into the page.
   * Replicates the "Common Frustration" vs "BoardBlocs Advantage" design.
   */
  function loadComparison() {
    var container = document.getElementById("comparison-container");
    if (!container) return;

    const comparisons = [
      {
        frustration: "Enterprise bloat makes simple tasks feel complex and drives up cost.",
        advantage: "Right-sized power—everything you need, nothing you don’t."
      },
      {
        frustration: "Generic tools miss nonprofit must-haves like public packets and committee roll-ups.",
        advantage: "Mission-specific features that match governance mandates."
      },
      {
        frustration: "Hidden pricing or rigid contracts.",
        advantage: "Transparent, fair per-user pricing—volunteer discounts included."
      },
      {
        frustration: "Starter portals can’t scale or integrate deeply.",
        advantage: "Grows with you—granular roles, multi-entity support, open API."
      }
    ];

    const rowsHtml = comparisons.map((item, index) => `
      <div class="comparison-row reveal-up" style="transition-delay: ${index * 100}ms">
        <div class="comparison-col frustration-col">
          <div class="mobile-label">COMMON FRUSTRATION</div>
          <div class="comparison-content">
            <p class="comparison-text">${item.frustration}</p>
            <div class="icon-wrapper frustration-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </div>
          </div>
        </div>
        <div class="comparison-col advantage-col">
          <div class="mobile-label">BOARDBLOCS ADVANTAGE</div>
          <div class="comparison-content">
            <p class="comparison-text">${item.advantage}</p>
            <div class="icon-wrapper advantage-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
          </div>
        </div>
      </div>
    `).join('');

    container.innerHTML = `
      <style>
        .comparison-section {
          background-color: #f9fafb;
          padding: 6rem 0;
        }

        .comparison-inner {
          width: 90%;
          max-width: 1200px;
          margin: 0 auto;
          font-family: system-ui, -apple-system, sans-serif;
          color: #1a202c;
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

        .comparison-header {
          text-align: center;
          margin-bottom: 5rem;
        }

        .comparison-title {
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 700;
          line-height: 1.2;
          color: #1a202c;
          max-width: 800px;
          margin: 0 auto;
          letter-spacing: -0.02em;
        }

        .comparison-grid {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        /* Header Row for Desktop */
        .grid-header {
          display: flex;
          margin-bottom: 1rem;
          padding: 0 1rem;
        }

        .grid-header-col {
          flex: 1;
          font-size: 0.875rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .grid-header-col.frustration-header {
          color: #4a5568;
        }

        .grid-header-col.advantage-header {
          color: #ff6b3d; /* Brand Orange */
          padding-left: 2rem;
        }

        .comparison-row {
          display: flex;
          align-items: flex-start; /* Align top */
          padding: 1rem 0;
          border-bottom: 1px solid #e2e8f0;
        }
        
        .comparison-row:last-child {
          border-bottom: none;
        }

        .comparison-col {
          flex: 1;
          padding: 1rem;
        }

        .comparison-content {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 1rem;
        }

        .comparison-text {
          font-size: 1.125rem;
          line-height: 1.6;
          color: #2d3748;
          margin: 0;
          flex: 1;
        }

        .icon-wrapper {
          flex-shrink: 0;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 4px; /* Align with first line of text */
        }

        .frustration-icon {
          background-color: #cbd5e0;
          color: #ffffff;
        }

        .advantage-icon {
          background-color: #ff6b3d;
          color: #ffffff;
        }

        .mobile-label {
          display: none;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 0.5rem;
        }

        .cta-container {
          text-align: center;
          margin-top: 5rem;
        }

        .comparison-cta {
          display: inline-block;
          background-color: #ff6b3d;
          color: #ffffff;
          font-size: 1.125rem;
          font-weight: 600;
          padding: 1rem 3rem;
          border-radius: 999px;
          text-decoration: none;
          transition: all 0.2s ease;
          box-shadow: 0 4px 6px rgba(255, 107, 61, 0.2);
        }

        .comparison-cta:hover {
          background-color: #e55a2f;
          transform: translateY(-2px);
          box-shadow: 0 6px 12px rgba(255, 107, 61, 0.3);
          color: #ffffff;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .grid-header {
            display: none;
          }

          .comparison-row {
            flex-direction: column;
            gap: 2rem;
            padding: 2rem 0;
          }

          .comparison-col {
            padding: 0;
          }

          .advantage-col {
            padding-left: 0; /* Reset padding */
          }
          
          .grid-header-col.advantage-header {
             padding-left: 0;
          }

          .mobile-label {
            display: block;
          }

          .mobile-label {
             color: #718096;
          }
          
          .advantage-col .mobile-label {
            color: #ff6b3d;
          }
        }
        
        @media (min-width: 769px) {
           .advantage-col {
             padding-left: 3rem; /* Add spacing between columns */
           }
        }
      </style>

      <div class="comparison-section">
        <div class="comparison-inner">
          <div class="comparison-header reveal-up">
            <h2 class="comparison-title">Nonprofits Deserve Tools Built for the Way They Work</h2>
          </div>

          <div class="comparison-grid">
            <!-- Header Row (Desktop only) -->
            <div class="grid-header reveal-up">
              <div class="grid-header-col frustration-header">COMMON FRUSTRATION</div>
              <div class="grid-header-col advantage-header">BOARDBLOCS ADVANTAGE</div>
            </div>

            <!-- Rows -->
            ${rowsHtml}
          </div>

          <div class="cta-container reveal-up" style="transition-delay: 400ms;">
            <a href="#" class="comparison-cta">See BoardBlocs in Action</a>
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
          observer.unobserve(entry.target); // Only animate once
        }
      });
    }, observerOptions);

    const elements = container.querySelectorAll('.reveal-up');
    elements.forEach(el => observer.observe(el));
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", loadComparison);
  } else {
    loadComparison();
  }
})();
