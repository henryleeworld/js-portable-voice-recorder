let b = document.body;
let radio = document.querySelector("#radio");
let a = document.querySelector("#audio");

let sfa = document.querySelectorAll(".speaker-front");
let sta = document.querySelectorAll(".speaker-top");
let sba = document.querySelectorAll(".speaker-back");
let sla = document.querySelectorAll(".speaker-left");
let sra = document.querySelectorAll(".speaker-right");

let son = document.querySelector("#son");
let soff = document.querySelector("#soff");

let playAudio = () => {
    a.loop = true;

    if (a.paused) a.play();
    else {
        a.pause();
        a.currentTime = 0;
    }
    sfa.forEach(f => f.classList.toggle("sfa"));
    sta.forEach(f => f.classList.toggle("sta"));
    sba.forEach(f => f.classList.toggle("sba"));
    sla.forEach(f => f.classList.toggle("sla"));
    sra.forEach(f => f.classList.toggle("sra"));

    radio.classList.toggle("radio-a")

    son.classList.toggle("s")
    soff.classList.toggle("s")
}

b.addEventListener("click", playAudio)