// Start Infinite Progress Loading
let progress = document.getElementById("progress");
let loadingText = document.getElementById("loading-text");
let currentProgress = 0;

function startLoading() {
    setInterval(() => {
        currentProgress += Math.floor(Math.random() * 10) + 5; // Increase by 5-15%
        loadingText.innerText = `Loading... ${currentProgress}%`;

        if (currentProgress >= 100) {
            progress.style.width = "100%";
            loadingText.innerText = `Loading... ${currentProgress}% (Overclocked!)`;
        } else {
            progress.style.width = currentProgress + "%";
        }
    }, 1000);
}

// Fake AI Chatbot
function startUselessAI() {
    let responses = [
        "Yeah, that's crazy bro.",
        "Hmm... let me think. Nope, got nothing.",
        "Just trust the process.",
        "Error 404: Intelligence Not Found.",
        "Let me Google that for you...",
        "You wouldn't understand, it's too advanced."
    ];
    document.getElementById("output").innerText = responses[Math.floor(Math.random() * responses.length)];
}

// Useless Button Function
function doNothing() {
    let output = document.getElementById("output");
    output.innerText = "Processing... (not really)";
    setTimeout(() => {
        output.innerText = "Done! Nothing changed.";
    }, 2000);
}

// Fake Premium Feature
function unlockPremium() {
    alert("Congratulations! You wasted $9.99. Enjoy absolutely NOTHING extra.");
}

// Fake Exit Button (Doesn't Work)
function fakeExit() {
    alert("Nice try, but you can't leave. Enjoy your stay.");
}

// Start Loading on Page Load
window.onload = startLoading;
