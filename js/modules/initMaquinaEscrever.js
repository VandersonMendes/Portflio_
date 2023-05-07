export default function initMaquinaEscrever(){
  const text = document.querySelector('[data-anime="maquinaEscrever"]');
  if(text){
    function typeWrite(elem){
      const textArray = elem.innerHTML.split('');
      elem.innerHTML=" ";
      textArray.forEach((letra, i) => {
        console.log(i)
        setTimeout(() =>{
          elem.innerHTML += letra
        }, 130 * i)
      });
    }
    typeWrite(text)
  }

}