import initMenuMobile from "./initMenuMobile.js";
initMenuMobile();
import initMaquinaEscrever from "./initMaquinaEscrever.js";
initMaquinaEscrever();
import InitScroll from "./InitScroll.js";
InitScroll()
import initAtivarDescricaoSkills from "../modules/InitAtivarDescricaoSkills.js";
initAtivarDescricaoSkills();
import Slide from "../modules/initSlideStories.js"
const container = document.getElementById('slide');
const elements = document.getElementById('slide-elements');
const controls = document.getElementById('slide-controls');
if (container && elements && elements.children.length && controls) {
    const slide = new Slide(container, Array.from(elements.children), controls, 3000);
    slide.show(0)
}

