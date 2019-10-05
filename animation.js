const logoMenu = document.querySelector(".logo");
const maintextStart = document.querySelector(".text-at-start");
const shortcutServ = document.querySelector(".services-shortcut");
const shortcutWork = document.querySelector(".work-shortcut");
const block = document.querySelector(".shitty-block");

const tl = new TimelineMax();

tl.fromTo(block, 1, {height: "100%"}, {height: "0%"})
tl.fromTo(logoMenu, 1, {opacity: "0", x: "-40px"}, {opacity: "1", x: "0px"})
tl.fromTo(maintextStart, 1, {opacity: "0", x: "-60px"}, {opacity: "1", x: "0px"})
tl.fromTo(shortcutServ, .8, {opacity: "0", x: "80px"}, {opacity: "1", x: "0px"})
tl.fromTo(shortcutWork, .8, {opacity: "0", x: "40px"}, {opacity: "1", x: "0px"})
