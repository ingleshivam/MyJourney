// "use client";

// import { useEffect, useLayoutEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { ScrollSmoother } from "gsap/ScrollSmoother";
// import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
// import { MotionPathPlugin } from "gsap/MotionPathPlugin";
// // import { MotionPathHelper } from "gsap/MotionPathHelper";
// import InfoPoint from "@/components/InfoPoint";
// import React from "react";
// import LoadingScreen from "@/components/LoadingScreen";
// import Link from "next/link";

// interface AppIconProps {
//   Icon: string;
//   name: string;
//   color?: string;
//   iconColor?: string;
// }
export default function Page() {
  return <></>;
}
// export default function Home() {
//   const [isLoading, setIsLoading] = useState(true);

//   const mainImageRef = useRef<HTMLDivElement>(null);
//   const vectorImageRef = useRef<HTMLDivElement>(null);
//   const mainTextRef = useRef<HTMLDivElement>(null);
//   const introTextRef = useRef<HTMLDivElement>(null);
//   const secondSectionRef = useRef<HTMLDivElement>(null);
//   const secondSectionTabRef = useRef<SVGSVGElement>(null);

//   // const screenWidth = typeof window !== "undefined" ? window.innerWidth : 1024;

//   useEffect(() => {
//     const handleLoad = () => setIsLoading(false);

//     if (document.readyState === "complete") handleLoad();
//     else window.addEventListener("load", handleLoad);

//     return () => window.removeEventListener("load", handleLoad);
//   }, []);

//   useLayoutEffect(() => {
//     if (isLoading) return;

//     gsap.registerPlugin(
//       ScrollTrigger,
//       ScrollSmoother,
//       DrawSVGPlugin,
//       MotionPathPlugin
//       // MotionPathHelper
//     );
//     ScrollTrigger.config({ ignoreMobileResize: true });
//     ScrollTrigger.normalizeScroll(true);

//     const ctx = gsap.context(() => {
//       const smoother = ScrollSmoother.create({
//         wrapper: "#smooth-wrapper",
//         content: "#smooth-content",
//         smooth: 1.2,
//         smoothTouch: 2,
//         effects: true,
//       });

//       // Main image scale
//       gsap.fromTo(
//         mainImageRef.current,
//         { scale: 1 },
//         {
//           scale: 1.1,
//           ease: "power2.out",
//           scrollTrigger: {
//             trigger: mainImageRef.current,
//             start: "top top",
//             end: "+=500",
//             scrub: 1,
//             pin: true,
//           },
//         }
//       );

//       // Vector overlay scale
//       gsap.fromTo(
//         vectorImageRef.current,
//         { scale: 1 },
//         {
//           scale: 1.2,
//           ease: "power2.out",
//           scrollTrigger: {
//             trigger: vectorImageRef.current,
//             start: "top top",
//             end: "+=500",
//             scrub: 1,
//           },
//         }
//       );

//       // Main text fade out
//       gsap.fromTo(
//         mainTextRef.current,
//         { opacity: 1, y: 0, scale: 1, rotationX: 0 },
//         {
//           opacity: 0,
//           y: -50,
//           scale: 0.9,
//           rotationX: -15,
//           ease: "power2.out",
//           scrollTrigger: {
//             trigger: mainTextRef.current,
//             start: "0% 50%",
//             end: "0% 40%",
//             scrub: 1,
//           },
//         }
//       );

//       // Intro text fade in
//       gsap.fromTo(
//         introTextRef.current,
//         { opacity: 0, y: 100, scale: 0.8, rotationX: 45 },
//         {
//           opacity: 1,
//           y: 0,
//           scale: 1,
//           rotationX: 0,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: introTextRef.current,
//             start: "0% 60%",
//             end: "0% 40%",
//             scrub: 1,
//           },
//         }
//       );

