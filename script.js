// Get the wild container
const wildContainer = document.getElementById("wild-container");

// Generate wild shapes on load
for (let i = 0; i < 20; i++) {
    const shape = document.createElement("div");
    shape.classList.add("wild-shape");
    shape.style.left = `${Math.random() * 100}vw`;
    shape.style.top = `${Math.random() * 100}vh`;
    shape.style.animationDelay = `${Math.random() * 5}s`;
    wildContainer.appendChild(shape);
}

// Generate rotating mirrors
for (let i = 0; i < 10; i++) {
    const mirror = document.createElement("div");
    mirror.classList.add("mirror");
    mirror.style.left = `${Math.random() * 100}vw`;
    mirror.style.top = `${Math.random() * 100}vh`;
    mirror.style.animationDelay = `${Math.random() * 3}s`;
    wildContainer.appendChild(mirror);
}

// Generate bursts
for (let i = 0; i < 15; i++) {
    const burst = document.createElement("div");
    burst.classList.add("burst");
    burst.style.left = `${Math.random() * 100}vw`;
    burst.style.top = `${Math.random() * 100}vh`;
    burst.style.animationDelay = `${Math.random() * 4}s`;
    wildContainer.appendChild(burst);
}
