const grayscaleImages = document.querySelectorAll('.grayscale-target');

grayscaleImages.forEach(image => {
  image.addEventListener('click', () => {
    image.classList.toggle('grayscale'); // Toggle grayscale class on click
  });

  // Add event listener for hover effect
  image.addEventListener('mouseover', () => {
    image.classList.add('grayscale'); // Apply grayscale on hover
  });

  image.addEventListener('mouseout', () => {
    image.classList.remove('grayscale'); // Remove grayscale on mouseout
  });
});


const imageContainers = document.querySelectorAll('.image-container');

function animateImages() {
  imageContainers.forEach(container => {
    const image = container.querySelector('img');
    let currentY = 0; // Starting position
    let direction = -1; // Move up initially

    function animate() {
      currentY += direction * 0.1; // Move by 0.5px per animation frame

      // Limit movement to a specific range (adjust values if needed)
      if (currentY <= -10) {
        direction = 1;
        currentY = -5;
      } else if (currentY >= 0) {
        direction = -1;
        currentY = 0;
      }

      image.style.transform = `translateY(${currentY}px)`;
      requestAnimationFrame(animate); // Schedule next animation frame
    }

    animate(); // Start the animation

    // // Optionally, clear the animation on mouseover or mouseout
    // container.addEventListener('mouseover', () => cancelAnimationFrame(animate));
    // container.addEventListener('mouseout', () => animate());
  });
}

animateImages(); // Start the animation

// Add/remove the 'visible' class to the images and poems when the user scrolls
function handleScroll() {
    const images = document.querySelectorAll('.image');
    const poems = document.querySelectorAll('.poem');
    const scrollPosition = window.scrollY;

    // Handle images
    images.forEach(image => {
        // Calculate the position for making the image visible
        const triggerPosition = image.offsetTop - window.innerHeight;

        if (scrollPosition > triggerPosition) {
            image.classList.add('visible');
        } else {
            // Remove the 'visible' class when scrolling back up
            image.classList.remove('visible');
        }
    });

    // Handle poems
    poems.forEach(poem => {
        // Calculate the position for making the poem visible
        const triggerPosition = poem.offsetTop - window.innerHeight;

        if (scrollPosition > triggerPosition) {
            poem.classList.add('visible');
        } else {
            // Remove the 'visible' class when scrolling back up
            poem.classList.remove('visible');
        }
    });
}

// Update positions on scroll
window.addEventListener('scroll', handleScroll);

function togglePark() {
  const hiddenParagraph = document.getElementById("gaza-hidden-park");
  const showMoreText = document.querySelector("[onclick*='togglePark']"); // Selects the element with onclick containing togglePark

  if (hiddenParagraph.hidden) {
    hiddenParagraph.hidden = false;
    showMoreText.textContent = "Show Less";
  } else {
    hiddenParagraph.hidden = true;
    showMoreText.textContent = "Show More";
  }
}

const progressBar = document.getElementById("progress-bar");
const documentHeight = document.documentElement.scrollHeight; // Total document height
const windowHeight = window.innerHeight; // Viewport height

function updateProgressBar() {
  const scrolled = window.scrollY; // Get current scroll position

  // Calculate progress percentage (0 to 100)
  const progress = Math.min(scrolled / (documentHeight - windowHeight), 1) * 100;

  progressBar.style.width = `${progress}%`;
}

window.addEventListener("scroll", updateProgressBar); // Update on scroll event

// Call updateProgressBar initially to set starting position
updateProgressBar();



const smoothHeader = document.getElementById("smooth-header");
const headerText = smoothHeader.textContent; // Store header text

smoothHeader.textContent = ""; // Initially hide the text

let index = 0;
const intervalId = setInterval(() => {
  smoothHeader.textContent += headerText[index];
  index++;
  if (index === headerText.length) {
    clearInterval(intervalId);
    smoothHeader.style.opacity = 1; // Reveal after text is complete
  }
}, 40); // Adjust delay between characters (in milliseconds)