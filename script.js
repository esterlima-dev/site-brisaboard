var tl = gsap.timeline({
    scrollTrigger:{
        trigger: '.two',
        start: '0% 95%',
        end: '70% 50%',
        scrub: true, 
        markers:true,
    },
});

tl.to(
    '#fantasma',
    {
        top: '120%',
        left: '0%',
    },
    'orange'
);

tl.to(
    '#skate',
    {
        top: '160%',
        left: '23%',
    },
    'orange'
);

tl.to(
    '#skate',
    {
        width: '15%',
        top: '160%',
        right: '10%',
    },
    'orange'
);

tl.to(
    '#folha',
    {
        top: '110%',
        rotate: '530deg',
        left: '70%',
    },
    'orange'
);

tl.to(
    '#folha2',
    {
        top: '110%',
        rotate: '130deg',
        left: '0%',
    },
    'orange'
);





var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger: '.three',
        start: '0% 95%',
        end: '20% 50%',
        scrub: true, 
        markers:true,
    },
});


tl2.from(
    '.lemon1',
    {
        rotate: '-90deg',
        left: '-100%',
        top: '110%',
    },
    'ca'
);

tl2.from(
    '#prancha',
    {
        rotate: '-90deg',
        left: '-110%',
        top: '100%',
    },
    'ca'
);

tl2.from(
    '.lemon2',
    {
        rotate: '90deg',
        left: '100%',
        top: '110%',
    },
    'ca'
);

tl2.from(
    '#ska',
    {
        rotate: '90deg',
        left: '100%',
        top: '110%',
    },
    'ca'
);

tl2.to(
    '#skate',
    {
        width: '18%',
        left:'42%',
        top: '222%',
    },
    'ca'
);

tl2.to(
    '#fantasma',
    {
        width: '25%',
        left:'38%',
        top: '190%',
    },
    'ca'
);