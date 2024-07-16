import styles from './Pie.module.css'
import facebook from '../../assets/redes/facebook.png'
import instagram from '../../assets/redes/instagram.png'
import tiktok from '../../assets/redes/tiktok.png'

function Pie () {
    return (
        <footer className={styles.containerPie}>
            <section className={styles.redes}>
                <a>
                    <img src={facebook} alt='Facebook' /> <span>Facebook</span>
                </a>
                <a>
                    <img src={instagram} alt='Instagram' /> <span>Instagram</span>
                </a>
                <a>
                    <img src={tiktok} alt='Tiktok' /> <span>Tiktok</span>
                </a>
            </section>
            <section className={styles.info}>
                <span>Desarrollado por Damian</span>
            </section>
        </footer>
    )
}

export default Pie