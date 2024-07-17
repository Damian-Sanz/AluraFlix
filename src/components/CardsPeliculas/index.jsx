import styled from 'styled-components'
import styles from './CardPeliculas.module.css'
import iconEdit from './iconEdit.png'
import favoritoActivo from "../../assets/favorito.png"
import favoritoInactivo from "../../assets/noFavorito.png"


function CardsPeliculas({pelicula}) {

    const botonFavorito = pelicula.favorito ? favoritoActivo   : favoritoInactivo;

    return(
        <div className={styles.containerCard}>
            <img src={pelicula.portada} alt={pelicula.titulo} className={styles.imgPortada} />
            <section className={styles.containerInfo}>
                <div>
                    <span>{pelicula.titulo}</span>
                    <p>{pelicula.anio}</p>
                </div>
                <div className={styled.notonEditar}>
                    <img className={styles.iconoEditar} src={iconEdit} alt='editar' />
                    <div className={styles.containerIconoFav} >
                        <img className={styles.iconoFav} src={botonFavorito} alt="iconoFavorito" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CardsPeliculas
