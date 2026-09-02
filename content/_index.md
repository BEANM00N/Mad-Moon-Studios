---
title: 'Home'
type: landing
sections:
  - block: hero
    content:
      title: ""
      text: |
        <!-- Viewport Breakout & Full-Height Flex Container -->
        <div style="width: min(1100px, 90vw); min-height: 82vh; position: relative; left: 50%; transform: translateX(-50%); text-align: left; color: #ffffff; font-family: 'Roboto', sans-serif; display: flex; flex-direction: column; justify-content: space-between;">
          
          <!-- Top Content Area (Branding + Columns) -->
          <div>
            <!-- Upper-Left Branding (Logo + Title) -->
            <div style="display: flex; align-items: center; gap: 1.25rem; margin-bottom: 2rem;">
              <iframe src="/3d.html" allowtransparency="true" style="width: 210px; height: 205px; border: none; background: transparent; display: block; flex-shrink: 0;"></iframe>
              <span style="color: #FEFEE2; font-size: 2.2rem; font-weight: 800; line-height: 1.05; letter-spacing: 0.04em; display: inline-block;">
                MAD MOON<br>STUDIOS
              </span>
            </div>

            <!-- Two Wide Columns (Bio Left, Developers Right) -->
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 3.5rem; align-items: start;">
              
              <!-- Left Column: Studio Bio -->
              <div style="font-size: 1.05rem; line-height: 1.6; color: #e2e8f0;">
                <p style="font-weight: 700; font-size: 1.25rem; color: #ffffff; margin-bottom: 1.25rem;">
                  Mad Moon Studios is an independent game development team based in Belfast, Northern Ireland.
                </p>
                <p style="margin-bottom: 1.25rem;">
                  We pride ourselves on rapid prototyping and a player first approach, ensuring we deliver the pure, cathartic fun our audience craves. Supported by Northern Ireland Screen and a nurturing local community, our goal is to build wild, joyous experiences with tight, intuitive mechanical depth.
                </p>
                <p style="margin-bottom: 0;">
                  To get in touch or discuss partnerships, reach out at:<br>
                  <a href="mailto:info@madmoonstudios.co.uk" style="color: #FF5500; font-weight: bold; text-decoration: underline;">info@madmoonstudios.co.uk</a>
                </p>
              </div>

              <!-- Right Column: Developers ("We are:") -->
              <div style="font-size: 1.05rem; line-height: 1.6;">
                <h3 style="font-size: 1.25rem; font-weight: 700; color: #ffffff; margin-bottom: 1.25rem; margin-top: 0;">We are:</h3>
                
                <div style="margin-bottom: 1.25rem;">
                  <span style="color: #FF5500; font-weight: 700; font-size: 1.1rem;">Josh McCamley</span> 
                  <span style="color: #cbd5e1;">– Programmer, Technical Artist, 3D Artist, Designer</span>
                </div>

                <div>
                  <span style="color: #FF5500; font-weight: 700; font-size: 1.1rem;">Zach Johnston</span> 
                  <span style="color: #cbd5e1;">– Programmer, Designer, Technical Designer</span>
                </div>
              </div>

            </div>
          </div>

          <!-- Bottom Content Area: CTA Button anchored above footer -->
          <div style="text-align: center; padding-top: 2rem; padding-bottom: 1rem;">
            <a href="#sol-construct" style="display: inline-block; border: 2px solid #FF5500; color: #FF5500; border-radius: 9999px; padding: 0.75rem 2.5rem; font-size: 0.9rem; font-weight: 800; letter-spacing: 0.08em; text-decoration: none;">
              LEARN MORE ABOUT WHAT WE'RE MAKING
            </a>
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