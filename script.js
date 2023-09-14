var tl= gsap.timeline()

tl.from("#logo,#nav1 li,#nav2 a,#nav2 button",{
    y:-100,
    duration:0.5,
    delay:0.5,
    stagger:0.2,
    opacity:0
})

tl.from("h1, h1 span",{
    y:100,
    duration:2,
    opacity:0,
    stagger:0.2
})

tl.from("#main img",{
    x:-100,
    duration:2,
    opacity:0,
    stagger:0.2,
    scale:0.5
})

tl.from("#main h2",{
    y:100,
    duration:2,
    opacity:0,
    stagger:0.2
})

tl.to("#down-arrow",{
    y:30,
    duration:2,
    repeat:-1,
    yoyo:true
})