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
        </style>

        <!-- Viewport Breakout Container (Widens the layout) -->
        <div style="width: min(1500px, 92vw); position: relative; left: 50%; transform: translateX(-50%); min-height: 85vh; text-align: left; color: #ffffff; font-family: 'Roboto', sans-serif; display: flex; flex-direction: column; justify-content: space-between; box-sizing: border-box;">
          
          <!-- Top-Left Logo & Branding -->
          <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
            <iframe src="/3d.html" allowtransparency="true" style="width: 160px; height: 160px; border: none; background: transparent; display: block; flex-shrink: 0;"></iframe>
            <span style="color: #FEFEE2; font-size: 2.4rem; font-weight: 800; line-height: 1.1; letter-spacing: 0.04em;">
              MAD MOON<br>STUDIOS
            </span>
          </div>

          <!-- Wide 2-Column Grid Split -->
          <div style="display: grid; grid-template-columns: 1.15fr 0.85fr; gap: 4rem; align-items: center; width: 100%; margin: auto 0; transform: translateY(-80px);">
            
            <!-- Left Column: Text Inside Dark Box (Grid Item 1) -->
            <div style="background: rgba(18, 18, 18, 0.75); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); border: 1px solid rgba(255, 255, 255, 0.12); border-radius: 20px; padding: 1.2rem; box-shadow: 0 20px 30px rgba(0, 0, 0, 0.6);">
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

            <!-- Right Column: clickable Video Embed (Grid Item 2) -->
            <div class="hover-pop" style="position: relative; width: 100%; max-width: 700px; margin: 0 auto; border-radius: 12px; overflow: hidden; border: 2px solid rgba(255, 255, 255, 0.2); box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);">
              
              <!-- 16:9 Aspect Ratio Wrapper -->
              <div style="position: relative; padding-bottom: 56.25%; height: 0;">
                <!-- controls=0 hides the player UI, rel=0 hides related videos -->
                <iframe src="https://www.youtube.com/embed/RBfGwsypPt4?autoplay=1&mute=1&loop=1&playlist=RBfGwsypPt4&controls=0&modestbranding=1&rel=0&disablekb=1" 
                        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none; pointer-events: none;" 
                        allow="autoplay; encrypted-media" 
                        allowfullscreen>
                </iframe>
              </div>
              
              <!-- Invisible Link Overlay to open YouTube in a new tab -->
              <a href="https://youtu.be/RBfGwsypPt4" target="_blank" rel="noopener noreferrer" style="position: absolute; inset: 0; z-index: 10; display: block;"></a>
              
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