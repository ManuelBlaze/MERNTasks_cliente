import React, { Fragment, useState, useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';

const NuevoProyecto = () => {

    //Obtener ek state del formulario
    const proyectosContext = useContext(proyectoContext);
    const { formulario, errorformulario, mostrarFormulario, agregarProyecto, mostrarError } = proyectosContext;

    //state para el proyecto
    const [proyecto, setProyecto] = useState({
        nombre: ''
    });

    //Extraer nombre
    const { nombre } = proyecto;

    //Lee el contenido del input
    const onChangeProyecto = e => {
        setProyecto({
            ...proyecto,
            [e.target.name]: e.target.value
        })
    }

    //Cuando se realiza un submit
    const onSubmitProyecto = e => {
        e.preventDefault();

        //Validar el proyecto
        if(nombre === '') {
            mostrarError(true);
            return;
        }

        //Agregar al state
        agregarProyecto(proyecto);

        //Reiniciar el Form
        setProyecto({
            nombre: ''
        });
    }

    //Mostrar el formulario
    const onClickForm = () => {
        mostrarFormulario();
    }

    return (
        <Fragment>
            <button 
                type="button"
                className="btn btn-block btn-primario"
                onClick={onClickForm}
                >
                Nuevo Proyecto  <i className="fas fa-plus"></i>
            </button>

            { formulario ? 
                (
                    <form
                        className="formulario-nuevo-proyecto"
                        onSubmit={onSubmitProyecto}
                    >
                        <input
                            type="text"
                            name="nombre"
                            placeholder="Nombre Proyecto"
                            className="input-text"
                            value={nombre}
                            onChange={onChangeProyecto}
                        />

                        <input
                            type="submit"
                            value="Agregar"
                            className="btn btn-primario btn-block"
                        />
                    </form>
                ) : null }

                {errorformulario ? <p className="mensaje error"><i className="fas fa-exclamation-circle"></i> El Nombre es Obligatorio</p>  : null}

        </Fragment>
    )
}

export default NuevoProyecto;
