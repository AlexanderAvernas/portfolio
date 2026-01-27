import React, { useState } from 'react';
import { useRouter } from 'next/router';

const StickyNavButton = () => {
  const router = useRouter();
  const [isNavigating, setIsNavigating] = useState(false);

  // Bestäm om vi är på startsidan eller inte
  const isHomePage = router.pathname === '/';

  const handleClick = () => {
    setIsNavigating(true);
    
    setTimeout(() => {
      if (isHomePage) {
        router.push('/projects');
      } else {
        router.push('/');
      }
      setTimeout(() => setIsNavigating(false), 600);
    }, 300);
  };

  return (
    <>
      <button
        onClick={handleClick}
        className={`sticky-nav-button ${isNavigating ? 'navigating' : ''}`}
        aria-label={isHomePage ? 'Go to Projects' : 'Back to Home'}
      >
        {/* Roterande ring bakom */}
        <div className="rotating-ring"></div>
        
        {/* Pulsande glow effekt */}
        <div className="pulse-glow"></div>
        
        <div className="button-content">
          <div className="button-text">
            <span className="go-to-text">
              {isHomePage ? 'Till' : 'Tillbaka till'}
            </span>
            <span className="page-name">
              {isHomePage ? 'Projekt' : 'Start'}
            </span>
          </div>
          
          {/* Enkel pil-ikon */}
          <div className="arrow-icon">
            {isHomePage ? '→' : '←'}
          </div>
        </div>
      </button>
      
      <style jsx>{`
        .sticky-nav-button {
          position: fixed !important;
          bottom: 2rem !important;
          left: 50% !important;
          transform: translateX(-50%) !important;
          width: 110px;
          height: 110px;
          border-radius: 50%;
          background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
          border: 3px solid #8b7355;
          cursor: pointer;
          z-index: 1000;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
          transition: all 0.3s ease;
          overflow: visible;
        }

        .sticky-nav-button:hover {
          transform: translateX(-50%) scale(1.1) !important;
          box-shadow: 0 12px 32px rgba(139, 115, 85, 0.7);
          border-color: #a08565;
        }

        .sticky-nav-button:active {
          transform: translateX(-50%) scale(0.95) !important;
        }

        /* Roterande ring */
        .rotating-ring {
          position: absolute;
          top: -8px;
          left: -8px;
          right: -8px;
          bottom: -8px;
          border: 2px dashed rgba(139, 115, 85, 0.5);
          border-radius: 50%;
          animation: rotate 10s linear infinite;
          pointer-events: none;
        }

        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        /* Pulsande glow */
        .pulse-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 120%;
          height: 120%;
          transform: translate(-50%, -50%);
          background: radial-gradient(circle, rgba(139, 115, 85, 0.3) 0%, transparent 70%);
          border-radius: 50%;
          animation: pulse 2.5s ease-in-out infinite;
          pointer-events: none;
        }

        @keyframes pulse {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.4;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.15);
            opacity: 0;
          }
        }

        .button-content {
          width: 100%;
          height: 100%;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          z-index: 2;
          gap: 0.4rem;
        }

        .button-text {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.2rem;
        }

        .go-to-text {
          font-size: 0.65rem;
          font-weight: 400;
          color: #8b7355;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          line-height: 1;
        }

        .page-name {
          font-size: 1.1rem;
          font-weight: 700;
          color: white;
          text-transform: uppercase;
          letter-spacing: 1.2px;
          line-height: 1;
          text-align: center;
        }

        /* Enkel pil-ikon */
        .arrow-icon {
          color: #8b7355;
          font-size: 1.8rem;
          font-weight: bold;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: float 2s ease-in-out infinite;
          line-height: 1;
        }

        @keyframes float {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(3px);
          }
        }

        /* Extra animation vid navigering */
        .sticky-nav-button.navigating .arrow-icon {
          animation: bounce 0.5s ease-in-out infinite;
        }

        @keyframes bounce {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
        }

        .sticky-nav-button.navigating .rotating-ring {
          animation: rotate 2s linear infinite;
        }

        @media (min-width: 769px) {
          .sticky-nav-button {
            width: 120px;
            height: 120px;
          }

          .go-to-text {
            font-size: 0.7rem;
          }

          .page-name {
            font-size: 1.2rem;
          }

          .arrow-icon {
            font-size: 2rem;
          }
        }

        @media (max-width: 768px) {
          .sticky-nav-button {
            bottom: 1.5rem !important;
            width: 100px;
            height: 100px;
          }

          .go-to-text {
            font-size: 0.6rem;
          }

          .page-name {
            font-size: 1rem;
          }

          .arrow-icon {
            font-size: 1.6rem;
          }
        }
      `}</style>
    </>
  );
};

export default StickyNavButton;