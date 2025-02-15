const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReaveal().reveal(".container .letter-s", {
    duration: 1000,
    delay: 1000,
});

ScrollReaveal().reveal(".container img", {
    duration: 1000,
    delay: 1500,
});

ScrollReaveal().reveal(".container .text__left", {
    ...scrollRevealOption,
    origin: "right",
    delay: 2000,
});

ScrollReaveal().reveal(".container .text__right", {
    ...scrollRevealOption,
    origin: "right",
    delay: 2000,
});

ScrollReaveal().reveal(".container .explore", {
    duration: 1000,
    delay: 2500,
});

ScrollReveal().reveal(".container h5", {
    duration: 1000,
    interval: 500,
    delay: 3000,
});

ScrollReaveal().reveal(".container .catalog", {
    duration: 1000,
    delay: 5000,
});
