
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
        start: "top 60%",
        end: "top 58%",
        scrub:7,
    }    
})
