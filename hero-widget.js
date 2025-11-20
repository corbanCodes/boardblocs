(function () {
  /**
   * Creates the hero widget demo interface
   */
  function createWidget() {
    return `
      <style>
        .hero-widget {
          position: absolute;
          left: 5%;
          top: 50%;
          transform: translateY(-50%) rotate(-2deg);
          z-index: 5;
          max-width: 420px;
          width: 90%;
          filter: drop-shadow(0 20px 60px rgba(0, 0, 0, 0.15));
        }

        .widget-main {
          background: #ffffff;
          border-radius: 16px;
          padding: 1.5rem;
          position: relative;
          min-height: 320px;
        }

        .widget-list {
          min-height: 240px;
        }

        .widget-sidebar {
          position: absolute;
          left: -50px;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          background: #ffffff;
          padding: 0.75rem 0.5rem;
          border-radius: 12px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
        }

        .widget-icon {
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #4a5568;
          font-size: 1.25rem;
          cursor: pointer;
          border-radius: 8px;
          transition: all 0.2s ease;
        }

        .widget-icon:hover {
          background: #f7fafc;
          color: #2563eb;
        }

        .widget-icon.active {
          background: #e0e7ff;
          color: #2563eb;
        }

        .widget-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.25rem;
          font-size: 1.125rem;
          font-weight: 600;
          color: #1a202c;
        }

        .widget-header-icon {
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #e0e7ff;
          color: #2563eb;
          border-radius: 50%;
          font-size: 1rem;
        }

        .widget-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .widget-item {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          padding: 0.5rem;
          border-radius: 8px;
          cursor: pointer;
          transition: background 0.2s ease;
          font-size: 0.9375rem;
        }

        .widget-item:hover {
          background: #f7fafc;
        }

        .widget-item-icon {
          font-size: 1.1rem;
          color: #718096;
          min-width: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .folder-icon {
          color: #eab308;
          font-size: 1.25rem;
        }

        .file-icon {
          color: #dc2626;
          font-size: 1.15rem;
        }

        .widget-item-text {
          color: #2d3748;
          font-weight: 400;
        }

        .widget-item.highlighted {
          background: #fef3c7;
        }

        .widget-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 600;
          font-size: 1.125rem;
        }

        .animated-cursor {
          position: absolute;
          width: 24px;
          height: 24px;
          pointer-events: none;
          z-index: 100;
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          opacity: 0;
        }

        .animated-cursor.visible {
          opacity: 1;
        }

        .cursor-click-effect {
          position: absolute;
          width: 40px;
          height: 40px;
          border: 2px solid #2563eb;
          border-radius: 50%;
          top: -8px;
          left: -8px;
          opacity: 0;
          transform: scale(0.8);
        }

        .cursor-click-effect.active {
          animation: clickPulse 0.6s ease-out;
        }

        @keyframes clickPulse {
          0% {
            opacity: 1;
            transform: scale(0.8);
          }
          100% {
            opacity: 0;
            transform: scale(1.5);
          }
        }

        .widget-profiles {
          position: absolute;
          right: -100px;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .widget-profile-img {
          width: 80px;
          height: 80px;
          border-radius: 14px;
          border: 3px solid;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          object-fit: cover;
          display: block;
        }

        .widget-profile-img:nth-child(1) {
          border-color: #f97316;
        }

        .widget-profile-img:nth-child(2) {
          border-color: #06b6d4;
        }

        .widget-profile-img:nth-child(3) {
          border-color: #ff6b3d;
        }

        .widget-profile-img:nth-child(4) {
          border-color: #10b981;
        }

        .widget-profile-img:nth-child(5) {
          border-color: #ec4899;
        }

        /* Medium screens - adjust positioning before full mobile */
        @media (max-width: 1400px) {
          .hero-widget {
            left: 8%;
            max-width: 400px;
          }

          .widget-profiles {
            right: -75px;
            gap: 0.7rem;
          }

          .widget-profile-img {
            width: 60px;
            height: 60px;
          }
        }

        /* Vertical layout - widget at top, text below */
        @media (max-width: 1274px) {
          .hero-widget {
            position: relative;
            left: auto;
            top: auto;
            transform: translateX(-5%) rotate(-1deg);
            margin: 1.5rem auto 2rem;
            max-width: 320px;
            width: 320px;
          }

          .widget-sidebar {
            display: none;
          }

          .widget-profiles {
            right: -75px;
            gap: 0.65rem;
          }

          .widget-profile-img {
            width: 60px;
            height: 60px;
          }
        }

        @media (max-width: 767px) {
          .hero-widget {
            width: 280px;
            max-width: 80%;
            transform: translateX(-5%) rotate(-1deg);
          }

          .widget-profiles {
            right: -58px;
            gap: 0.5rem;
          }

          .widget-profile-img {
            width: 48px;
            height: 48px;
          }

          .widget-main {
            padding: 1rem;
          }
        }

        @media (max-width: 480px) {
          .hero-widget {
            width: 260px;
            max-width: 85%;
            transform: translateX(-5%) rotate(-1deg);
          }

          .widget-profiles {
            right: -54px;
            gap: 0.45rem;
          }

          .widget-profile-img {
            width: 44px;
            height: 44px;
          }

          .widget-main {
            padding: 0.875rem;
          }

          .widget-item {
            font-size: 0.8125rem;
            gap: 0.5rem;
          }

          .widget-item-text {
            font-size: 0.8125rem;
            line-height: 1.3;
          }

          .widget-header {
            font-size: 1rem;
          }
        }
      </style>

      <div class="hero-widget">
        <div class="widget-sidebar">
          <div class="widget-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
          </div>
          <div class="widget-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          </div>
          <div class="widget-icon active">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 3v18"/></svg>
          </div>
          <div class="widget-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
          </div>
        </div>

        <div class="widget-main">
          <div class="widget-header">
            <div class="widget-header-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
            </div>
            Documents
          </div>

          <div class="widget-list" id="widget-list">
            <!-- Content will be dynamically updated -->
          </div>

          <div class="animated-cursor" id="animated-cursor">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#2563eb" stroke="white" stroke-width="1.5">
              <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/>
            </svg>
            <div class="cursor-click-effect"></div>
          </div>
        </div>

        <div class="widget-profiles">
          <img src="avatar images/avatar1.png" alt="Profile 1" class="widget-profile-img" />
          <img src="avatar images/avatar2.png" alt="Profile 2" class="widget-profile-img" />
          <img src="avatar images/avatar3.png" alt="Profile 3" class="widget-profile-img" />
          <img src="avatar images/avatar4.png" alt="Profile 4" class="widget-profile-img" />
          <img src="avatar images/avatar5.png" alt="Profile 5" class="widget-profile-img" />
        </div>
      </div>
    `;
  }

  // Animation sequence - simplified
  const animationSteps = [
    {
      folder: 'Q1 Committee Meeting',
      files: [
        { type: 'file-ppt', name: 'Meeting_Agenda.ppt' },
        { type: 'file-ppt', name: 'Q1_Report-202X.ppt' },
      ]
    },
    {
      folder: 'Finance Committee',
      files: [
        { type: 'file-excel', name: 'Budget_2024.xlsx' },
        { type: 'file-ppt', name: 'Budget_Presentation.pptx' },
      ]
    },
    {
      folder: 'Annual Reporting',
      files: [
        { type: 'file-ppt', name: 'Annual_Report.pptx' },
        { type: 'file-csv', name: 'financial_data.csv' },
      ]
    }
  ];

  function getFileIcon(type) {
    switch(type) {
      case 'folder': return '<span class="folder-icon">📁</span>';
      case 'file-ppt': return '<span class="file-icon">📄</span>';
      case 'file-excel': return '<span class="file-icon" style="color: #16a34a;">📊</span>';
      case 'file-csv': return '<span class="file-icon" style="color: #0891b2;">📋</span>';
      default: return '';
    }
  }

  function startAnimation() {
    const listEl = document.getElementById('widget-list');
    const cursorEl = document.getElementById('animated-cursor');
    
    if (!listEl) return;

    // Hide cursor completely
    if (cursorEl) {
      cursorEl.style.display = 'none';
    }

    const baseFolders = [
      { name: 'Q1 Committee Meeting', icon: '▾', expanded: true },
      { name: 'Audit', icon: '▸', avatar: 'S' },
      { name: 'Finance Committee', icon: '▸' },
      { name: 'Annual Reporting', icon: '▸' },
    ];

    const files = [
      { type: 'file-ppt', name: 'Meeting_Agenda.ppt' },
      { type: 'file-ppt', name: 'Q1_Report-202X.ppt' },
    ];

    // Render static view with Q1 folder open
    let html = '';
    
    baseFolders.forEach(folder => {
      html += `
        <div class="widget-item">
          <span class="widget-item-icon">${folder.icon}</span>
          ${folder.avatar ? `<div class="widget-avatar">${folder.avatar}</div>` : '<span class="folder-icon">📁</span>'}
          <span class="widget-item-text">${folder.name}</span>
        </div>
      `;
      
      // Add files if this is the expanded folder
      if (folder.expanded) {
        files.forEach(file => {
          html += `
            <div class="widget-item highlighted" style="padding-left: 2rem;">
              <span class="widget-item-icon"></span>
              ${getFileIcon(file.type)}
              <span class="widget-item-text">${file.name}</span>
            </div>
          `;
        });
      }
    });
    
    listEl.innerHTML = html;
  }

  // Export for use in index-hero.js
  window.HeroWidget = {
    create: createWidget,
    startAnimation: startAnimation
  };
})();
