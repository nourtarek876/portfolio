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
      <header>
        <Header />
      </header>
      <div className="landing">
        <div className="land">
          <div className="land-holder">
            <h1 className="glow">Let Me Make You Global</h1>
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
                    <button>Preview</button>
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
                    <button>Preview</button>
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
                    <button>Preview</button>
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
                    <button>Preview</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="my-art-btn flex justify-center py-16">
            <button class=" group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-blue-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-rose-300 relative bg-neutral-800 h-16 w-64 border text-left p-3 text-gray-50 text-base font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg">
              <a href="/work">See More Art</a>
            </button>
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
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="#ffffff"
                    role="img"
                    className="dis-svg"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.47 0 1.06-.01 1.91-.01 2.17 0 .21.15.46.55.38A8.002 8.002 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                  <p>
                    <a href="https://github.com/nourtarek876">Github</a>
                  </p>
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
                  <p>
                    <a href="https://www.instagram.com/nourelhorany32/">
                      Instagram
                    </a>
                  </p>
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
                  <p>
                    <a href="https://www.linkedin.com/in/nour-elden-tarek-4663901b2/">
                      LenkedIn
                    </a>
                  </p>
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
                <strong class="description">
                  <a href="/Contact">Hire Me</a>
                </strong>
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
          <div className="copy-write">
            © 2024 NOURTAREK ALL rights reserved.
          </div>
          <div className="developer">NOUR TAREK CODE & DESIGN</div>
        </div>
        {/* end footer */}
      </div>
    </>
  );
};

export default Landing;
