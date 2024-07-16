import { Link } from 'react-router-dom'
import styles from './BarraNav.module.css'
import logo from './LogoCompleto.png'
import BarraLinks from '../BarraLinks'
import CampoBusqueda from '../CampoBusqueda'
import DesplegableGeneros from '../DesplegableGeneros'

function BarraNav() {
    return(
        <>
            <header className={styles.container}>
                <section className={styles.logoMasBusqueda}>
                    <Link to='/'>
                        <section className={styles.logoContainer}>
                            <img src={logo} alt='Logo aluraflix' />
                        </section>
                    </Link>
                    <CampoBusqueda />
                </section>

                <nav>
                    <DesplegableGeneros />
                    <BarraLinks url='./Favoritos'>
                        Favoritos
                    </BarraLinks>
                    <BarraLinks url='./'>
                        Inicio
                    </BarraLinks>
                </nav>
            </header>
        </>
    )
}

export default BarraNav