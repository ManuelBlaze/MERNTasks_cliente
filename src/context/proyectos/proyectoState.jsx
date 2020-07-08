import React, { useReducer } from 'react';
import { v4 as uuid } from "uuid";

import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import {
	FORMULARIO_PROYECTO,
	OBTENER_PROYECTOS,
	AGREGAR_PROYECTO,
	VALIDAR_FORMULARIO
} from "../../types/index";


const ProyectoState = props => {

    const proyectos = [
        { id: 1, nombre: 'Tienda Virtual' },
        { id: 2, nombre: 'Intranet' },
        { id: 3, nombre: 'Diseño Logo' },
        { id: 4, nombre: 'MERN' }
    ]

    const initialState = {
        proyectos : [ ],
        formulario: false,
        errorformulario: false
    }

    //Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(proyectoReducer, initialState);

    //Funciones para el CRUD
    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    }

    // Obtener los proyectos
    const obtenerProyectos = () => {
        dispatch({
            type: OBTENER_PROYECTOS,
            payload: proyectos
        })
    }

    //Agregar nuevo Proyecto
    const agregarProyecto = proyecto => {
        proyecto.id = uuid();

        //insertar proyecto en el state
        dispatch({
            type: AGREGAR_PROYECTO,
            payload: proyecto
        })
    }

    //Valida el formulario por errores
    const mostrarError = () => {
        dispatch({
            type: VALIDAR_FORMULARIO
        })
    }


    return (
			<proyectoContext.Provider
				value={{
					proyectos: state.proyectos,
					formulario: state.formulario,
					errorformulario: state.errorformulario,
					mostrarFormulario,
					obtenerProyectos,
					agregarProyecto,
					mostrarError
				}}
			>
				{props.children}
			</proyectoContext.Provider>
		);
}

export default ProyectoState;
