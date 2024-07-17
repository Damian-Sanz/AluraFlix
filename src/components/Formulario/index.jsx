import styles from './Formulario.module.css'
import iconoClose from '../../assets/close.png'

function Formulario({pelicula, cambiarMostrar}) {
    return <section className={styles.containerForm}>
        <form className={styles.formulario}>
            <img onClick={cambiarMostrar}  src={iconoClose} alt="icono cerrar" className={styles.cerrarForm} />
            <h2 >{pelicula.titulo}</h2>
            
        </form>
    </section>
}

export default Formulario