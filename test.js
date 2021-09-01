    gsap.to('.topBlock', {duration: 4, ease: "power4.in", rotation: 30, x: 75, y: 70});
    gsap.to('.middleBlock', {duration: 4, ease: "power4.in", rotation: 30, x: 40, y: 25});
    gsap.fromTo('.firstShot', {opacity: 1}, {duration: 0.4, delay: 4, autoAlpha: 0});
    gsap.fromTo('.secondShot', {autoAlpha: 0}, {duration: 0.3, delay: 4.4, autoAlpha: 1}); 
    gsap.fromTo('.bookcase', {width: 0}, {duration: 0.3, delay: 4.7, ease: "none", width: 68});
    gsap.to('.bookcase', {duration: 1, delay: 5, ease: "none", x: 86});
    gsap.fromTo('.priceTag', {opacity: 0}, {duration: 2, delay: 6.7, opacity: 1});
    gsap.to('.secondShot', {duration: 1, delay: 8.4, autoAlpha: 0}); 
    gsap.fromTo('.thirdShot', {autoAlpha: 0}, {duration: 3, delay: 9.4, autoAlpha: 1}); 