//       const pulses = gsap
//         .timeline({
//           defaults: {
//             duration: 0.009,
//             autoAlpha: 1.5,
//             scale: 1,
//             transformOrigin: "center",
//             ease: "elastic(2.5, 1)",
//           },
//         })
//         .to(".ball02, .text01", { opacity: 1 }, 0.012)
//         .to(".ball03, .text02", {}, 0.03)
//         .to(".ball04, .text03", {}, 0.05)
//         .to(".ball05, .text04", {}, 0.08)
//         .to(".ball06, .text05", {}, 0.101)
//         .to(".ball07, .text06", {}, 0.123)
//         .to(".ball08, .text07", {}, 0.163)
//         .to(".ball09, .text08", {}, 0.189)
//         .to(".ball10, .text09", {}, 0.218);

//       const main = gsap
//         .timeline({
//           scrollTrigger: {
//             trigger: "#svg",
//             scrub: 1,
//             start: "top +=50",
//             end: "bottom top+=300",
//             // markers: true,
//           },
//         })
//         .to(".ball01", { duration: 0.01, autoAlpha: 1 })
//         .from(".theLine", { drawSVG: 0 }, 0)
//         .to(
//           ".ball01",
//           {
//             motionPath: {
//               path: ".theLine",
//               align: ".theLine",
//               alignOrigin: [0.5, 0.5],
//               autoRotate: true,
//             },
//           },
//           0
//         )
//         .add(pulses, 0);
//     });

//     // MotionPathHelper.create(".ball01");

//     return () => ctx.revert();
//   }, [isLoading]);

//   const AppIcon: React.FC<AppIconProps> = ({
//     Icon,
//     name,
//     color = "bg-white/20",
//   }) => (
//     <div className="flex flex-col items-center justify-start space-y-1.5 w-20 h-20">
//       <img width="50" height="50" src={Icon} />
//       <span className="text-white text-xs font-light tracking-wide truncate w-full text-center">
//         {name}
//       </span>
//     </div>
//   );

//   return (
//     <>
//       {isLoading && <LoadingScreen />}

//       <div
//         id="smooth-wrapper"
//         style={{
//           opacity: isLoading ? 0 : 1,
//           transition: "opacity 0.5s ease-in-out",
//         }}
//       >
//         <div id="smooth-content">
//           {/* Hero Section */}

//           <p className="text-white text-right px-6 mt-2 w-full">
//             <Link href={""}>VERSION 2</Link>
//           </p>
//           <div
//             ref={mainImageRef}
//             className="h-screen w-screen bg-no-repeat relative bg-center bg-cover z-0"
//             style={{ backgroundImage: `url("/images/somnath-temple.jpg")` }}
//           >
//             <div
//               ref={vectorImageRef}
//               className="h-full w-full bg-no-repeat bg-cover bg-top mix-blend-darken"
//               style={{ backgroundImage: `url("/images/vector1.jpg")` }}
//             ></div>

//             <div
//               ref={mainTextRef}
//               className="p-8 text-white relative bottom-[49vh] md:bottom-[50vh] left-0 right-0"
//               style={{ transformStyle: "preserve-3d" }}
//             >
//               <h1
//                 className="text-7xl md:text-8xl text-center font-bold mb-4"
//                 style={{ fontFamily: "BystanderSans , sans-serif" }}
//               >
//                 The Divine Odyssey
//               </h1>
//               <p
//                 className="text-3xl text-center md:text-4xl"
//                 style={{ fontFamily: "America, sans-serif" }}
//               >
//                 Traversing through temples, tales, and timeless traditions.
//               </p>
//             </div>

