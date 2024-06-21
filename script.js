
var blur1 = document.querySelector("#cursor-blur");
var csr = document.querySelector("#cursor");
document.addEventListener("mousemove", function (dets) {
    csr.style.left = dets.x + "px"
    csr.style.top = dets.y + "px"
    blur1.style.left = dets.x -200+ "px"
    blur1.style.top=dets.y-200+"px"
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