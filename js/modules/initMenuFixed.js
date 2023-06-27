export default function initMenuFixed(){
const menuFixed = document.querySelector(".menuFixed");
const tituloNavMenu = document.querySelector(".tituloNavMenu");
const myObserve = new IntersectionObserver((entries) =>{
  entries.forEach((entry) =>{
    if(entry.isIntersecting){
      menuFixed.classList.remove('active')
    }else{
      menuFixed.classList.add('active')
    }
  })
})
  myObserve.observe(tituloNavMenu)
}