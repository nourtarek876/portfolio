"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "./header";

gsap.registerPlugin(ScrollTrigger);

const Landing = () => {
  const elementsRef = useRef([]);

  useEffect(() => {
    elementsRef.current.forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: element,
            start: "top 80%", // adjust as needed
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <>
    <Header />
      <div className="landing">
        <div className="land">
          <div className="land-holder">
            <h1 className="glow">Build Your Dreams</h1>
            <div class="section-banner">
              <div id="star-1">
                <div class="curved-corner-star">
                  <div id="curved-corner-bottomright"></div>
                  <div id="curved-corner-bottomleft"></div>
                </div>
                <div class="curved-corner-star">
                  <div id="curved-corner-topright"></div>
                  <div id="curved-corner-topleft"></div>
                </div>
              </div>

              <div id="star-2">
                <div class="curved-corner-star">
                  <div id="curved-corner-bottomright"></div>
                  <div id="curved-corner-bottomleft"></div>
                </div>
                <div class="curved-corner-star">
                  <div id="curved-corner-topright"></div>
                  <div id="curved-corner-topleft"></div>
                </div>
              </div>

              <div id="star-3">
                <div class="curved-corner-star">
                  <div id="curved-corner-bottomright"></div>
                  <div id="curved-corner-bottomleft"></div>
                </div>
                <div class="curved-corner-star">
                  <div id="curved-corner-topright"></div>
                  <div id="curved-corner-topleft"></div>
                </div>
              </div>

              <div id="star-4">
                <div class="curved-corner-star">
                  <div id="curved-corner-bottomright"></div>
                  <div id="curved-corner-bottomleft"></div>
                </div>
                <div class="curved-corner-star">
                  <div id="curved-corner-topright"></div>
                  <div id="curved-corner-topleft"></div>
                </div>
              </div>

              <div id="star-5">
                <div class="curved-corner-star">
                  <div id="curved-corner-bottomright"></div>
                  <div id="curved-corner-bottomleft"></div>
                </div>
                <div class="curved-corner-star">
                  <div id="curved-corner-topright"></div>
                  <div id="curved-corner-topleft"></div>
                </div>
              </div>

              <div id="star-6">
                <div class="curved-corner-star">
                  <div id="curved-corner-bottomright"></div>
                  <div id="curved-corner-bottomleft"></div>
                </div>
                <div class="curved-corner-star">
                  <div id="curved-corner-topright"></div>
                  <div id="curved-corner-topleft"></div>
                </div>
              </div>

              <div id="star-7">
                <div class="curved-corner-star">
                  <div id="curved-corner-bottomright"></div>
                  <div id="curved-corner-bottomleft"></div>
                </div>
                <div class="curved-corner-star">
                  <div id="curved-corner-topright"></div>
                  <div id="curved-corner-topleft"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* start about */}
        <div className="land-about">
          <h1>About Me</h1>
          <div className="about-content">
            <p>
              Hello! I’m Nour Elden. jenior Web Developer specializing in front
              end development. Experienced with all stages of the development
              cycle for dynamic web projects. Well-versed in numerous
              programming languages including JavaScript, SQL, Vue.js, Php and
              etc.
            </p>
            <Image
              className="about-img"
              src="/me1.jpg"
              quality={100}
              width={300}
              height={300}
              alt="me in work"
            />
          </div>
        </div>
        {/* end about */}
        {/* start work */}
        <div className="land-work">
          <h1>My Art</h1>
          <div className="work-cards">
            <div className="card-holder">
              <div class="card">
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="card-inner inner-1">
                  <a href="https://nourtarek876.github.io/3al-_fa7m/">
                    <button>See More</button>
                  </a>
                </div>
              </div>
            </div>
            <div className="card-holder">
              <div class="card">
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="card-inner inner-2">
                  <a href="https://nourtarek876.github.io/o-led/">
                    <button>See More</button>
                  </a>
                </div>
              </div>
            </div>
            <div className="card-holder">
              <div class="card">
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="card-inner inner-3">
                  <a href="https://nourtarek876.github.io/myano/">
                    <button>See More</button>
                  </a>
                </div>
              </div>
            </div>
            <div className="card-holder">
              <div class="card">
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="card-inner inner-4">
                  <a href="https://nourtarek876.github.io/sunnaliva/">
                    <button>See More</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end work */}
        {/* start social */}
        <div className="social">
          <div className="social-text">
            <h1> My Social</h1>
          </div>
          <div className="social-me">
            <div class="light-button">
              <button class="bt">
                <div class="light-holder">
                  <div class="dot"></div>
                  <div class="light"></div>
                </div>
                <div class="button-holder">
                  <svg
                    className="dis-svg"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    role="img"
                  >
                    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"></path>
                  </svg>
                  <p><a href="https://discord.gg/UfVWe9eDD9">Discord</a></p>
                </div>
              </button>
            </div>
            <div class="light-button">
              <button class="bt">
                <div class="light-holder">
                  <div class="dot"></div>
                  <div class="light insta-light"></div>
                </div>
                <div class="button-holder">
                  <svg
                    className="insta-svg"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    role="img"
                  >
                    <path d="M224,202.66A53.34,53.34,0,1,0,277.34,256,53.38,53.38,0,0,0,224,202.66Zm124.71,0A130.59,130.59,0,0,1,352,256c0,72.29-58.71,131-131,131S90,328.29,90,256,148.71,125,224,125a130.59,130.59,0,0,1,95.71,34.29ZM398.4,64H49.6A49.65,49.65,0,0,0,0,113.6V398.4A49.65,49.65,0,0,0,49.6,448H398.4A49.65,49.65,0,0,0,448,398.4V113.6A49.65,49.65,0,0,0,398.4,64ZM224,338.67A82.67,82.67,0,1,1,306.67,256,82.73,82.73,0,0,1,224,338.67Zm136.19-167.68a30.3,30.3,0,1,1,30.29-30.3A30.27,30.27,0,0,1,360.19,170.99Z" />
                  </svg>
                  <p><a href="https://www.instagram.com/nourelhorany32/">Instagram</a></p>
                </div>
              </button>
            </div>
            <div class="light-button">
              <button class="bt">
                <div class="light-holder">
                  <div class="dot"></div>
                  <div class="light"></div>
                </div>
                <div class="button-holder">
                  <svg
                    className="link-svg"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    role="img"
                  >
                    <path d="M22.23 0H1.77C.79 0 0 .77 0 1.74v20.52C0 23.23.79 24 1.77 24h20.46C23.21 24 24 23.23 24 22.26V1.74C24 .77 23.21 0 22.23 0zM7.12 20.45H3.56V8.98h3.56v11.47zM5.34 7.47h-.02c-1.2 0-1.98-.83-1.98-1.87 0-1.07.8-1.86 2.03-1.86 1.23 0 1.98.78 2 1.87 0 1.04-.77 1.86-2.03 1.86zM20.45 20.45h-3.56v-5.89c0-1.48-.53-2.49-1.86-2.49-.96 0-1.54.65-1.8 1.28-.09.22-.11.53-.11.85v6.25h-3.56s.05-10.14 0-11.47h3.56v1.62c.47-.73 1.32-1.77 3.21-1.77 2.34 0 4.09 1.53 4.09 4.82v6.8z"></path>
                  </svg>
                  <p><a href="https://www.linkedin.com/in/nour-elden-tarek-4663901b2/">LenkedIn</a></p>
                </div>
              </button>
            </div>
          </div>
          {/* start-color-full-btn */}
          <div className="clr-fll">
            <button type="button" class="btn">
              <div class="smoke">
                <div class="cloud"></div>
                <div class="cloud"></div>
                <div class="cloud"></div>
                <div class="cloud"></div>
                <div class="cloud"></div>
                <div class="cloud"></div>
                <div class="cloud"></div>
                <div class="cloud"></div>
                <div class="cloud"></div>
                <div class="cloud"></div>
                <div class="cloud"></div>
                <div class="cloud"></div>
                <div class="cloud"></div>
                <div class="cloud"></div>
              </div>
              <div class="title">
                <span class="thunder">⚡</span>
                <strong class="description"><a href="#">Hire Me</a></strong>
                <span class="thunder">⚡</span>
              </div>
              <div class="glass">
                <div class="inner-glass"></div>
              </div>
            </button>
          </div>

          {/* end-color-full-btn */}
        </div>
        {/* end social */}
        {/* start footer */}
        <div className="footer">
          <div className="copy-write">© 2024 NOURTAREK ALL rights reserved.</div> <div className="developer">NOUR TAREK CODE & DESIGN</div>
          </div>
          {/* end footer */}
      </div>
    </>
  );
};

export default Landing;
