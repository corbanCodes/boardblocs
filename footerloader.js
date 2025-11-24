(function () {
    function loadFooter() {
        var container = document.getElementById("footer-container");
        if (!container) return;

        container.innerHTML = `
      <style>
        .footer-section {
          background-color: #ff6b3d;
          margin: 4rem 0 0 0;
          border-radius: 24px 24px 0 0;
          padding: 4rem 0 0 0;
          font-family: system-ui, -apple-system, sans-serif;
          color: #ffffff;
          position: relative;
          overflow: hidden;
        }

        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
          z-index: 2;
        }

        .footer-newsletter {
          text-align: center;
          margin-bottom: 4rem;
        }

        .footer-newsletter-title {
          font-size: clamp(1.75rem, 4vw, 2.5rem);
          font-weight: 700;
          margin-bottom: 0.5rem;
          color: #ffffff;
        }

        .footer-newsletter-subtitle {
          font-size: 1rem;
          margin-bottom: 2rem;
          opacity: 0.95;
        }

        .footer-newsletter-form {
          display: flex;
          gap: 1rem;
          justify-content: center;
          max-width: 500px;
          margin: 0 auto;
        }

        .footer-newsletter-input {
          flex: 1;
          padding: 0.875rem 1.25rem;
          border-radius: 8px;
          border: none;
          font-size: 1rem;
          background-color: #1e3a5f;
          color: #ffffff;
        }

        .footer-newsletter-input::placeholder {
          color: rgba(255, 255, 255, 0.6);
        }

        .footer-newsletter-button {
          padding: 0.875rem 2rem;
          border-radius: 8px;
          border: none;
          background-color: #ffffff;
          color: #ff6b3d;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .footer-newsletter-button:hover {
          background-color: #f3f4f6;
          transform: translateY(-1px);
        }

        .footer-links {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 3rem 2rem;
          margin-bottom: 4rem;
        }

        .footer-column h4 {
          font-size: 0.875rem;
          font-weight: 600;
          margin-bottom: 1.25rem;
          opacity: 0.9;
        }

        .footer-column ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-column ul li {
          margin-bottom: 0.75rem;
        }

        .footer-column ul li a {
          color: #ffffff;
          text-decoration: none;
          font-size: 0.9375rem;
          opacity: 0.9;
          transition: opacity 0.2s ease;
        }

        .footer-column ul li a:hover {
          opacity: 1;
          text-decoration: underline;
        }

        .footer-apps {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .footer-app-badge {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background-color: #000000;
          color: #ffffff;
          padding: 0.625rem 1.25rem;
          border-radius: 8px;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .footer-app-badge:hover {
          transform: translateY(-2px);
          background-color: #1a1a1a;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
        }

        .footer-app-icon {
          font-size: 1.5rem;
          flex-shrink: 0;
        }

        .footer-app-text {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .footer-app-label {
          font-size: 0.625rem;
          opacity: 0.8;
          line-height: 1;
        }

        .footer-app-name {
          font-size: 1.125rem;
          font-weight: 600;
          line-height: 1.2;
          color: #ffffff;
        }

        .footer-social {
          display: flex;
          gap: 1rem;
          margin-top: 1.5rem;
        }

        .footer-social a {
          color: #ffffff;
          font-size: 1.125rem;
          transition: opacity 0.2s ease;
        }

        .footer-social a:hover {
          opacity: 0.8;
        }

        .footer-bottom {
          position: relative;
          margin-top: 3rem;
          padding: 2rem 0;
        }

        .footer-graphic {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: auto;
          pointer-events: none;
          z-index: 1;
        }

        .footer-bottom-content {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.25rem;
          font-weight: 700;
          color: #ffffff;
        }

        .footer-logo img {
          height: 32px;
          width: auto;
        }

        .footer-legal {
          font-size: 0.8125rem;
          opacity: 0.9;
        }

        .footer-legal a {
          color: #ffffff;
          text-decoration: none;
          margin-left: 1rem;
        }

        .footer-legal a:hover {
          text-decoration: underline;
        }

        @media (max-width: 768px) {
          .footer-section {
            border-radius: 16px 16px 0 0;
          }

          .footer-newsletter-form {
            flex-direction: column;
          }

          .footer-newsletter-button {
            width: 100%;
          }

          .footer-links {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem 1.5rem;
          }

          .footer-bottom-content {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }

          .footer-legal {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
          }

          .footer-legal a {
            margin-left: 0;
          }
        }
      </style>

      <footer class="footer-section">
        <div class="footer-content">
          <div class="footer-newsletter">
            <h2 class="footer-newsletter-title">Join the Boardblocs Newsletter!</h2>
            <p class="footer-newsletter-subtitle">Sign up for our monthly newsletter for the latest trends & insights from the Boardblocs community.</p>
            <form class="footer-newsletter-form" onsubmit="event.preventDefault();">
              <input type="email" class="footer-newsletter-input" placeholder="Enter your email*" required>
              <button type="submit" class="footer-newsletter-button">Submit</button>
            </form>
          </div>

          <div class="footer-links">
            <div class="footer-column">
              <h4>New to Boardblocs?</h4>
              <ul>
                <li><a href="#">Agenda Builder</a></li>
                <li><a href="#">Document Center</a></li>
                <li><a href="#">Boardblocs Video</a></li>
                <li><a href="#">Minutes Maker</a></li>
                <li><a href="#">See All Features</a></li>
                <li><a href="#">Security</a></li>
                <li><a href="#">Integrations</a></li>
                <li><a href="#">Accessibility</a></li>
              </ul>
            </div>

            <div class="footer-column">
              <h4>Customers</h4>
              <ul>
                <li><a href="#">Support</a></li>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Product Updates</a></li>
              </ul>
            </div>

            <div class="footer-column">
              <h4>Resources Hub</h4>
              <ul>
                <li><a href="#">Blogs</a></li>
                <li><a href="#">Case Studies</a></li>
                <li><a href="#">E-Books</a></li>
                <li><a href="#">Webinars & Events</a></li>
              </ul>
            </div>

            <div class="footer-column">
              <h4>Company</h4>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Pressroom</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Trust Center</a></li>
              </ul>
            </div>

            <div class="footer-column">
              <div class="footer-apps">
                <a href="#" class="footer-app-badge">
                  <i class="bi bi-apple footer-app-icon"></i>
                  <div class="footer-app-text">
                    <span class="footer-app-label">Download on the</span>
                    <span class="footer-app-name">App Store</span>
                  </div>
                </a>
                <a href="#" class="footer-app-badge">
                  <i class="bi bi-google-play footer-app-icon"></i>
                  <div class="footer-app-text">
                    <span class="footer-app-label">GET IT ON</span>
                    <span class="footer-app-name">Google Play</span>
                  </div>
                </a>
              </div>
              <div class="footer-social">
                <a href="#" aria-label="LinkedIn"><i class="bi bi-linkedin"></i></a>
                <a href="#" aria-label="Facebook"><i class="bi bi-facebook"></i></a>
                <a href="#" aria-label="Twitter"><i class="bi bi-twitter"></i></a>
                <a href="#" aria-label="Instagram"><i class="bi bi-instagram"></i></a>
                <a href="#" aria-label="YouTube"><i class="bi bi-youtube"></i></a>
                <a href="#" aria-label="Pinterest"><i class="bi bi-pinterest"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <img src="footerpicture.png" alt="" class="footer-graphic">
          <div class="footer-bottom-content">
            <div class="footer-logo">
              <img src="logo.png" alt="Boardblocs logo">
              <span>Boardblocs</span>
            </div>
            <div class="footer-legal">
              © 2025 Boardblocs
              <a href="#">Sitemap</a>
              <a href="#">User Guide</a>
              <a href="#">Terms</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    `;
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", loadFooter);
    } else {
        loadFooter();
    }
})();
