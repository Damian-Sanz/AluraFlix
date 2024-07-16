import styles from './DesplegableGeneros.module.css'

function DesplegableGeneros () {
    return (
        <select className={styles.selector}>
            <option hidden >Generos</option>
            <option>Accion</option>
            <option>Ciencia Ficcion</option>
            <option>Aventura</option>
            <option>Romance</option>
            <option>Comedia</option>
            <option>Terror</option>
            <option>Suspenso</option>
        </select>
    )
}

export default DesplegableGeneros;