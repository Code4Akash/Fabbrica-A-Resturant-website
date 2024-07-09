// Split text into spans
// let allh1 = document.querySelectorAll(".headings h1");
// console.log(allh1);

// allh1.forEach(function(elem) {
//     let clutter = "";
//     let h1text = elem.textContent;
//     let splittedtext = h1text.split("");
//     console.log(splittedtext);
//     splittedtext.forEach(function(e) {
//         clutter += `<span>${e}</span>`;
//     });
//     elem.innerHTML = clutter;
// });


// GSAP animations for other elements
gsap.to(".left img", {
    y: "0%",
    duration: 1.2,
    ease: "power2.inOut"
});
gsap.to(".right img", {
    y: "0%",
    duration: 1.2,
    ease: "power2.inOut"
});

// gsap.from(".headings h1 span", {
//     color: "#e11010",
//     opacity: 1,
//     stagger: 0.1,
//     duration: 1,
//     ease: "power2.inOut",
//     scrollTrigger: {
//         trigger: ".headings",
//         scroller: "body",
//         markers: true,
//         start: "top 20%",
//         end: "top 80%",
//         pin: true,
//         scrub: 2
//     }
// });
gsap.to("#fixed-img", {
    duration: 1.2,
    ease: "power2.inOut"
});




 let elems = document.querySelectorAll(".elem");
let elemContainers = document.querySelectorAll(".elem-container");
let fixed = document.querySelector("#fixed-img");

elems.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
        let images = e.getAttribute("data-image");
        console.log(images);
        fixed.style.backgroundImage = `url(${images})`
    });
});

elemContainers = document.querySelectorAll(".elem-container");
 fixed = document.querySelector("#fixed-img");

elemContainers.forEach(function (container) {
    let h1 = container.querySelector("h1");
    if (h1) {
        h1.addEventListener("mouseenter", function () {
            fixed.style.display = "block";

        });
        h1.addEventListener("mouseleave", function () {
            fixed.style.display = "none";

        });
    }
});


// Same function for Page 2 //

if (window.innerWidth >= 1400) {
    let elemContainers2 = document.querySelectorAll(".elem-container2");
    let fixed2 = document.querySelector("#fixed-img2");

    let elems = document.querySelectorAll(".elem");
    console.log(elems);

    elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            let images = e.getAttribute("data-image");
            fixed2.style.backgroundImage = `url(${images})`;
        });
    });

    elemContainers2.forEach(function (container) {
        let h1 = container.querySelector("h1");
        if (h1) {
            h1.addEventListener("mouseenter", function () {
                fixed2.style.display = "block";
            });
            h1.addEventListener("mouseleave", function () {
                fixed2.style.display = "none";
            });
        }
    });
}



document.addEventListener("DOMContentLoaded", function() {
    if (window.innerWidth >= 1400) {
      let elemContainers3 = document.querySelectorAll(".elem-container3");
      let fixed3 = document.querySelector("#fixed-img3");
  
      let elems1 = document.querySelectorAll(".elem1");
      elems1.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
          let images1 = e.getAttribute("data-image");
          fixed3.style.backgroundImage = `url(${images1})`;
        });
      });
  
      elemContainers3.forEach(function (container) {
        let h1 = container.querySelector("h1");
        if (h1) {
          h1.addEventListener("mouseenter", function () {
            fixed3.style.display = "block";
          });
          h1.addEventListener("mouseleave", function () {
            fixed3.style.display = "none";
          });
        }
      });
    }
  });
  
// Function for Hamburger menu showing //

let Pic = document.querySelector("#hamburger-pic");
let HamC = document.querySelector(".hamburger-container");
let PicR = document.querySelector(".hamburger-right");
let PicL = document.querySelector(".hamburger-left");

Pic.addEventListener("click", function () {
    if (HamC.classList.toggle("show")) {
        HamC.style.display = "block";
        gsap.to(PicR, { duration: 0.5, y: "0%" });
        gsap.to(PicL, { duration: 0.5, y: "0%" });
    } else {
        gsap.to(PicR, {
            duration: 0.5, y: "100%", onComplete: function () {
                HamC.style.display = "none";
            }
        });
        gsap.to(PicL, { duration: 0.5, y: "-100%" });
    }
});

Pic.clicked = false;  // Initialize a custom property to track the clicked state

Pic.addEventListener("click", () => {
    if (Pic.clicked) {
        Pic.src = "hamburger.svg";  // Change the image source to 'hamburger.svg'
    } else {
        Pic.src = "cross.svg";  // Change the image source to 'cross.svg'
    }
    Pic.clicked = !Pic.clicked;  // Toggle the clicked state
});



// // Import GSAP
// import { gsap } from 'gsap';

// // Get the scroller wrapper and image list
// const scrollerWrapper = document.querySelector('.scroller-wrapper');
// const imageList = document.querySelector('.image-list');

// // Set the scroller speed and duration
// const scrollerSpeed = 2; // adjust the speed to your liking
// const scrollerDuration = 10; // adjust the duration to your liking

// // Create a GSAP timeline
// const tl = gsap.timeline({
//   repeat: -1, // repeat the animation indefinitely
//   ease: 'power2.inOut' // adjust the easing to your liking
// });

// // Add the animation to the timeline
// tl.to(scrollerWrapper, scrollerDuration, {
//   x: () => {
//     return -imageList.offsetWidth + scrollerWrapper.offsetWidth;
//   },
//   ease: 'power2.inOut'
// });

// // Start the animation
// tl.play();

document.addEventListener("DOMContentLoaded", function() {
    const list = document.querySelector(".image-list");
    const items = document.querySelectorAll(".image-list li");
    const itemWidth = items[0].offsetWidth;
    const totalWidth = itemWidth * items.length;
  
    function slideImages() {
      gsap.to(list, {
        duration: 20,
        x: -totalWidth + itemWidth,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize(x => parseFloat(x) % -totalWidth)
        }
      });
    }
  
    slideImages();
  });
  