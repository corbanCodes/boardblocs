(function () {
    function loadTestimonials() {
        var container = document.getElementById("testimonials-container");
        if (!container) return;

        const testimonials = [
            {
                quote: "BoardBlocs has been a game changer for our organization in terms of streamlining our monthly Board and Committee Meetings. We now have a central location for all our agendas and supporting documents, and have reduced our paper usage significantly.",
                name: "Julie R.",
                organization: "Boys and Girls Club of Truckee Meadows"
            },
            {
                quote: "BoardBlocs makes board management so much easier. Everything we need is in one place, and our board members love how simple it is to access materials and stay informed.",
                name: "Michael S.",
                organization: "Community Arts Foundation"
            },
            {
                quote: "The transition to BoardBlocs was seamless. Our team was up and running in no time, and the support has been exceptional throughout our journey.",
                name: "Sarah T.",
                organization: "Nonprofit Leadership Alliance"
            }
        ];

        container.innerHTML = `
      <style>
        .testimonials-section {
          width: 90%;
          max-width: 1000px;
          margin: 0 auto;
          padding: 6rem 0;
          font-family: system-ui, -apple-system, sans-serif;
        }

        /* Scroll Reveal Animations */
        .testimonials-reveal-up {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.5, 0, 0, 1);
        }

        .testimonials-reveal-up.active {
          opacity: 1;
          transform: translateY(0);
        }

        .testimonial-card {
          background: linear-gradient(135deg, #e0e7ff 0%, #dbeafe 100%);
          border-radius: 24px;
          padding: 3rem;
          position: relative;
        }

        .testimonial-quote {
          font-size: 1.125rem;
          line-height: 1.7;
          color: #1f2937;
          margin-bottom: 2rem;
        }

        .testimonial-author {
          font-size: 1.125rem;
          font-weight: 700;
          color: #1a202c;
          margin-bottom: 0.25rem;
        }

        .testimonial-org {
          font-size: 0.95rem;
          color: #6b7280;
        }

        .testimonial-nav {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-top: 2rem;
        }

        .testimonial-nav-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 2px solid #93c5fd;
          background-color: transparent;
          color: #2563eb;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .testimonial-nav-btn:hover {
          background-color: #2563eb;
          color: white;
          border-color: #2563eb;
        }

        .testimonial-nav-btn:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }

        .testimonial-nav-btn:disabled:hover {
          background-color: transparent;
          color: #2563eb;
          border-color: #93c5fd;
        }

        @media (max-width: 768px) {
          .testimonial-card {
            padding: 2rem;
            border-radius: 16px;
          }

          .testimonial-quote {
            font-size: 1rem;
          }
        }
      </style>

      <div class="testimonials-section">
        <div class="testimonial-card testimonials-reveal-up">
          <p class="testimonial-quote" id="testimonial-quote">"${testimonials[0].quote}"</p>
          <div class="testimonial-author" id="testimonial-author">${testimonials[0].name}</div>
          <div class="testimonial-org" id="testimonial-org">${testimonials[0].organization}</div>
          
          <div class="testimonial-nav">
            <button class="testimonial-nav-btn" id="testimonial-prev" aria-label="Previous testimonial">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            <button class="testimonial-nav-btn" id="testimonial-next" aria-label="Next testimonial">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>
        </div>
      </div>
    `;

        initTestimonialCarousel(testimonials);
        initScrollReveal(container);
    }

    function initTestimonialCarousel(testimonials) {
        let currentIndex = 0;
        const quoteEl = document.getElementById('testimonial-quote');
        const authorEl = document.getElementById('testimonial-author');
        const orgEl = document.getElementById('testimonial-org');
        const prevBtn = document.getElementById('testimonial-prev');
        const nextBtn = document.getElementById('testimonial-next');

        function updateTestimonial() {
            quoteEl.textContent = `"${testimonials[currentIndex].quote}"`;
            authorEl.textContent = testimonials[currentIndex].name;
            orgEl.textContent = testimonials[currentIndex].organization;

            prevBtn.disabled = currentIndex === 0;
            nextBtn.disabled = currentIndex === testimonials.length - 1;
        }

        prevBtn.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateTestimonial();
            }
        });

        nextBtn.addEventListener('click', () => {
            if (currentIndex < testimonials.length - 1) {
                currentIndex++;
                updateTestimonial();
            }
        });

        updateTestimonial();
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

        const elements = container.querySelectorAll('.testimonials-reveal-up');
        elements.forEach(el => observer.observe(el));
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", loadTestimonials);
    } else {
        loadTestimonials();
    }
})();
