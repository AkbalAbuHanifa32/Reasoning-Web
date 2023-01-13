

// scroll to top start
let calcScrollValue = () => {
    let scrollProgress = document.getElementById("scroll-progress");
    let top = document.documentElement.scrollTop;

    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    let ScrollValue = Math.round((top * 100) / calcHeight);

    if (top > 100) {
        scrollProgress.style.display = "grid";
    } else {
        scrollProgress.style.display = "none";
    }

    scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    });

    scrollProgress.style.background = `conic-gradient(#ff7736 ${ScrollValue}%, #d7d7d7 ${ScrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;
// scroll to top end
