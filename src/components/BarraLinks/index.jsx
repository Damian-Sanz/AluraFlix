import { Link } from "react-router-dom"
import styles from './BarraLinks.module.css'

function BarraLinks ({url, children}) {

    return(

        <Link to={url} className={styles.link} >
            {children}
        </Link>
    )
}

export default BarraLinks