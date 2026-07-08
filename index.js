const runBtn = document.querySelector("#run");
const track = document.querySelector("#track");
const ball = document.querySelector("#ball");

let x = 0;
runBtn.addEventListener("click", () => {
    runBtn.disabled = true;
    x = 0;

    function step () {
        x += 1;
        ball.style.transform = `translateX(${x}px)`;
        const maxDistance = track.offsetWidth - ball.offsetWidth;
        if (x < maxDistance) {
            requestAnimationFrame(step);
        } else {
            runBtn.disabled = false;
        };
    };
    requestAnimationFrame(step);
});

// Анимировать transform, а не left, дешевле для браузера, потому что так запускается только composite, а не layout.