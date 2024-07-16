import styled from 'styled-components'
import styles from './CardPeliculas.module.css'

function CardsPeliculas({pelicula}) {

    return(
        <div className={styles.containerCard}>
            <img src={pelicula.portada} alt={pelicula.titulo} className={styles.imgPortada} />
            <section className={styles.containerInfo}>
                <span>{pelicula.titulo}</span>
                <p>{pelicula.anio}</p>
            </section>
        </div>
    )
}

export default CardsPeliculas