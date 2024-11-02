//spinner
window.onload = function () {
  document.getElementById("spinner").classList.add("hidden");
};

//************** MENU BAR  ************
document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu toggle
  const mobileMenuButton = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const iconClosed = document.getElementById("icon-closed");
  const iconOpen = document.getElementById("icon-open");

  mobileMenuButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");
    // Toggle the icons
    iconClosed.classList.toggle("hidden");
    iconOpen.classList.toggle("hidden");
  });
});

//About Trigger
function goToAbout() {
  document
    .getElementById("about-section")
    .scrollIntoView({ behavior: "smooth" });
}

//Subjects Trigger
function goToSubjects() {
  document
    .getElementById("subjects-section")
    .scrollIntoView({ behavior: "smooth" });
}

//Faculty Trigger
function goToFaculty() {
  document
    .getElementById("faculty-section")
    .scrollIntoView({ behavior: "smooth" });
}
//*********** MENU BAR END **********

//*********************back to top button*****************
//show the button after scrolling down from the top of the document
window.onscroll = function () {
  scrollFunction();
};
const backToTopBtn = document.getElementById("backToTopBtn");
function scrollFunction() {
  if (
    document.body.scrollTop > 350 ||
    document.documentElement.scrollTop > 350
  ) {
    backToTopBtn.classList.remove("hidden");
  } else {
    backToTopBtn.classList.add("hidden");
  }
}
//scroll to the top when button clicked
backToTopBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
//*********************Back top end**********************

//**************banner image slider script *****************
document.addEventListener("DOMContentLoaded", () => {
  const slidingImages = document.querySelectorAll("[slidingImages]");
  const prevButton = document.querySelector("[sliding-Image-prev]");
  const nextButton = document.querySelector("[sliding-Image-next]");

  let currentIndex = 0;

  const showSlide = (index) => {
    slidingImages.forEach((item) => {
      item.classList.add("hidden");
    });

    slidingImages[index].classList.remove("hidden");
  };

  const goToSlide = (index) => {
    currentIndex = (index + slidingImages.length) % slidingImages.length; // Wrap around
    showSlide(currentIndex);
  };

  prevButton.addEventListener("click", () => {
    goToSlide(currentIndex - 1);
  });

  nextButton.addEventListener("click", () => {
    goToSlide(currentIndex + 1);
  });

  // Automatically change slide every 4 seconds
  setInterval(() => {
    goToSlide(currentIndex + 1);
  }, 4000); // 4000 milliseconds = 4 seconds

  // Initialize the first slide
  showSlide(currentIndex);
});

//**************End banner image slider script *****************

//************** FORM FOR STUDENT AND ADMIN ************
//slider for admin & student
const studentBtn = document.querySelector("#std-btn");
const stdForm = document.querySelector("#std-form");
const adminBtn = document.querySelector("#admin-btn");
const adminForm = document.querySelector("#admin-form");

studentBtn.addEventListener("click", () => {
  studentBtn.classList.add("border-b-2");
  adminBtn.classList.remove("border-b-2");
  stdForm.classList.remove("hidden");
  adminForm.classList.add("hidden");
});

adminBtn.addEventListener("click", () => {
  studentBtn.classList.remove("border-b-2");
  adminBtn.classList.add("border-b-2");
  stdForm.classList.add("hidden");
  adminForm.classList.remove("hidden");
});
//************** End FORM FOR STUDENT AND ADMIN ************

//************** To trigger signup/signin form on click ***************
document
  .getElementById("signup-trigger")
  .addEventListener("click", function () {
    //redirect to signup page
    window.location.href = "./signup.html";
  });

document
  .getElementById("signin-trigger")
  .addEventListener("click", function () {
    //scroll to sign in section
    document
      .getElementById("signin-section")
      .scrollIntoView({ behavior: "smooth" });
  });

//************** End trigger signup/signin form on click ***************

//******************Read More*************************
document.querySelector("[read-more]").addEventListener("click", function () {
  const readMore = document.getElementById("read-more");
  const readMoreBtn = document.querySelector("[read-more]");

  if (readMore.classList.contains("hidden")) {
    readMore.classList.remove("hidden");
    readMoreBtn.textContent = "Read Less";
  } else {
    readMore.classList.add("hidden");
    readMoreBtn.textContent = "Read More";
  }
});
//******************End Read More*************************

//******************subjects cards***********************
const container = document.querySelector(".carousel");
const slides = document.querySelectorAll(".carousel > div");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
container.style = "scrollbar-width:none";

const breakpoint = 768;
const slidesPerPage = 3;
const totalSlidesCount = slides.length;
// Mobile stuff
let touchStartX = 0;
let touchEndX = 0;

// Previous
prevBtn.addEventListener("click", () => {
  container.scrollBy({ left: -slides[0].offsetWidth, behavior: "smooth" });
  const centerSlideIndex = getCenterSlideIndex() - 1;
});

// Next
nextBtn.addEventListener("click", () => {
  container.scrollBy({ left: slides[0].offsetWidth, behavior: "smooth" });
  const centerSlideIndex = getCenterSlideIndex() + 1;
});

// Mobile
container.addEventListener("touchstart", (event) => {
  touchStartX = event.touches[0].clientX;
});

container.addEventListener("touchmove", (event) => {
  touchEndX = event.touches[0].clientX;
});

container.addEventListener("touchend", () => {
  let centerSlideIndex;
  const swipeThreshold = 50;

  if (touchStartX - touchEndX > swipeThreshold) {
    centerSlideIndex = getCenterSlideIndex() + 1;
  } else {
    centerSlideIndex = getCenterSlideIndex() - 1;
  }
});

function getCenterSlideIndex() {
  const slideWidth = slides[0].offsetWidth;
  const containerWidth = container.offsetWidth;
  const centerSlideIndex = Math.round(
    (container.scrollLeft + Math.floor(containerWidth / 2)) / slideWidth
  );
  return centerSlideIndex;
}
//******************End subjects cards***********************
