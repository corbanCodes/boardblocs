(function () {
    function loadIntegrations() {
        var container = document.getElementById("integrations-container");
        if (!container) return;

        container.innerHTML = `
      <style>
        .integrations-section {
          background-color: #ffe7db;
          padding: 6rem 2rem;
          margin: 4rem 2rem;
          border-radius: 24px;
          font-family: system-ui, -apple-system, sans-serif;
        }

        .integrations-inner {
          max-width: 900px;
          margin: 0 auto;
        }

        /* Scroll Reveal Animations */
        .integrations-reveal-up {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.5, 0, 0, 1);
        }

        .integrations-reveal-up.active {
          opacity: 1;
          transform: translateY(0);
        }

        .integrations-pill {
          display: inline-block;
          padding: 0.5rem 1.5rem;
          background-color: transparent;
          color: #c2410c;
          border: 1.5px solid #ff6b3d;
          border-radius: 999px;
          font-weight: 600;
          font-size: 0.9rem;
          margin-bottom: 2rem;
        }

        .integrations-title {
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 700;
          line-height: 1.2;
          color: #1a202c;
          margin-bottom: 1.5rem;
          letter-spacing: -0.02em;
        }

        .integrations-description {
          font-size: 1.125rem;
          line-height: 1.7;
          color: #4a5568;
          margin-bottom: 3rem;
        }

        .integrations-logos {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1.5rem;
          align-items: center;
        }

        .integration-logo {
          width: 64px;
          height: 64px;
          background-color: #ffffff;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          padding: 12px;
        }

        .integration-logo:hover {
          transform: translateY(-4px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
        }

        .integration-logo img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        @media (max-width: 768px) {
          .integrations-section {
            margin: 2rem 1rem;
            padding: 4rem 1.5rem;
            border-radius: 16px;
          }

          .integration-logo {
            width: 56px;
            height: 56px;
          }
        }
      </style>

      <div class="integrations-section">
        <div class="integrations-inner">
          <div class="integrations-reveal-up" style="text-align: center;">
            <span class="integrations-pill">Integrations</span>
            <h2 class="integrations-title">Plays Well with Your Tech. Backed by a Team That Gets Governance.</h2>
            <p class="integrations-description">
              BoardBlocs connects easily with the tools you already use—no IT ticket required. Plus, 24/7 help center and a dedicated Success team trained on nonprofit governance.
            </p>
          </div>

          <div class="integrations-logos integrations-reveal-up" style="transition-delay: 200ms;">
            <div class="integration-logo" title="Google">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path></svg>
            </div>
            <div class="integration-logo" title="Zoom">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="#0b5cff" d="M14,24c0,2.7,1.4,5.2,3.6,6.5L30,37V11L17.6,17.5C15.4,18.8,14,21.3,14,24z"></path><path fill="#0b5cff" d="M33,11v26c0,0.5,0.5,1,1,1h0c0.5,0,1-0.5,1-1V11c0-0.5-0.5-1-1-1h0C33.5,10,33,10.5,33,11z"></path></svg>
            </div>
            <div class="integration-logo" title="Microsoft">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="#ff5722" d="M6 6H22V22H6z"></path><path fill="#4caf50" d="M26 6H42V22H26z"></path><path fill="#ffc107" d="M6 26H22V42H6z"></path><path fill="#03a9f4" d="M26 26H42V42H26z"></path></svg>
            </div>
            <div class="integration-logo" title="Dropbox">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><polygon fill="#1E88E5" points="24,4 9.2,13.4 24,22.8 38.8,13.4"></polygon><polygon fill="#1565C0" points="24,4 24,22.8 38.8,13.4"></polygon><polygon fill="#42A5F5" points="38.8,13.4 24,22.8 38.8,32.2 53.6,22.8"></polygon><polygon fill="#1E88E5" points="38.8,32.2 24,22.8 24,41.6 38.8,32.2"></polygon><polygon fill="#1976D2" points="24,22.8 9.2,32.2 24,41.6 24,22.8"></polygon><polygon fill="#42A5F5" points="9.2,13.4 24,22.8 9.2,32.2 -5.6,22.8"></polygon></svg>
            </div>
            <div class="integration-logo" title="Slack">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="#33d375" d="M33,8c0-2.209-1.791-4-4-4s-4,1.791-4,4c0,2.209,1.791,4,4,4h4V8z"></path><path fill="#33d375" d="M31,14c-2.209,0-4,1.791-4,4v12c0,2.209,1.791,4,4,4s4-1.791,4-4V18C35,15.791,33.209,14,31,14z"></path><path fill="#40c4ff" d="M40,31c2.209,0,4-1.791,4-4s-1.791-4-4-4s-4,1.791-4,4v4H40z"></path><path fill="#40c4ff" d="M34,29c0-2.209-1.791-4-4-4H18c-2.209,0-4,1.791-4,4s1.791,4,4,4h12C32.209,33,34,31.209,34,29z"></path><path fill="#e91e63" d="M8,17c-2.209,0-4,1.791-4,4s1.791,4,4,4s4-1.791,4-4v-4H8z"></path><path fill="#e91e63" d="M14,19c0,2.209,1.791,4,4,4h12c2.209,0,4-1.791,4-4s-1.791-4-4-4H18C15.791,15,14,16.791,14,19z"></path><path fill="#ffc107" d="M15,8c0,2.209,1.791,4,4,4s4-1.791,4-4s-1.791-4-4-4h-4V8z"></path><path fill="#ffc107" d="M17,14c2.209,0,4,1.791,4,4v12c0,2.209-1.791,4-4,4s-4-1.791-4-4V18C13,15.791,14.791,14,17,14z"></path></svg>
            </div>
            <div class="integration-logo" title="Salesforce">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="#00A1E0" d="M24.5,15.3c1.4-2.1,3.8-3.5,6.5-3.5c3.2,0,6,2,7.2,4.8c1-0.4,2-0.6,3.1-0.6c4.4,0,8,3.6,8,8s-3.6,8-8,8 c-0.3,0-0.7,0-1-0.1c-1.3,2.5-4,4.1-7,4.1c-1.1,0-2.1-0.2-3.1-0.6c-1.2,2.8-4,4.8-7.2,4.8c-2.7,0-5.1-1.4-6.5-3.5 c-0.8,0.2-1.6,0.3-2.5,0.3c-5.5,0-10-4.5-10-10c0-4.6,3.1-8.5,7.4-9.6C11.8,13.1,15.6,10,20,10C21.7,10,23.3,10.5,24.5,15.3z"></path></svg>
            </div>
            <div class="integration-logo" title="Microsoft Teams">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="#5059C9" d="M44,25v11c0,1.105-0.895,2-2,2H32V24h10C43.105,24,44,24.895,44,25z"></path><path fill="#7B83EB" d="M32,14v24H16c-1.105,0-2-0.895-2-2V14H32z"></path><path fill="#5059C9" d="M32,14h8c1.105,0,2,0.895,2,2v8H32V14z"></path><circle cx="26" cy="20" r="6" fill="#fff"></circle><path fill="#5059C9" d="M26,14c-3.314,0-6,2.686-6,6s2.686,6,6,6s6-2.686,6-6S29.314,14,26,14z M26,24c-2.209,0-4-1.791-4-4 s1.791-4,4-4s4,1.791,4,4S28.209,24,26,24z"></path><path fill="#7B83EB" d="M20,20c0,3.314,2.686,6,6,6V14C22.686,14,20,16.686,20,20z"></path><path fill="#5059C9" d="M14,24H6c-1.105,0-2-0.895-2-2v-8c0-1.105,0.895-2,2-2h8V24z"></path></svg>
            </div>
            <div class="integration-logo" title="OneDrive">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="#0078D4" d="M40.3,23.4c-0.1,0-0.2,0-0.3,0c-1.2-4.6-5.4-8-10.3-8c-2.4,0-4.6,0.8-6.4,2.1c-1.9-3.1-5.3-5.2-9.2-5.2 c-5.9,0-10.7,4.8-10.7,10.7c0,0.4,0,0.8,0.1,1.2C1.5,25.3,0,27.7,0,30.5C0,34.6,3.4,38,7.5,38h32.8c3.9,0,7.1-3.2,7.1-7.1 C47.4,26.8,44.3,23.6,40.3,23.4z"></path></svg>
            </div>
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

        const elements = container.querySelectorAll('.integrations-reveal-up');
        elements.forEach(el => observer.observe(el));
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", loadIntegrations);
    } else {
        loadIntegrations();
    }
})();
