//importar react para trabajar con la misma
import react, {Fragment} from 'react';
// JSX es la renderizacion de codigo dentro de elementos HTML
// siempre el contenido html tiene que estar en un contenedor, para no usar muchos divs, se usa el compontente de react {Fragment} // <fragment></fragment>
function Hola(){
    let saludo = 'variable saludo';
    return(
        <fragment>
            <h2> Primer componente llamado hola, {saludo}</h2>
        </fragment>
    )
}

export default Hola;