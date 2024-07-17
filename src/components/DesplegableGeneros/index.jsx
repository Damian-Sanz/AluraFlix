import styles from './DesplegableGeneros.module.css'

function DesplegableGeneros () {
    return (
        <select className={styles.selector}>
            <option hidden >Géneros</option>
            <option>Acción</option>
            <option>Ciencia Ficción</option>
            <option>Aventura</option>
            <option>Romance</option>
            <option>Comedia</option>
            <option>Terror</option>
            <option>Suspenso</option>
        </select>
    )
}

export default DesplegableGeneros;