//             <div
//               ref={introTextRef}
//               className="p-8 text-white relative flex flex-col items-center bottom-[81vh] md:bottom-[77vh] left-0 right-0"
//               style={{ transformStyle: "preserve-3d" }}
//             >
//               <h1
//                 className="text-7xl md:text-8xl font-bold mb-4"
//                 style={{ fontFamily: "BystanderSans , sans-serif" }}
//               >
//                 INTRODUCTION
//               </h1>
//               <p
//                 className="text-1xl md:text-2xl break-words whitespace-normal text-center max-w-[60ch]"
//                 style={{ fontFamily: "CinzelDecorative, sans-serif" }}
//               >
//                 Hi, I’m Shivam — a software developer and traveler who loves
//                 discovering new places, learning local cultures, and capturing
//                 memories along the way.
//               </p>
//             </div>
//           </div>

//           {/* Second section */}
//           <div
//             ref={secondSectionRef}
//             className="relative w-full z-20 flex items-center justify-start "
//           >
//             <svg
//               id="svg"
//               viewBox="-60 -100 820 800"
//               className="w-screen h-[200vh]"
//             >
//               <circle className="ball ball01" r="8" cx="50" cy="100"></circle>
//               <path
//                 className="theLine"
//                 fill="none"
//                 // d="M-50.311,-0.001 C40.689,-0.001 527.217,0.202 617.275,0 749.036,-0.297 747.628,194.17 615.089,192.822 500.37,191.655 142.468,191.999 85.152,191.999 -47.816,191.999 -52.466,373.999 81.503,375.999 139.158,375.999 544.825,375.335 602.543,375.998 746.135,377.646 746.778,561.538 599.883,561.897 456.0153,562.248 85.632,560.725 -4.603,561.267 -5.991,561.275 -7.752,653.236 -7.295,657.005 "
//                 d="M-50.311,-0.001 C40.689,-0.001 527.217,0.202 617.275,0 749.036,-0.297 747.628,194.17 615.089,192.822 500.37,191.655 142.468,191.999 85.152,191.999 -47.816,191.999 -52.467,382.54 81.502,384.54 139.156,384.54 559.342,383.019 617.063,383.685 760.654,385.328 747.198,575.187 617.817,575.552 473.942,575.951 85.632,575.669 -4.603,576.214 -5.991,576.217 -7.752,653.236 -7.295,657.005 "
//               ></path>

//               {/* Ram JanmaBhoomi Section */}
//               <InfoPoint
//                 ballClassName="ball ball02"
//                 textClassName="text01 infoCard"
//                 circleCx="100"
//                 circleCy="0"
//                 foreignObjectX="0"
//                 foreignObjectY="20"
//                 imageSrc="/posts/RamJanmabhoomi1.webp"
//                 imageAlt="Shri Ram Janmabhoomi"
//                 title="Shri Ram Janmabhoomi, Ayodhya"
//               >
//                 Shri Ram Janmabhoomi in Ayodhya, Uttar Pradesh, is revered by
//                 Hindus as the birthplace of Lord Rama, the seventh avatar of
//                 Vishnu. This sacred site has been a focal point of devotion for
//                 centuries and is a major pilgrimage destination. It was the
//                 center of a long-standing legal dispute, which culminated in a
//                 2019 Supreme Court verdict that granted the land for the
//                 construction of a Hindu temple.
//               </InfoPoint>

//               {/* Jaigad Fort Section */}
//               <InfoPoint
//                 ballClassName="ball ball03"
//                 textClassName="text02 infoCard"
//                 circleCx="330"
//                 circleCy="0"
//                 foreignObjectX="230"
//                 foreignObjectY="20"
//                 imageSrc="/posts/Jaigad1.webp"
//                 imageAlt="Jaigad Fort"
//                 title="Jaigad Fort, Ratnagiri"
//               >
//                 Jaigad Fort, a 16th-century coastal stronghold in Ratnagiri,
//                 sits majestically on a cliff overlooking the confluence of the
//                 Shastri River and the Arabian Sea. Once a key naval base for
//                 Maratha Admiral Kanhoji Angre, this &quot;Fort of Victory&quot;
//                 offers stunning panoramic views. Visitors can explore its intact
//                 ramparts, deep moat, a small Ganesh temple, and a nearby
//                 lighthouse, all standing as testaments to its strategic maritime
//                 past.
//               </InfoPoint>

