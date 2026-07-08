const runBtn = document.querySelector("#run");
const track = document.querySelector("#track");
const ball = document.querySelector("#ball");

let x = 0;
runBtn.addEventListener("click", () => {
    runBtn.disabled = true;
    x = 0;
    const speed = 0.3;
    let lastTime = null;

    function step (currentTime) {
        if (!lastTime) {
            lastTime = currentTime;
            requestAnimationFrame(step);
            return;
        }
        
        const deltaTime = currentTime - lastTime;
        lastTime = currentTime

        x += speed * deltaTime;

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

