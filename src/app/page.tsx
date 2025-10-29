"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
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

  const mainImageRef = useRef(null);
  const vectorImageRef = useRef(null);
  const mainTextRef = useRef(null);
  const introTextRef = useRef(null);
  const secondSectionRef = useRef(null);
  const secondSectionTextRef = useRef(null);
  const secondSectionTabRef = useRef(null);
  const mousePointerRef = useRef(null);
  const splashScreeenRef = useRef(null);
  const profileRef = useRef(null);
  const hideIconsRef = useRef(null);
  const designOuterRef = useRef(null);
  const designInnerRef = useRef(null);
  const garlandRef = useRef(null);
  const garlandRef1 = useRef(null);
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
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
    ScrollTrigger.config({ ignoreMobileResize: true });
    ScrollTrigger.normalizeScroll(true);
    const ctx = gsap.context(() => {
      const smoother = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1.2,
        smoothTouch: 2,
        effects: true,
      });

      gsap.fromTo(
        mainImageRef.current,
        { scale: 1 },
        {
          scale: 1.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: mainImageRef.current,
            start: "top top",
            end: "+=500",
            scrub: 1,
            pin: true,
            markers: false,
          },
        }
      );

      gsap.fromTo(
        vectorImageRef.current,
        { scale: 1 },
        {
          scale: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: vectorImageRef.current,
            start: "top top",
            end: "+=500",
            scrub: 1,
            markers: false,
          },
        }
      );

      gsap.fromTo(
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
          scrollTrigger: {
            trigger: mainTextRef.current,
            start: "0% 50%",
            end: "0% 40%",
            scrub: 1,
            markers: false,
          },
        }
      );

      gsap.fromTo(
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
          scrollTrigger: {
            trigger: introTextRef.current,
            start: "0% 60%",
            end: "0% 40%",
            scrub: 1,
            markers: false,
          },
        }
      );

      ScrollTrigger.create({
        trigger: secondSectionRef.current,
        start: "top top",
        end: "+=4000",
        scrub: true,
        pin: true,
        markers: false,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: secondSectionRef.current,
          start: "top top",
          end: "+=4000",
          scrub: true,
        },
      });

      tl.fromTo(
        secondSectionTextRef.current,
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
          duration: 3,
        },
        "+=0.5"
      )
        .fromTo(
          secondSectionTabRef.current,
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
            duration: 3,
            ease: "power3.out",
          },
          "+=0.5"
        )
        .fromTo(
          mousePointerRef.current,
          {
            y: 20,
            x: 0,
          },
          {
            y: yTarget,
            x: xTarget,
            ease: "power3.out",
            duration: 5,
          },
          "+=0.5"
        );

      tl.fromTo(
        splashScreeenRef.current,
        {
          scale: 0,
        },
        {
          scale: 1,
          duration: 2,
          delay: 1,
          ease: "power3.out",
        },
        "+=0.5"
      ).fromTo(
        profileRef.current,
        {
          scale: 0,
        },
        {
          scale: 1,
          duration: 2,
          delay: 1,
          ease: "power3.out",
        },
        "<"
      );

      tl.to(splashScreeenRef.current, {
        opacity: 0,
        duration: 1,
        zIndex: -1,
        ease: "power1.inOut",
      })
        .to(
          hideIconsRef.current,
          {
            opacity: 0,
            duration: 1,
            zIndex: -1,
            ease: "power1.inOut",
          },
          "<"
        )
        .to(
          mousePointerRef.current,
          {
            opacity: 0,
            duration: 1,
            zIndex: -1,
            ease: "power1.inOut",
          },
          "<"
        )
        .to({}, {}, "+=5");

      gsap.to(designOuterRef.current, {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: "linear",
        transformOrigin: "50% 50%",
      });

      gsap.to(designInnerRef.current, {
        rotation: -360,
        duration: 4,
        repeat: -1,
        ease: "linear",
        transformOrigin: "center center",
      });

      gsap.to(garlandRef.current, {
        rotation: 8,
        duration: 2,
        transformOrigin: "top left",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(garlandRef1.current, {
        rotation: -8,
        duration: 2,
        transformOrigin: "top right",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      return () => ctx.revert();
    });
  }, [isLoading]);

  const AppIcon: React.FC<AppIconProps> = ({
    Icon,
    name,
    color = "bg-white/20",
  }) => {
    return (
      <div className="flex flex-col items-center justify-start space-y-1.5 w-20 h-20">
        <img width="50" height="50" src={Icon} />

        <span className="text-white text-xs font-light tracking-wide truncate w-full text-center">
          {name}
        </span>
      </div>
    );
  };

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
          <div
            ref={mainImageRef}
            className="h-screen w-screen bg-no-repeat relative bg-center bg-cover z-0" // <-- REMOVED 'fixed'
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
            className="relative bg-black h-screen w-screen z-20 mb-10"
          >
            <div
              ref={secondSectionTextRef}
              className="text-white flex flex-col items-center justify-center p-3"
            >
              <h1
                className="text-4xl font-bold mb-4"
                style={{ fontFamily: "BystanderSans , sans-serif" }}
              >
                Moments Captured
              </h1>
              <p
                className="text-1xl break-words whitespace-normal text-center max-w-[60ch]"
                style={{ fontFamily: "CinzelDecorative, sans-serif" }}
              >
                A glimpse into my travel moments — captured, shared, and
                remembered.
              </p>
            </div>

            <div
              ref={secondSectionTabRef}
              className="absolute bottom-10 left-0 right-0 h-[calc(100vh-20vh)] md:h-auto w-full max-w-4xl mx-auto bg-zinc-800 p-2.5 rounded-2xl shadow-4xl styled-scrollbar"
            >
              <div
                className="h-full w-full aspect-[16/10] rounded-lg relative overflow-hidden flex flex-col bg-cover"
                style={{
                  backgroundImage: `url("/images/samsung-wallpaper.png")`,
                }}
              >
                <img
                  ref={splashScreeenRef}
                  src="/images/InstaSplash.png"
                  className="z-10 absolute h-full object-cover"
                />
                <InstaProfile ref={profileRef} />
                <div
                  ref={hideIconsRef}
                  className="absolute top-0 right-0 h-10 px-6 flex justify-end items-center space-x-2 text-white/90"
                >
                  <span className="text-sm font-semibold">10:30</span>
                  <Wifi size={16} />
                  <Signal size={16} />
                  <Battery size={16} />
                </div>
                <span
                  ref={mousePointerRef}
                  className="w-fit h-fit relative flex self-center"
                >
                  <MousePointer2 />
                </span>

                <div className="flex flex-col items-center justify-end h-full space-y-3">
                  <div className="flex justify-center items-start space-x-10">
                    <AppIcon
                      Icon={"/icons/GalaxyStore.png"}
                      name="Galaxy Store"
                      color="bg-zinc-100"
                      iconColor="#5A409A"
                    />
                    <AppIcon
                      Icon={"/icons/Contacts.png"}
                      name="Contacts"
                      color="bg-blue-500"
                    />
                    <AppIcon
                      Icon={"/icons/Email.png"}
                      name="Email"
                      color="bg-purple-600"
                    />
                    <AppIcon
                      Icon={"/icons/Instagram.png"}
                      name="Instagram"
                      color="bg-gradient-to-br from-pink-500 via-red-500 to-orange-400"
                    />
                    <AppIcon
                      Icon={"/icons/GalaxyThemes.png"}
                      name="Galaxy Themes"
                      color="bg-blue-600"
                    />
                    <AppIcon
                      Icon={"/icons/Gallery.png"}
                      name="Gallery"
                      color="bg-white"
                      iconColor="#4285F4"
                    />
                  </div>

                  <div className="flex items-center justify-center space-x-8  px-6 py-4">
                    <AppIcon
                      Icon={"/icons/Messages.png"}
                      name="Messages"
                      color="bg-purple-200"
                      iconColor="#603F8B"
                    />
                    <AppIcon
                      Icon={"/icons/SamsungPay.png"}
                      name="Samsung Pay"
                      color="bg-orange-400"
                    />
                    <AppIcon
                      Icon={"/icons/MyFiles.png"}
                      name="My Files"
                      color="bg-white"
                      iconColor="#34A853"
                    />
                    <AppIcon
                      Icon={"/icons/Phone.png"}
                      name="Phone"
                      color="bg-blue-500"
                    />
                    <AppIcon
                      Icon={"/icons/SamsungInternet.png"}
                      name="Samsung Internet"
                      color="bg-white"
                      iconColor="#DB4437"
                    />
                    <AppIcon
                      Icon={"/icons/SamsungNotes.png"}
                      name="Samsung Notes"
                      color="bg-red-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url("/images/TempleBackground.png")` }}
            className="relative h-screen w-screen bg-cover bg-center overflow-hidden hidden md:block"
          >
            <div
              ref={garlandRef}
              className="left-40 h-[65vh] w-full absolute bg-no-repeat bg-contain bg-left"
              style={{ backgroundImage: `url("/images/Garlands.png")` }}
            ></div>
            <div
              ref={garlandRef1}
              className="right-40 h-[65vh] w-full absolute bg-no-repeat bg-contain bg-right"
              style={{ backgroundImage: `url("/images/Garlands.png")` }}
            ></div>

            <div
              ref={designOuterRef}
              style={{ backgroundImage: `url("/images/Design.png")` }}
              className="absolute inset-0 bg-contain bg-no-repeat bg-center"
            ></div>

            <div className="absolute inset-0 flex flex-col items-center justify-end">
              <div
                style={{ backgroundImage: `url("/images/Subtract.png")` }}
                className="absolute bottom-0 h-[82vh] w-full bg-center bg-contain bg-no-repeat"
              >
                <div
                  style={{
                    backgroundImage: `url("/images/SomnathMahadevVector1.png")`,
                  }}
                  className="mix-blend-multiply absolute top-[30vh] left-1/2 -translate-x-1/2 w-[20%] h-[18%] bg-center bg-contain bg-no-repeat"
                ></div>

                <div
                  style={{
                    fontFamily: "BystanderSans, sans-serif",
                    color: "#FBF3E5",
                  }}
                  className="absolute bottom-48 w-full text-[10vh] flex justify-center"
                >
                  JAI SOMNATH
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
