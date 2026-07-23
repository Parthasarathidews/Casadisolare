// import React, { useRef } from "react";
// import "./overlay.css";
// import { useGSAP } from "@gsap/react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useMediaQuery } from "react-responsive";
// import SplitType from "split-type";

// gsap.registerPlugin(ScrollTrigger);
// const Overlay = () => {
//   const globeRef = useRef(null);
//   const isMobile = useMediaQuery({ maxWidth: 767 });
//   const titleWrapRef = useRef();
//   const groupRef = useRef();

//   const titleRef = useRef();

//   const handleMove = (e) => {
//     const rect = globeRef.current.getBoundingClientRect();
//     const x = ((e.clientX - rect.left) / rect.width) * 100;
//     const y = ((e.clientY - rect.top) / rect.height) * 100;

//     globeRef.current.style.setProperty("--mx", `${x}%`);
//     globeRef.current.style.setProperty("--my", `${y}%`);
//   };

//   useGSAP(() => {
//     const start = isMobile ? "top 20%" : "top top";

//     const maskTimeLine = gsap.timeline({
//       scrollTrigger: {
//         trigger: "#globe",
//         start,
//         // end: "bottom center",
//         scrub: 1.5,
//         pin: true,
//       },
//     });
//     maskTimeLine
//       // .to(".will-fade", {
//       //   opacity: 1,
//       //   stagger: 0.2,
//       //   ease: "power1.inOut",
//       // })
//       .to(".masked-img", {
//         scale: 0.3,
//         maskPosition: "center",
//         maskSize: "400%",
//         duration: 1,
//         yPercent: -30,
//         ease: "power1.inOut",
//       })
//       .to(".masked-img", {
//         yPercent: 30,
//         duration: 5,
//         ease: "power1.inOut",
//       });

//     const split = new SplitType(titleRef.current, {
//       types: "chars",
//     });

//     // initial state
//     gsap.set(split.chars, {
//       rotationX: -180,
//       // transformOrigin: "50% 50% -20px",
//       opacity: 0,
//       duration: 0.3,
//       // yPercent: -30,
//     });

//     // scroll animation
//     gsap.to(split.chars, {
//       rotationX: 0,
//       yPercent: 180,
//       opacity: 1,
//       duration: 0.3,
//       stagger: 0.08,
//       ease: "power3.out",
//       scrollTrigger: {
//         trigger: "#globe",
//         start: "top top",
//         end: "+=1200", // scroll distance
//         scrub: true,
//       },
//     });
//     gsap.to(split.chars, {
//       yPercent: 30,
//     });

//     // return () => split.revert();
//   }, [isMobile]);

//   // useGSAP(() => {
//   //   const split = new SplitType(titleRef.current, { types: "chars" });

//   //   gsap.set(split.chars, {
//   //     rotationX: -180,
//   //     opacity: 0,
//   //     transformOrigin: "50% 50% -20px",
//   //   });

//   //   const tl = gsap.timeline({
//   //     scrollTrigger: {
//   //       trigger: "#globe",
//   //       start: "top top",
//   //       end: "+=1600",
//   //       scrub: 1.5,
//   //       pin: true,
//   //       markers: true,
//   //     },
//   //   });

//   //   tl.to(
//   //     ".masked-img",
//   //     {
//   //       yPercent: 30, // globe reaches bottom
//   //       scale: 0.3,
//   //       maskSize: "400%",
//   //       ease: "none",
//   //       duration: 2,
//   //       // delay: 1,
//   //     },
//   //     0,
//   //   ).to(
//   //     split.chars,
//   //     {
//   //       rotationX: 0,
//   //       opacity: 1,
//   //       stagger: 0.08,
//   //       ease: "power3.out",
//   //       duration: 2, // finishes when globe reaches bottom
//   //     },
//   //     0,
//   //   );

//   //   tl.to(titleWrapRef.current, {
//   //     y: 40, // adjust until it visually touches the globe
//   //     ease: "power2.out",
//   //     duration: 0.6,
//   //   });

//   //   tl.to(groupRef.current, {
//   //     yPercent: 60,
//   //     ease: "none",
//   //     duration: 2,
//   //   });
//   //   return () => split.revert();
//   // }, []);

//   return (
//     <div
//       id="globe"
//       className="min-h-screen relative flex items-center justify-center bg-[#593938]"
//     >
//       <div
//         ref={groupRef}
//         className="absolute top-[20%] left-1/2 -translate-x-1/2"
//       >
//         <div
//           ref={titleWrapRef}
//           className="absolute -top-28 left-1/2 -translate-x-1/2 z-10"
//         >
//           <h1
//             ref={titleRef}
//             className="font-normal  font-solare text-[40rem] text-white leading-none w-screen text-center"
//           >
//             solare
//           </h1>
//         </div>

//         <div
//           ref={globeRef}
//           onMouseMove={handleMove}
//           className="choco-globe masked-img relative w-[100vw] h-[100vw] rounded-full overflow-hidden"
//         >
//           <div className="liquid absolute inset-0" />
//           <div className="cursor-liquid absolute inset-0" />
//           <div className="sphere-light absolute inset-0 pointer-events-none" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Overlay;
import React, { useRef } from "react";
import "./overlay.css";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMediaQuery } from "react-responsive";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const Overlay = () => {
  const globeRef = useRef(null);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const titleWrapRef = useRef();
  const groupRef = useRef();
  const titleRef = useRef();

  const handleMove = (e) => {
    const rect = globeRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    globeRef.current.style.setProperty("--mx", `${x}%`);
    globeRef.current.style.setProperty("--my", `${y}%`);
  };

  useGSAP(() => {
    const split = new SplitType(titleRef.current, { types: "chars" });

    gsap.set(split.chars, {
      rotationX: -180,
      opacity: 0,
      transformOrigin: "50% 50% -20px",
    });

    const start = isMobile ? "top 20%" : "top top";

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#globe",
        start,
        end: "+=3000",
        scrub: 1.5,
        pin: true,
      },
    });

    tl.to(".masked-img", {
      yPercent: -30,
      scale: 0.25,
      ease: "none",
      duration: 1,
    }).addLabel("globeAtTop");

    tl.to(
      split.chars,
      {
        rotationX: 0,
        opacity: 1,
        stagger: 0.06,
        ease: "power2.out",
        duration: 1,
      },
      "globeAtTop",
    ).addLabel("flipDone");

    tl.to(
      groupRef.current,
      {
        yPercent: 50,
        ease: "none",
        duration: 1,
      },
      "flipDone",
    );

    return () => split.revert();
  }, [isMobile]);

  return (
    <div
      id="globe"
      className="min-h-screen relative flex items-center justify-center bg-[#593938]"
    >
      <div
        ref={groupRef}
        className="absolute top-[20%] left-1/2 -translate-x-1/2"
      >
        <div
          ref={titleWrapRef}
          className="absolute -top-28 left-1/2 -translate-x-1/2 z-10"
        >
          <h1
            ref={titleRef}
            className="font-normal font-solare text-[40rem] text-white leading-none w-screen text-center"
          >
            solare
          </h1>
        </div>

        <div
          ref={globeRef}
          onMouseMove={handleMove}
          className="choco-globe masked-img relative w-[100vw] h-[100vw] rounded-full overflow-hidden"
        >
          <div className="liquid absolute inset-0" />
          <div className="cursor-liquid absolute inset-0" />
          <div className="sphere-light absolute inset-0 pointer-events-none" />
        </div>
      </div>
    </div>
  );
};

export default Overlay;
