// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.main'),
//     smooth: true
// });

function init() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}
init();


var crs = document.querySelector(".cursor")
var main = document.querySelector(".main")

document.addEventListener("mousemove", function (dets) {
  crs.style.left = dets.x + "px"
  crs.style.top = dets.y + "px"
})



var video = document.querySelector("video")
var playbtn = document.querySelector(".play")

video.addEventListener("mouseenter", function (dets) {
  playbtn.style.opacity = 1;
  playbtn.style.scale = 1
})

video.addEventListener("mouseleave", function (dets) {
  playbtn.style.opacity = 0;
  playbtn.style.scale = 0
})

video.addEventListener("mousemove", function (dets) {
  gsap.to(playbtn, {
    left: dets.x + 20 ,
    top: dets.y + 20 
  })
})

var crs = document.querySelector(".cursor")
var video = document.querySelector("video")
video.addEventListener("mouseenter", function (dets) {
  crs.style.opacity = 0;
})

video.addEventListener("mouseleave", function (dets) {
  crs.style.opacity = 1;
})

var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: ".main",
    // markers: true,
    start: "top 30%",
    end: "top 0",
    scrub: 3
  }
})

tl.to(".page1 h1", {
  x: -80,
}, "anim")

tl.to(".page1 h2", {
  x: 80,
}, "anim")

tl.to(".page1 video", {
  width: "90%"
}, "anim")


var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: ".main",
    // markers: true,
    start: "top -110%",
    end: "top -130",
    scrub: 3
  }
})

tl2.to(".main", {
  backgroundColor: "white"
})


var tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: ".main",
    // markers: true,
    start: "top -380%",
    end: "top -400%",
    scrub: 3
  }
})

tl3.to(".main", {
  backgroundColor: "black" 
})

var boxes = document.querySelectorAll(".box")
boxes.forEach(function(elem){
  elem.addEventListener("mouseenter", function(){
    var att = elem.getAttribute("data-image")
    crs.style.width = "200px"
    crs.style.height = "150px"
    crs.style.borderRadius = "0"
    crs.style.backgroundImage = `url(${att})`
  })

  elem.addEventListener("mouseleave", function(){
    elem.style.backgroundColor = "transparent"
    crs.style.width = "20px"
    crs.style.height = "20px"
    crs.style.borderRadius = "50%"
    crs.style.backgroundImage = `none`
  })
})

var h4 = document.querySelectorAll(".nav h4")
var purple = document.querySelector(".purple")
h4.forEach(function(elem){
  elem.addEventListener("mouseenter", function(){
    purple.style.display = "block"
    purple.style.opacity = "1"
  })

  elem.addEventListener("mouseleave", function(){
    purple.style.display = "none"
    purple.style.opacity = "0"
  })
  
})