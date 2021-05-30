import React, {fragment, useState} from 'react';

const Contador = () => {
    // Un Hook es una función especial que permite “conectarse” a características de React
    // useState es un Hook que te permite añadir el estado de React a un componente de función.
    const [numero, setnumero] = useState(0);
    const aumentar = () => {
        setnumero(numero + 1)
    }

    const reducir = () => {
        setnumero(numero - 1)
    }

    return (
        <fragment>
            <h2>Resultado de contador: {numero}</h2>
            <button onClick={aumentar}>Aumentar</button>
            <button onClick={reducir}>Reducir</button>
        </fragment>
    )
}

export default Contador;