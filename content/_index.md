---
title: 'Home'
type: landing
sections:
  - block: hero
    content:
      title: ""
      text: |
        <style>
          .hover-pop {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .hover-pop:hover {
            transform: translateY(-8px) scale(1.02);
            box-shadow: 0 25px 40px rgba(0, 0, 0, 0.8) !important;
            border-color: rgba(255, 85, 0, 0.6) !important;
          }

          /* Mobile scaling targeting HTML element selectors directly */
          @media (max-width: 768px) {
            #section-hero iframe[src*="3d.html"] {
              width: 100px !important;
              height: 100px !important;
            }
            #section-hero .branding-title {
              font-size: 1.6rem !important;
            }
            #section-hero h1 {
              font-size: 1.65rem !important;
            }
            .hero-breakout-box {
              padding-top: 6rem !important; /* Extra clearance for sticky navbar */
            }
          }
        </style>

        <!-- Viewport Breakout: Uses justify-content: flex-start to prevent top-clipping on mobile -->
        <div class="hero-breakout-box" style="width: 100vw; margin-left: calc(50% - 50vw); padding: 5rem 4vw 4vh 4vw; min-height: 85vh; text-align: left; color: #ffffff; font-family: 'Roboto', sans-serif; display: flex; flex-direction: column; justify-content: flex-start; box-sizing: border-box;">
          
          <!-- Inner Constrainer (Centers on desktop, starts at top on mobile) -->
          <div style="width: 100%; max-width: 1500px; margin: auto 0;">
            
            <!-- Top-Left Logo & Branding -->
            <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 2rem;">
              <iframe src="/3d.html" allowtransparency="true" style="width: 160px; height: 160px; border: none; background: transparent; display: block; flex-shrink: 0;"></iframe>
              <span class="branding-title" style="color: #FEFEE2; font-size: 2.4rem; font-weight: 800; line-height: 1.1; letter-spacing: 0.04em;">
                MAD MOON<br>STUDIOS
              </span>
            </div>

            <!-- Inline Flexbox Split -->
            <div style="display: flex; flex-wrap: wrap; gap: 3.5rem; align-items: center; width: 100%;">
              
              <!-- Left Column: Text Box -->
              <div style="flex: 1.15 1 450px; background: rgba(18, 18, 18, 0.75); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); border: 1px solid rgba(255, 255, 255, 0.12); border-radius: 20px; padding: 1.8rem; box-shadow: 0 20px 30px rgba(0, 0, 0, 0.6);">
                <h1 style="font-size: 2.4rem; font-weight: 800; line-height: 1.2; color: #ffffff; margin-top: 0; margin-bottom: 1.25rem;">
                  Mad Moon Studios is an indie game development team based in Belfast
                </h1>
                
                <p style="font-size: 1.1rem; line-height: 1.6; color: #e2e8f0; margin-bottom: 1.5rem;">
                  We pride ourselves on rapid prototyping and a player first approach, ensuring we deliver the pure, cathartic fun our audience craves. Supported by Northern Ireland Screen and a nurturing local community, our goal is to build wild, joyous experiences with tight, intuitive mechanical depth.
                </p>
                
                <p style="font-size: 0.95rem; color: #94a3b8; margin-bottom: 0;">
                  To get in touch, email us at:<br>
                  <a href="mailto:info@madmoonstudios.co.uk" style="color: #ffffff; font-weight: 600; text-decoration: underline;">info@madmoonstudios.co.uk</a>
                </p>
              </div>

              <!-- Right Column: Video Embed -->
              <div style="flex: 0.85 1 350px; width: 100%; max-width: 700px; margin: 0 auto;">
                <div class="hover-pop" style="position: relative; width: 100%; border-radius: 12px; overflow: hidden; border: 2px solid rgba(255, 255, 255, 0.2); box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);">
                  
                  <div style="position: relative; padding-bottom: 56.25%; height: 0;">
                    <iframe src="https://www.youtube.com/embed/RBfGwsypPt4?autoplay=1&mute=1&loop=1&playlist=RBfGwsypPt4&controls=0&modestbranding=1&rel=0&disablekb=1" 
                            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none; pointer-events: none;" 
                            allow="autoplay; encrypted-media" 
                            allowfullscreen>
                    </iframe>
                  </div>
                  
                  <a href="https://youtu.be/RBfGwsypPt4" target="_blank" rel="noopener noreferrer" style="position: absolute; inset: 0; z-index: 10; display: block;"></a>
                  
                </div>
              </div>

            </div>
          </div>

        </div>
    design:
      no_padding: true
      spacing:
        padding: [0, 0, 0, 0]
      background:
        image:
          filename: 'SOL CONSTRUCT.png'
          filters:
            brightness: 0.35
        text_color: light
---