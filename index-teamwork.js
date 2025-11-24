(function () {
    function loadTeamwork() {
        var container = document.getElementById("teamwork-container");
        if (!container) return;

        container.innerHTML = `
      <style>
        .teamwork-section {
          width: 90%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 6rem 0;
          font-family: system-ui, -apple-system, sans-serif;
          text-align: center;
        }

        /* Scroll Reveal Animations */
        .teamwork-reveal-up {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.5, 0, 0, 1);
        }

        .teamwork-reveal-up.active {
          opacity: 1;
          transform: translateY(0);
        }

        .teamwork-pill {
          display: inline-block;
          padding: 0.5rem 1.5rem;
          background-color: #dbeafe;
          color: #2563eb;
          border-radius: 999px;
          font-weight: 600;
          font-size: 0.9rem;
          margin-bottom: 2rem;
        }

        .teamwork-title {
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 700;
          line-height: 1.2;
          color: #1a202c;
          margin-bottom: 1.5rem;
          letter-spacing: -0.02em;
        }

        .teamwork-description {
          font-size: 1.125rem;
          line-height: 1.7;
          color: #4a5568;
          max-width: 900px;
          margin: 0 auto 4rem;
        }

        .teamwork-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 3rem;
          margin-top: 4rem;
        }

        .teamwork-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .teamwork-icon {
          width: 64px;
          height: 64px;
          background-color: #dbeafe;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          color: #2563eb;
          font-size: 1.75rem;
        }

        .teamwork-card-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #1a202c;
          margin-bottom: 1rem;
        }

        .teamwork-card-description {
          font-size: 1rem;
          line-height: 1.6;
          color: #4a5568;
          margin-bottom: 1.5rem;
        }

        .teamwork-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: #2563eb;
          font-weight: 600;
          text-decoration: none;
          font-size: 0.95rem;
          transition: gap 0.2s ease;
        }

        .teamwork-link:hover {
          gap: 0.75rem;
          color: #1d4ed8;
        }

        .teamwork-arrow {
          transition: transform 0.2s ease;
        }

        .teamwork-link:hover .teamwork-arrow {
          transform: translateX(2px);
        }

        @media (max-width: 768px) {
          .teamwork-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }
      </style>

      <div class="teamwork-section">
        <div class="teamwork-reveal-up">
          <span class="teamwork-pill">For Your Team</span>
          <h2 class="teamwork-title">Nonprofit Teamwork, Simplified</h2>
          <p class="teamwork-description">
            With BoardBlocs, executives, admins, and board members work together seamlessly, keeping everyone aligned and focused on driving meaningful impact. Our platform streamlines communication and coordination, making it simple to stay organized and achieve your goals as a team.
          </p>
        </div>

        <div class="teamwork-grid">
          <div class="teamwork-card teamwork-reveal-up" style="transition-delay: 100ms;">
            <div class="teamwork-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
            </div>
            <h3 class="teamwork-card-title">Executive Directors</h3>
            <p class="teamwork-card-description">
              BoardBlocs streamlines your work, from scheduling meetings to securely sharing documents to tracking progress.
            </p>
            <a href="#" class="teamwork-link">
              Learn more
              <svg class="teamwork-arrow" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </a>
          </div>

          <div class="teamwork-card teamwork-reveal-up" style="transition-delay: 200ms;">
            <div class="teamwork-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path><path d="M10 16h4"></path></svg>
            </div>
            <h3 class="teamwork-card-title">Admins</h3>
            <p class="teamwork-card-description">
              Simplify your day-to-day operations. BoardBlocs takes the hassle out of managing meeting logistics, document access, and board communication.
            </p>
            <a href="#" class="teamwork-link">
              Learn more
              <svg class="teamwork-arrow" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </a>
          </div>

          <div class="teamwork-card teamwork-reveal-up" style="transition-delay: 300ms;">
            <div class="teamwork-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
            </div>
            <h3 class="teamwork-card-title">Board Members</h3>
            <p class="teamwork-card-description">
              BoardBlocs makes participation a breeze, whether you're attending meetings, reviewing documents, and more.
            </p>
            <a href="#" class="teamwork-link">
              Learn more
              <svg class="teamwork-arrow" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </a>
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

        const elements = container.querySelectorAll('.teamwork-reveal-up');
        elements.forEach(el => observer.observe(el));
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", loadTeamwork);
    } else {
        loadTeamwork();
    }
})();
