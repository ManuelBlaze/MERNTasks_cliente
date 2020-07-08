
import React, { useReducer } from 'react';
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';

const TareaState = props => {
    const initialState = {
        tareas: [
            { nombre: 'Elegir Plataforma', estado: true, proyectoId: 1 },
            { nombre: 'Elegir colores', estado: false, proyectoId: 2 },
            { nombre: 'Elegir Plataformas de Pago', estado: false, proyectoId: 3 },
            { nombre: 'Elegir Hosting', estado: true, proyectoId: 4 },
            { nombre: 'Elegir Plataforma', estado: true, proyectoId: 1 },
            { nombre: 'Elegir colores', estado: false, proyectoId: 2 },
            { nombre: 'Elegir Plataformas de Pago', estado: false, proyectoId: 3 },
            { nombre: 'Elegir Plataforma', estado: true, proyectoId: 4 },
            { nombre: 'Elegir colores', estado: false, proyectoId: 1 },
            { nombre: 'Elegir Plataformas de Pago', estado: false, proyectoId: 2 },
            { nombre: 'Elegir Plataforma', estado: true, proyectoId: 3 },
            { nombre: 'Elegir colores', estado: false, proyectoId: 4 },
            { nombre: 'Elegir Plataformas de Pago', estado: false, proyectoId: 3 },
        ],
    }

    //Crear dispatch y state
    const [state, dispatch] = useReducer(TareaReducer, initialState);

    return(
        <TareaContext.Provider
            value={{
                tareas: state.tareas
            }}
        >
            {props.children}
        </TareaContext.Provider>
    )
}

export default TareaState;