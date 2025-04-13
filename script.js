let clickCount = 0;
const maxClicks = 10; // Number of clicks required to show message and video

const cake = document.getElementById("cake");
const message = document.getElementById("message");
const videoContainer = document.getElementById("video-container");

cake.addEventListener("click", function() {
    clickCount++;
    
    // If the cake has been clicked the required number of times
    if (clickCount >= maxClicks) {
        message.classList.remove("hidden");
        videoContainer.classList.remove("hidden");
        
        // Make the cake disappear
        cake.style.display = "none";
    }

    // Make the cake move to a random position
    if (cake.style.display !== "none") {  // Prevent moving if the cake is hidden
        moveCakeRandomly();
    }
});

function moveCakeRandomly() {
    const container = document.querySelector(".container");

    // Get the container's dimensions
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    // Get the cake's dimensions
    const cakeWidth = cake.offsetWidth;
    const cakeHeight = cake.offsetHeight;

    // Calculate random position
    const randomX = Math.random() * (containerWidth - cakeWidth);
    const randomY = Math.random() * (containerHeight - cakeHeight);

    // Set the cake's new position using inline CSS styles
    cake.style.position = "absolute";
    cake.style.left = randomX + "px";
    cake.style.top = randomY + "px";
}
