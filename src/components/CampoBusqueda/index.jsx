import styles from './CampoBusqueda.module.css'
import iconoSearch from './search.png'

function CampoBusqueda(){

    return(
        <section className={styles.containerBusqueda}>
            <img src={iconoSearch} />
            <input type='text' />
        </section>
    )
}

export default CampoBusqueda