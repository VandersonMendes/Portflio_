import Timeout from "../modules/TimeOut.js"
export default class Slide{
    container;
    slides; 
    controls; 
    time;
    index;
    slide;
    thumbItems;
    thumb;
    constructor(slideContainer, slideElements, slideControls, time){
        this.container = slideContainer,
        this.slides = slideElements,
        this.slide = this.slides[this.index];
        this.paused = false;    
        this.controls = slideControls,
        this.time = time,
        this.index = 2, 
        this.thumbItems = null
        this.thumb = null,
        this.timeout = null,
        this.pausedTimeout = null,
        this.init()
        console.log(this.index)
        console.log(this.slides[this.index])
    }
    hide(el) {
        el.classList.remove("active");
      }
    show(i){
        this.index = i;
        this.slide = this.slides[this.index];
        if (this.thumbItems) {
            this.thumb = this.thumbItems[this.index];
            this.thumbItems.forEach((el) => el.classList.remove("active"));
            this.thumb.classList.add("active");
          }
          this.slides.forEach((el) => this.hide(el));
          this.slide.classList.add("active");
          this.auto(this.time)
    }
    auto(time) {
        this.timeout?.clear();
        this.timeout = new Timeout(() => this.next(), time);
        if (this.thumb) this.thumb.style.animationDuration = `${time}ms`;
      }
      prev() {
        if (this.paused) return;
        const prev = this.index > 0 ? this.index - 1 : this.slides.length - 1;
        this.show(prev);
      }
      next() {
        if (this.paused) return;
        const next = this.index + 1 < this.slides.length ? this.index + 1 : 0;
        this.show(next);
      }
      pause() {
        document.body.classList.add('paused')
        const conteudoPaused = document.getElementById('conteudoPaused');
        console.log(this.slides)
        
        this.pausedTimeout = new Timeout(() => {
          this.timeout?.pause();
          this.paused = true;
          this.thumb?.classList.add("paused");
        }, 250);
      }
      continue() {
        document.body.classList.remove('paused')
        this.pausedTimeout?.clear();
        if (this.paused) {
          this.paused = false;
          this.timeout?.continue();
          this.thumb?.classList.remove("paused");
          if (this.slide instanceof HTMLVideoElement) this.slide.play();
        }
      }
       addControls() {
        const prevButton = document.getElementById("buttonPrev");
        const nextButton = document.getElementById("buttonNext");
        this.controls.addEventListener("pointerdown", () => this.pause());
        document.addEventListener("pointerup", () => this.continue());
        document.addEventListener("touchend", () => this.continue());
        prevButton.addEventListener("pointerup", () => this.prev());
        nextButton.addEventListener("pointerup", () => this.next());
      }
    addThumbItems() {
        const thumbContainer = document.createElement("div");
        thumbContainer.id = "slide-thumb";
        for (let i = 0; i < this.slides.length; i++) {
          thumbContainer.innerHTML += `<span><span class="thumb-item"></span></span>`;
        }
        this.controls.appendChild(thumbContainer);
        this.thumbItems = Array.from(document.querySelectorAll(".thumb-item"));
      }
    init(){
        this.show(this.index)
        this.addControls()
        this.addThumbItems()
    }
}