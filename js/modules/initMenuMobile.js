export default function initMenuMobile(){
  const menuMobile = document.querySelector( '.menuMobile')
  const listMenu = document.querySelector('.listMenu');
  const tituloNavMenu = document.querySelector('.tituloNavMenu')
  function handleClick(){
    listMenu.classList.toggle("active")
    tituloNavMenu.classList.toggle("remove");
    if(listMenu.classList.contains("remove")){
      listMenu.classList.add('')
    }
  }
  menuMobile.addEventListener("click", handleClick)
}