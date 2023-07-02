let tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".one",
    start: "0% 0%",
    end: "0% 0%",
    scrub: 2,
    // markers: true,
    duration: 2,
  },
});

tl1.to(".features-container", {
  backgroundColor: "#55334A",
  color: "#fff",
  ease: "power1.inOut",
});
let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".one",
    start: "70% 0%",
    end: "75% 0%",
    scrub: 2,
    // markers: true,
    duration: 2,
  },
});

tl2.to(".features-container", {
  backgroundColor: "#242E24",
  color: "#fff",
  ease: "power1.inOut",
});
let tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".two",
    start: "70% 0%",
    end: "75% 0%",
    scrub: 2,
    // markers: true,
    duration: 2,
  },
});

tl3.to(".features-container", {
  backgroundColor: "#575465",

  ease: "power1.inOut",
});

gsap.to(".head-wrapper", {
  backgroundColor: "rgba(255, 255, 255, 0.5)",
  boxShadow: " 0 10px 40px #0000001a",
  backdropFilter: "blur(5px)",
  scrollTrigger: {
    trigger: ".head-wrapper",
    scroller: "body",
    // markers: true,
    start: "top -10%",
    scrub: 2,
  },
});
