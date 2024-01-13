document.querySelectorAll(".topnav a").forEach(function(element) {
    element.addEventListener("mouseover", mouseOver);
});


animating = false;

const eyesMap = [
    ["",
    "⠀⣤⣤⡀⠀⠀⠀⠀⠀⠀⠀⢀⣤⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀⣠⢤⠄",
    "⠀⠀⠉⠛⠛⠛⠛⠛⠛⠛⠛⠋⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠙⠛⠛⠛⠛⠛⠛⠛⠋⠉⠁⠀",
    ""],
    ["",
    "⠀⣤⢤⡄⠀⠀⠀⠀⠀⠀⠀⣤⣤⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⣤⡄⠀⠀⠀⠀⠀⠀⠀⣤⢤⡄",
    "⠀⠙⠛⠛⠀⠀⠀⠀⠀⠀⠘⠛⠛⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠛⠛⠛⠀⠀⠀⠀⠀⠀⠚⠛⠛⠀",
    ""],
    ["",
    "⠀⣴⢶⡇⠀⠀⠀⠀⠀⠀⠀⣿⣴⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣾⡇⠀⠀⠀⠀⠀⠀⠀⣿⢶⡆",
    "⠀⠹⠿⢿⣄⠀⠀⠀⠀⠀⣼⡿⠿⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠿⣿⣿⡀⠀⠀⠀⠀⢀⣾⣿⣿⠀",
    ""],
    ["⠀⠀⢀⡀⠀⠀⠀⠀⠀⠀⢀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⡀⠀⠀⠀⠀⠀⠀⠀⣀⡀⠀",
    "⠀⣴⢿⡇⠀⠀⠀⠀⠀⠀⠀⣿⣿⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⣿⡇⠀⠀⠀⠀⠀⠀⠀⣿⢿⡆",
    "⠀⠹⣿⣿⣄⠀⠀⠀⠀⠀⣼⣿⢿⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠿⣿⣿⡀⠀⠀⠀⠀⣀⣾⣿⣿⠀",
    "⠀⠀⠈⠉⠉⠁⠀⠀⠀⠉⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠁⠀⠀⠈⠉⠉⠁⠀⠀"
    ],
    [" ⢠⡶⠀⠀⠀⠀⠀⠀⢰⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⡀⠀⠀⠀⠀⠀⠀⠳⣦⡀",
    "⠀⣿⢿⡇⠀⠀⠀⠀⠀⠀⠀⣿⣿⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⣿⡇⠀⠀⠀⠀⠀⠀⠀⣿⢿⡆",
    "⠠⣽⣿⣿⣄⠀⠀⠀⠀⠀⣼⣿⢿⠇⠀⠀                       ⠀⠈⠿⣿⣿⡀⠀⠀⠀⠀⣀⣾⣿⣿⠀",
    "⠀⠈⠛⠽⠿⠷⠦⠤⠶⠿⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠛⠿⠷⠶⡤⠾⠿⠿⠍⠂⠀"]]

function mouseOver() {
    let totalFrames = 9;
    let currentFrame = -4;
    let frameIncrement = 1;

    function displayFrame(frameIndex) {
        document.getElementById("eyes").innerText = "";
        for (let j = 0; j < 4; j++) {
            document.getElementById("eyes").innerText += eyesMap[Math.abs(frameIndex)][j];
            document.getElementById("eyes").innerText += "\n";
        }
    }

    function animateFrames() {
        animating = true;
        displayFrame(currentFrame);
        if (currentFrame === totalFrames - 1 || currentFrame === 0) {
            frameIncrement *= -1;
        }

        currentFrame += frameIncrement;

        if (Math.abs(currentFrame) < totalFrames / 2) {
            setTimeout(animateFrames, 100);
        }
        else {
            animating = false;
        }
    }
    if (!animating) {
        animateFrames();
    }
}