
var blur1 = document.querySelector("#cursor-blur");
var csr = document.querySelector("#cursor");
document.addEventListener("mousemove", function (dets) {
    csr.style.left = dets.x + "px"
    csr.style.top = dets.y + "px"
    blur1.style.left = dets.x -200+ "px"
    blur1.style.top=dets.y-200+"px"
})

var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function (elem) { 
    elem.addEventListener("mouseenter", function () {
        csr.style.scale = 3
        csr.style.border = "1px solid #fff"
        csr.style.backgroundColor="transparent"
    })
    elem.addEventListener("mouseleave", function () { 
        csr.style.scale = 1
        csr.style.border = "0px solid #95C11E"
        csr.style.backgroundColor="#95C11E"
    })
})


gsap.to("#nav", {
    backgroundColor: "#000",
    height: "110px",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end: "top 11%",
        scrub:1,
    }
})

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top -25%",
        end: "top -70%",
        scrub:1,
    }
})

gsap.from("#about-us img,#about-us-in", {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.4,
    scrollTrigger: {
        trigger: "#about-us",
        scroller: "body",
        start: "top 70%",
        end: "top 65%",
        scrub:7,
    }    
})

gsap.from(".card", {
    scale: 0.8,
    opacity: 0,
    duration:1,
    scrollTrigger: {
        trigger: ".card",
        scroller: "body",
        start: "top 70%",
        end: "top 65%",
        scrub:1,
    }
})

gsap.from("#colon1", {
    y: -70,
    x: -70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        start: "top 55%",
        end: "top 45%",
        scrub:4,
        
    }
})

gsap.from("#colon2", {
    x: 70,
    y: 70,
    scrollTrigger: {
        trigger: "#colon2",
        scroller: "body",
        start: "top 100%",
        end: "top 100%",
        scrub:4,
    }
})

gsap.to("#page4 h1", {
    y: -37,
    scrollTrigger: {
        trigger: "#page4 h1",
        scroller: "body", 
        start: "top 95%",
        end: "top 95%",
        scrub:2.5,
    }
})

var h2all = document.querySelectorAll("#box1 h2,#address h2");
h2all.forEach(function (elem) {
    elem.addEventListener("mouseenter",function() {
        csr.style.scale = 3
        csr.style.border = "1px solid #fff"
        csr.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave", function () { 
        csr.style.scale = 1
        csr.style.border = "1px solid #95C11E"
        csr.style.backgroundColor="#95C11E"
    })
})

var h5all = document.querySelectorAll("#box2 .imp");
h5all.forEach(function (elem) { 
    elem.addEventListener("mouseenter", function () { 
        csr.style.scale = 3
        csr.style.border = "1px solid #fff"
        csr.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave", function () { 
        csr.style.scale = 1
        csr.style.border = "1px solid #95C11E"
        csr.style.backgroundColor="#95C11E"
    })
})