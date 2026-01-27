import React from "react";

function HeroVisit() {
  return (
    <div className="HeroVisitContainer">
      {/* Vänster sida - Information */}
      <div className="HeroVisitLeft">
        <div className="HeroVisitContent">
          <div className="HeroVisitHeader">
            <h1 className="HeroVisitName">
              Alexander
              <br />
              <span className="NameAccent">Avernäs</span>
            </h1>
            <div className="HeroVisitUnderline"></div>

            <h2 className="HeroVisitTitle">Frontend Developer</h2>

            <p className="HeroVisitDescription">
              
            </p>
          </div>

          <div className="HeroVisitContact">
            <div className="HeroContactItem">
              <svg
                className="HeroContactIcon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span>alexanderavernas@gmail.com</span>
            </div>

            <div className="HeroContactItem">
              <svg
                className="HeroContactIcon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>

              <a
                href="https://drive.google.com/file/d/1zSU1Nsme9Z3CnqpUxg4UjgYr3tpJkNj5/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="HeroContactLink"
              >
                Ladda ner CV
              </a>
            </div>

            <div className="HeroContactItem">
              <svg
                className="HeroContactIcon"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <span>https://github.com/AlexanderAvernas</span>
            </div>
          </div>
        </div>
      </div>

      {/* Höger sida - Bild */}
      <div className="HeroVisitRight">
        <div className="HeroVisitGlow"></div>

        <div className="HeroVisitImageWrapper">
          <div className="HeroVisitImagePlaceholder">AA</div>
          <img
            className="HeroVisitImage"
            src="images/HeroImage.png"
            alt="Alexander Avernäs"
          />
        </div>

        <div className="HeroVisitScrollIndicator">
          <p className="HeroVisitScrollText">Scrolla för info</p>
          <svg
            className="HeroVisitScrollArrow"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default HeroVisit;
