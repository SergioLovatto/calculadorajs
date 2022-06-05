window.addEventListener('load', () => { //escuchamos cuando se carga el evento
    //creamos 2 constantes y guardamos los elementos que necesitamos
    const display = document.querySelector('.pantalla');
    const keypad = document.getElementsByClassName('botones')
//creamos otra constante para convertir el html a array
    const keypadarray = Array.from(keypad);
    //iteramos a nuestro array de botones
    keypadarray.forEach((button) => {
        //a cada boton le agregamos un listener que escribe su contenido
        button.addEventListener('click',()=> {
            calculadora (button,display);
        })
    })

});

function calculadora (button, display) {
    switch (button.innerHTML) {
    case 'C':
         borrar(display)
         break;
         case '=':
         calcular(display)
         break;
      default:
            actualizar(display,button)
         
            break;
     }
 }

 function calcular (display){
     display.innerHTML = eval(display.innerHTML)//toma el string y lo resuelve
 }
 function actualizar(display,button){
     if (display.innerHTML == 0) {
         display.innerHTML = '';
          }
         display.innerHTML = display.innerHTML + button.innerHTML//
 }

 function borrar (display){
     display.innerHTML = 0 ;
 }