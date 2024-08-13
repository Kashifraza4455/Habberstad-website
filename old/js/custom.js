AOS.init({ once: true });

$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll >= 300) {
    $("header").addClass("darkHeader");
  } else {
    $("header").removeClass("darkHeader");
    // $(".btns_wrap").removeClass("btns_wrap_hover");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const dropdownBtn = document.querySelector(".dropdown-btn");
  const dropdownContent = document.querySelector(".dropdown-content");
  const icon = document.querySelector(".icon i");

  dropdownBtn.addEventListener("click", () => {
    dropdownContent.classList.toggle("active");
    icon.classList.toggle("rotate");
  });
});

const interleaveOffset = 0.75;

var swiper = new Swiper(".swiper-container", {
  direction: "vertical",
  speed: 800,
  mousewheelControl: true,
  watchSlidesProgress: true,
  mousewheel: {
    releaseOnEdges: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: false,
    type: "bullets",
    renderBullet: function (index, className) {
      return (
        '<span class="' + className + '">' + ("0" + (index + 1)) + "</span>"
      );
    },
  },
  on: {
    progress: function () {
      console.log("test");
      let swiper = this;

      for (let i = 0; i < swiper.slides.length; i++) {
        let slideProgress = swiper.slides[i].progress;
        let innerOffset = swiper.height * interleaveOffset;
        let innerTranslate = slideProgress * innerOffset;

        TweenMax.set(swiper.slides[i].querySelector(".slide-inner"), {
          y: innerTranslate,
        });
      }
    },
    setTransition: function (slider, speed) {
      let swiper = this;
      for (let i = 0; i < swiper.slides.length; i++) {
        swiper.slides[i].style.transition = speed + "ms";
        swiper.slides[i].querySelector(".slide-inner").style.transition =
          speed + "ms";
      }
    },
  },
});

// Select all elements with the class 'pixels-slider'
const images1 = document.querySelectorAll(".pixels-slider");

// Loop through each element and add an event listener
images1.forEach((image) => {
  image.addEventListener("click", function () {
    // Use classList.add to add the 'active' class to the clicked element
    image.classList.add("active");

    // Optional: If you want to remove 'active' class from other images
    // Remove 'active' class from all other elements except the clicked one
    images1.forEach((otherImage) => {
      if (otherImage !== image) {
        otherImage.classList.remove("active");
      }
    });

    // Use the debugger statement to pause execution (optional)
    // debugger;
  });
});

const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion, index) => {
  const header = accordion.querySelector(".accordion__header");
  const content = accordion.querySelector(".accordion__content");
  const icon = accordion.querySelector(".accordion__icon i");

  header.addEventListener("click", () => {
    const isOpen = content.style.height === `${content.scrollHeight}px`;

    accordions.forEach((a, i) => {
      const c = a.querySelector(".accordion__content");
      const ic = a.querySelector(".accordion__icon i");

      if (i === index) {
        c.style.height = isOpen ? "0px" : `${c.scrollHeight}px`;
        ic.classList.toggle("fa-plus", isOpen);
        ic.classList.toggle("fa-minus", !isOpen);
      } else {
        c.style.height = "0px";
        ic.classList.remove("fa-minus");
        ic.classList.add("fa-plus");
      }
    });
  });
});

function clearActiveImage() {
  images.forEach(function (image) {
    image.classList.remove("active");
  });
}

images
  .forEach(function (image, index) {
    image.onclick = function () {
      event.stopPropagation(); //important to not call the clearActiveImage() on every click
      if (images[index].classList.contains("active")) {
        images[index].classList.remove("active");
      } else {
        clearActiveImage(index);
        images[index].classList.add("active");
      }
    };
  })
  .window.addEventListener("click", () => {
    clearActiveImage();
  });
