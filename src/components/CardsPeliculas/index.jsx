import styled from 'styled-components'
import styles from './CardPeliculas.module.css'
import iconEdit from './iconEdit.png'
import favoritoActivo from "../../assets/favorito.png"
import favoritoInactivo from "../../assets/noFavorito.png"
import { useState } from 'react'
import Formulario from '../Formulario'


function CardsPeliculas({pelicula}) {

    const [mostrarFormulario, actualizarMostrar] = useState(false)

    const cambiarMostrar = () => {
        actualizarMostrar(!mostrarFormulario)
        console.log('click editar');
    }

    const botonFavorito = pelicula.favorito ? favoritoActivo   : favoritoInactivo;

    return(<>
        <div className={styles.containerCard}>
            <img src={pelicula.portada} alt={pelicula.titulo} className={styles.imgPortada} />
            <section className={styles.containerInfo}>
                <div>
                    <span>{pelicula.titulo}</span>
                    <p>{pelicula.anio}</p>
                </div>
                <div className={styled.notonEditar}>
                    <img className={styles.iconoEditar} src={iconEdit} alt='editar' onClick={cambiarMostrar} />
                    <div className={styles.containerIconoFav} >
                        <img className={styles.iconoFav} src={botonFavorito} alt="iconoFavorito"  />
                    </div>
                </div>
            </section>
        </div>

        {mostrarFormulario && <Formulario pelicula={pelicula} cambiarMostrar={cambiarMostrar}  />}
    </>)
}

export default CardsPeliculas
