const carouselData = [
    {
        image: "Assets/Bike store.jpg",
        title: "Existing bicycle shops",
        text: "Although bicycle shops don't have the machines yet to make parts they are the best place to promote a more sustainable bicycle practice."
    },
    {
        image: "Assets/Maker space.webp",
        title: "Maker space",
        text: "Maker spaces already have the tools necessary to make bicycle parts. Join the UpKeep network to start a workshop."
    },
    {
        image: "Assets/Bicycle kitchen.jpg",
        title: "Bicycle kitchens",
        text: 'If you are unfamiliar with the concept, bicycle kitchens are a type of maker space specifically for repairing bicycles. A perfect fit for UpKeep don\'t you think?<br><span class="kitchen-link-wrap">Check out this bicycle kitchen in Amsterdam: <a href="https://www.instagram.com/bikekitchenuva/" target="_blank" rel="noopener">@bikekitchenuva</a></span>'
    },
    {
        image: "Assets/Pop up.png",
        title: "Pop-up",
        text: "We would love to run workshops in crowded places to get more exposure. If you would like to sponsor one of these pop-ups please let us know!"
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const track = document.getElementById("workshop-carousel-track");
    const dotsContainer = document.getElementById("carousel-dots");
    if (!track || !dotsContainer) return;

    // Render slides
    carouselData.forEach((item, index) => {
        const slide = document.createElement("div");
        slide.className = "carousel-slide" + (index === 0 ? " active" : "");
        slide.innerHTML = `
      <div class="carousel-image-wrapper">
        <img src="${item.image}" alt="${item.title}" loading="lazy">
      </div>
      <div class="carousel-content">
        <h3>${item.title}</h3>
        <p>${item.text}</p>
      </div>
    `;
        track.appendChild(slide);

        const dot = document.createElement("button");
        dot.className = "carousel-dot" + (index === 0 ? " active" : "");
        dot.setAttribute("aria-label", `Go to slide ${index + 1}`);
        dot.addEventListener("click", () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    let currentIndex = 0;
    let intervalId;
    const numSlides = carouselData.length;

    const slides = track.querySelectorAll(".carousel-slide");
    const dots = dotsContainer.querySelectorAll(".carousel-dot");

    function updateCarousel() {
        slides.forEach((s, i) => s.classList.toggle("active", i === currentIndex));
        dots.forEach((d, i) => d.classList.toggle("active", i === currentIndex));
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    function goToSlide(index) {
        currentIndex = index;
        updateCarousel();
        resetInterval();
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % numSlides;
        updateCarousel();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + numSlides) % numSlides;
        updateCarousel();
        resetInterval();
    }

    function startInterval() {
        intervalId = setInterval(nextSlide, 8000);
    }

    function resetInterval() {
        clearInterval(intervalId);
        startInterval();
    }

    const nextBtn = document.querySelector(".next-btn");
    const prevBtn = document.querySelector(".prev-btn");
    if (nextBtn) {
        nextBtn.addEventListener("click", () => {
            nextSlide();
            resetInterval();
        });
    }
    if (prevBtn) {
        prevBtn.addEventListener("click", () => {
            prevSlide();
            resetInterval();
        });
    }

    // Handle touch interactions for swiping
    let touchStartX = 0;
    let touchEndX = 0;

    track.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
        clearInterval(intervalId);
    }, { passive: true });

    track.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
        startInterval();
    }, { passive: true });

    function handleSwipe() {
        if (touchEndX < touchStartX - 50) nextSlide();
        if (touchEndX > touchStartX + 50) prevSlide();
    }

    startInterval();
});
