// start gsap for lazyloading  by every class masalan .color-block
gsap.registerPlugin(ScrollTrigger);

// Color blocks
ScrollTrigger.batch(".color-block", {
    // interval: 0.1, // time window (in seconds) for batching to occur
    onEnter: (batch) =>
        gsap.from(batch, {
            opacity: 0,
            y: 100,
            stagger: { each: 0.15 },
            overwrite: true
        }),
    onLeaveBack: (batch) =>
        gsap.set(batch, { opacity: 1, y: 0, overwrite: true }),
    end: "35% center"
});
// end avali

// start in ham bara az chap oumadan
gsap.from('.product-filter', { duration: 1, ease: 'back.out(1.7)', x: -500, delay: 0.5 });
gsap.from('.fixed-top', { duration: 0.7, ease: 'back.out(1.7)', y: -500, delay: 0.5 });
//end

gsap.from('.bime', { duration: 0.7, ease: 'back.out(1.7)', y: -500, delay: 0.5 });
gsap.from('.ripple-background', { duration: 2.5, ease: "elastic.inOut(1, 0.3)", y: -500, delay: 0.5 });