//               {/* Devghali Beach Section */}
//               <InfoPoint
//                 ballClassName="ball ball04"
//                 textClassName="text03 infoCard"
//                 circleCx="560"
//                 circleCy="0"
//                 foreignObjectX="460"
//                 foreignObjectY="20"
//                 imageSrc="/posts/Devghali1.webp"
//                 imageAlt="Devghali Beach"
//                 title="Devghali Beach, Kasheli"
//               >
//                 Devghali Beach, a secluded gem in Kasheli near Ratnagiri, is a
//                 pristine, crescent-shaped beach surrounded on three sides by
//                 lush hills. Its name, translating to &quot;God&apos;s
//                 Passage,&quot; alludes to its most famous feature: a stunning
//                 sea cave. This tranquil, non-commercial spot offers clear
//                 turquoise waters and a &quot;table point&quot; viewpoint for
//                 breathtaking panoramic views and sunsets. It&apos;s an ideal
//                 escape for solitude and appreciating raw, untouched coastal
//                 beauty.
//               </InfoPoint>
//               {/* Prayagraj - The Sangam City Section */}
//               <InfoPoint
//                 ballClassName="ball ball05"
//                 textClassName="text04 infoCard"
//                 circleCx="600"
//                 circleCy="192"
//                 foreignObjectX="500"
//                 foreignObjectY="210"
//                 imageSrc="/posts/Prayagraj1.webp"
//                 imageAlt="Prayagraj - The Sangam City"
//                 title="Prayagraj - The Sangam City"
//               >
//                 Prayagraj, formerly Allahabad, is revered as &quot;The Sangam
//                 City,&quot; a sacred Hindu pilgrimage destination. It is defined
//                 by the Triveni Sangam, the holy confluence of India&apos;s three
//                 most significant rivers: the Ganga, the Yamuna, and the mythical
//                 Saraswati. This divine meeting point is the epicenter of faith,
//                 globally renowned for hosting the monumental Maha Kumbh Mela,
//                 the largest religious gathering on Earth, where millions bathe
//                 to attain spiritual purification.
//               </InfoPoint>
//               {/* गणेश मंदिर, गणपतीपुळे */}
//               <InfoPoint
//                 ballClassName="ball ball06"
//                 textClassName="text05 infoCard"
//                 circleCx="370"
//                 circleCy="192"
//                 foreignObjectX="270"
//                 foreignObjectY="210"
//                 imageSrc="/posts/GanpatiPule1.webp"
//                 imageAlt="GaneshMandir"
//                 title="गणेश मंदिर, गणपतीपुळे"
//               >
//                 Nestled on the pristine Konkan coast, the 400-year-old Ganesh
//                 Mandir at Ganpatipule is a revered pilgrimage site. It houses a
//                 rare &quot;Swayambhu&quot; (self-manifested) idol of Lord
//                 Ganesha, believed to have sprung from the soil. Uniquely, this
//                 deity faces west, guarding the coast as the &quot;Paschim Dwar
//                 Devata&quot; (Western Sentinel God). The temple is uniquely
//                 situated directly on the white-sand beach, allowing devotees to
//                 combine spiritual homage with serene coastal beauty.
//               </InfoPoint>
//               {/* Panhala Fort */}
//               <InfoPoint
//                 ballClassName="ball ball07"
//                 textClassName="text06 infoCard"
//                 circleCx="140"
//                 circleCy="192"
//                 foreignObjectX="40"
//                 foreignObjectY="210"
//                 imageSrc="/posts/Panhala1.webp"
//                 imageAlt="Panhala Fort"
//                 title="Panhala Fort, Kolhapur"
//               >
//                 Panhala Fort, the largest fort in the Deccan, is a vast
//                 historical site 20 km from Kolhapur. Built in the 12th century,
//                 it holds immense Maratha history, as Chhatrapati Shivaji Maharaj
//                 spent over 500 days here. It is famously associated with the
//                 legendary Battle of Pavan Khind, detailing Shivaji&apos;s daring
//                 escape. Key structures include the Teen Darwaza (Three Gates),
//                 massive Ambarkhana granaries, and the Sajja Kothi, offering
//                 panoramic views of the Sahyadri range.
//               </InfoPoint>
//               {/* Jyotiba Temple, Wadi Ratnagiri Kolhapur. */}
//               <InfoPoint
//                 ballClassName="ball ball08"
//                 textClassName="text07 infoCard"
//                 circleCx="100"
//                 circleCy="385"
//                 foreignObjectX="0"
//                 foreignObjectY="405"
//                 imageSrc="/posts/Jyotiba1.webp"
//                 imageAlt="Jyotiba Temple, Wadi Ratnagiri Kolhapur."
//                 title="Jyotiba Temple, Wadi Ratnagiri Kolhapur."
//               >
//                 Perched atop a hill at Wadi Ratnagiri, the Jyotiba Temple is a
//                 revered Hindu shrine 18 km northwest of Kolhapur. The deity,
//                 Lord Jyotiba, is considered a powerful incarnation of the divine
//                 trinity: Brahma, Vishnu, and Shiva. He is the guardian deity who
//                 aided Goddess Mahalakshmi in her battle against demons. The
//                 temple is famous for its vibrant Chaitra Yatra, where devotees
//                 shower the complex with pink &apos;gulal&apos;.
//               </InfoPoint>
//               {/* Jyotiba Temple, Wadi Ratnagiri Kolhapur. */}
//               <InfoPoint
//                 ballClassName="ball ball09"
//                 textClassName="text08 infoCard"
//                 circleCx="330"
//                 circleCy="384"
//                 foreignObjectX="230"
//                 foreignObjectY="405"
//                 imageSrc="/posts/Dwarka1.webp"
//                 imageAlt="Dwarkadhish Temple, Dwarka"
//                 title="Dwarkadhish Temple, Dwarka"
//               >
//                 The Dwarkadhish Temple, also known as the Jagat Mandir, is a
//                 sacred Hindu shrine in Dwarka, Gujarat, dedicated to Lord
//                 Krishna (the &quot;King of Dwarka&quot;). Believed to be built
//                 over 2,500 years ago by Krishna&apos;s great-grandson,
//                 Vajranabha, it is a key site of the Char Dham pilgrimage. This
//                 magnificent five-story limestone structure, supported by 72
//                 pillars, rises majestically on the banks of the Gomti River,
//                 drawing millions of devotees.
//               </InfoPoint>
//               {/* Ambabai Temple, Kolhapur. */}
//               <InfoPoint
//                 ballClassName="ball ball10"
//                 textClassName="text09 infoCard"
//                 circleCx="560"
//                 circleCy="384"
//                 foreignObjectX="460"
//                 foreignObjectY="405"
//                 imageSrc="/posts/Mahalaxmi1.webp"
//                 imageAlt="Ambabai Temple, Kolhapur."
//                 title="Ambabai Temple, Kolhapur."
//               >
//                 The Ambabai Temple, also known as the Shri Karveer Niwasini
//                 Mahalakshmi Temple, is a premier Hindu pilgrimage site in
//                 Kolhapur, Maharashtra. It is revered as one of the
//                 three-and-a-half Shakti Peethas of goddess Shakti, making it one
//                 of India's most significant goddess shrines. Devotees worship
//                 the presiding deity, Goddess Mahalakshmi (Ambabai), as the
//                 goddess of wealth and prosperity, and believe a visit here can
//                 grant liberation or fulfill desires.
//               </InfoPoint>
//             </svg>
//           </div>
//           <div className="bg-red-400" style={{ height: "100vh" }} />
//         </div>
//       </div>
//     </>
//   );
// }
