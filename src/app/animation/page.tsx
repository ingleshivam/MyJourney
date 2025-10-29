"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { SplitText } from "gsap/SplitText";
import React from "react";
import {
  Wifi,
  Signal,
  Battery,
  MousePointer2,
  MousePointerClick,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import InstaProfile from "@/components/InstaProfile";
import LoadingScreen from "@/components/LoadingScreen";
import Link from "next/link";
interface AppIconProps {
  Icon: string;
  name: string;
  color?: string;
  iconColor?: string;
}

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const contentRef = useRef(null);
  const firstSectionRef = useRef(null);
  const vectorImageRef = useRef(null);
  const mainTextRef = useRef(null);
  const introTextRef = useRef(null);
  const secondSectionRef = useRef(null);
  const ramJanmabhoomiRef = useRef(null);
  const thirdSectionRef = useRef(null);

  const screenWidth = window.innerWidth;

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  useLayoutEffect(() => {
    if (isLoading) return;

    let xTarget, yTarget;
    if (screenWidth < 640) {
      xTarget = 65;
      yTarget = 540;
    } else if (screenWidth < 1024) {
      xTarget = 50;
      yTarget = 300;
    } else {
      xTarget = 65;
      yTarget = 360;
    }

    gsap.registerPlugin(
      ScrollTrigger,
      ScrollSmoother,
      SplitText,
      MotionPathPlugin
    );
    ScrollTrigger.config({ ignoreMobileResize: true });

    const ramJanmaBhoomiTitle = SplitText.create(".ramJanmaBhoomiTitle", {
      type: "words, chars",
    });
    const ramJanmaBhoomiDesc = SplitText.create(".ramJanmaBhoomiDesc", {
      type: "words, chars",
    });
    const ramJanmaBhoomiEnding = SplitText.create(".ramJanmaBhoomiEnding", {
      type: "words, chars",
    });

    const ctx = gsap.context(() => {
      const smoother = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 2,
        smoothTouch: 2,
        effects: true,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top top",
          end: "+=8000",
          scrub: 1,
          pin: true,
          pinType: "transform",
        },
      });

      tl.fromTo(
        firstSectionRef.current,
        { scale: 1 },
        {
          scale: 1.1,
          ease: "power2.out",
          duration: 2,
        }
      )
        .fromTo(
          vectorImageRef.current,
          { scale: 1 },
          {
            scale: 1.2,
            ease: "power2.out",
            duration: 2,
          },
          "<"
        )
        .fromTo(
          mainTextRef.current,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotationX: 0,
          },
          {
            opacity: 0,
            y: -50,
            scale: 0.9,
            rotationX: -15,
            ease: "power2.out",
            duration: 2,
          },
          "<"
        )
        .fromTo(
          introTextRef.current,
          {
            opacity: 0,
            y: 100,
            scale: 0.8,
            rotationX: 45,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotationX: 0,
            ease: "power3.out",
            duration: 2,
          },
          "<"
        )
        .to(firstSectionRef.current, {
          scale: 1.5,
          opacity: 0,
          ease: "power2.in",
          duration: 2,
        })

        .fromTo(
          secondSectionRef.current,
          { opacity: 0, scale: 1 },
          {
            opacity: 1,
            scale: 1,
            duration: 2,
            ease: "power3.out",
          }
        )
        .fromTo(
          ramJanmabhoomiRef.current,
          { opacity: 0, scale: 0 },
          {
            opacity: 1,
            scale: 1,
            duration: 2,
          }
        )
        .fromTo(
          ramJanmaBhoomiTitle.chars,
          { autoAlpha: 0, y: 50 },
          {
            autoAlpha: 1,
            y: 0,
            stagger: 0.05,
            duration: 2,
            ease: "power2.out",
          }
        )
        .fromTo(
          ramJanmaBhoomiDesc.chars,
          { autoAlpha: 0, y: 50 },
          {
            autoAlpha: 1,
            y: 0,
            stagger: 0.05,
            duration: 2,
            ease: "power2.out",
          }
        )
        .fromTo(
          ramJanmaBhoomiEnding.chars,
          { autoAlpha: 0, y: 50 },
          {
            autoAlpha: 1,
            y: 0,
            stagger: 0.05,
            duration: 2,
            ease: "power2.out",
          }
        )
        .to(secondSectionRef.current, {
          scale: 1.5,
          opacity: 0,
          ease: "power2.in",
          duration: 2,
        })

        .fromTo(
          thirdSectionRef.current,
          { opacity: 0, scale: 1 },
          {
            opacity: 1,
            scale: 1,
            duration: 2,
            ease: "power3.out",
          }
        );

      return () => ctx.revert();
    });
  }, [isLoading]);

  return (
    <>
      {isLoading && <LoadingScreen />}

      <div
        id="smooth-wrapper"
        style={{
          opacity: isLoading ? 0 : 1,
          transition: "opacity 0.5s ease-in-out",
        }}
      >
        <div id="smooth-content">
          <div ref={contentRef}>
            <div
              ref={firstSectionRef}
              className="h-screen w-screen bg-no-repeat absolute bg-center bg-cover z-0" // <-- REMOVED 'fixed'
              style={{ backgroundImage: `url("/images/somnath-temple.jpg")` }}
            >
              <div
                ref={vectorImageRef}
                className="h-full w-full bg-no-repeat bg-cover bg-top mix-blend-darken"
                style={{ backgroundImage: `url("/images/vector1.jpg")` }}
              ></div>

              <div
                ref={mainTextRef}
                className="p-8 text-white relative bottom-[49vh] md:bottom-[50vh] left-0 right-0"
                style={{ transformStyle: "preserve-3d" }}
              >
                <h1
                  className="text-7xl md:text-8xl text-center font-bold mb-4"
                  style={{ fontFamily: "BystanderSans , sans-serif" }}
                >
                  The Divine Odyssey
                </h1>
                <p
                  className="text-3xl text-center md:text-4xl  "
                  style={{ fontFamily: "America, sans-serif" }}
                >
                  Traversing through temples, tales, and timeless traditions.
                </p>
              </div>

              <div
                ref={introTextRef}
                className="p-8 text-white relative flex flex-col items-center bottom-[81vh] md:bottom-[77vh] left-0 right-0"
                style={{ transformStyle: "preserve-3d" }}
              >
                <h1
                  className="text-7xl md:text-8xlfont-bold mb-4"
                  style={{ fontFamily: "BystanderSans , sans-serif" }}
                >
                  INTRODUCTION
                </h1>
                <p
                  className="text-1xl md:text-2xl break-words whitespace-normal text-center max-w-[60ch]"
                  style={{ fontFamily: "CinzelDecorative, sans-serif" }}
                >
                  Hi, I’m Shivam — a software developer and traveler who loves
                  discovering new places, learning local cultures, and capturing
                  memories along the way.
                </p>
              </div>
            </div>

            <div
              ref={secondSectionRef}
              className="absolute top-0 h-screen w-screen flex items-center justify-center text-white  -z-10 overflow-hidden bg-gradient-to-b from-[#1a0f0f] via-[#201010] to-black text-white"
            >
              <div className="absolute inset-0">
                <img
                  src="/backgrounds/ayodhya-bg.png"
                  alt="Ayodhya Background"
                  className="h-full w-full object-cover opacity-60 "
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/90"></div>
              </div>

              <div className="relative z-10 mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 px-6 sm:px-10 lg:px-20 max-w-7xl">
                <div className="flex-shrink-0 w-full sm:w-[70%] md:w-[50%] lg:w-[45%] flex justify-center">
                  <img
                    src="/posts/RamJanmabhoomi1.webp"
                    alt="Shri Ram Janmabhoomi, Ayodhya"
                    className="rounded-[2rem] shadow-[0_0_50px_rgba(255,215,0,0.35)] object-cover h-[55vh] w-auto border border-yellow-500/30"
                    ref={ramJanmabhoomiRef}
                  />
                </div>

                <div className="flex-1 space-y-6 text-center lg:text-left">
                  <h2
                    style={{ fontFamily: "BystanderSans, sans-serif" }}
                    className="text-4xl sm:text-5xl font-bold text-yellow-400 drop-shadow-[0_2px_15px_rgba(255,255,0,0.4)] ramJanmaBhoomiTitle"
                  >
                    Shri Ram Janmabhoomi, Ayodhya
                  </h2>

                  <p
                    style={{ fontFamily: "CinzelDecorative, serif" }}
                    className="text-gray-200 leading-relaxed text-lg sm:text-[1.1rem] max-w-[65ch] mx-auto lg:mx-0 text-justify ramJanmaBhoomiDesc"
                  >
                    Shri Ram Janmabhoomi in Ayodhya, Uttar Pradesh, is revered
                    by Hindus as the birthplace of Lord Rama, the seventh avatar
                    of the god Vishnu. This sacred site has been a focal point
                    of devotion for centuries and is a major pilgrimage
                    destination. It was the center of a long-standing historical
                    and legal dispute, which culminated in a 2019 Supreme Court
                    verdict that granted the land for the construction of a
                    Hindu temple. Following this decision, the grand Shri Ram
                    Mandir, built in the traditional Nagara style of
                    architecture, was constructed. The new temple&apos;s
                    consecration ceremony (Pran Pratishtha) took place on
                    January 22, 2024, marking a significant event for devotees
                    worldwide.
                  </p>

                  <div className="pt-3">
                    <p className="text-yellow-300 italic text-xl sm:text-2xl font-semibold tracking-wider  ramJanmaBhoomiEnding">
                      “जय श्री राम”
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute top-1/2 left-1/3 h-60 w-60 rounded-full bg-yellow-500/10 blur-3xl animate-pulse"></div>
              <div className="absolute bottom-10 right-1/4 h-40 w-40 rounded-full bg-orange-400/10 blur-2xl animate-pulse"></div>
            </div>
            <div
              ref={thirdSectionRef}
              className="text-white absolute top-0 h-screen w-screen flex items-center justify-center text-white  -z-10 overflow-hidden bg-gradient-to-b from-[#1a0f0f] via-[#201010] to-black text-white"
            >
              HIIIIIIIIIIIIIIIIIIII
            </div>
            <div className="h-screen w-screen" />
          </div>
        </div>
      </div>
    </>
  );
}
