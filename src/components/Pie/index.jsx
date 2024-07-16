import styles from './Pie.module.css'
import facebook from '../../assets/redes/facebook.png'
import instagram from '../../assets/redes/instagram.png'
import tiktok from '../../assets/redes/tiktok.png'
import autor from '../../assets/autor.jpg'
import iconoReact from '../../assets/reactIcon.png'
import iconoJs from '../../assets/logoJS.png'
import iconoCss from '../../assets/logoCss.png'
import iconoHtml from '../../assets/logoHtml.png'


function Pie () {
    return (
        <footer className={styles.containerPie}>
            <section className={styles.sobreAutor}>
                <div className={styles.containerLinks}>
                    <p>Challenge de Alura Latam, desarrollado por:</p>
                    <h2>Damian Sanz</h2>
                    <div className={styles.containerRedes}>
                        <a>
                            <img src={facebook} alt='Facebook' /> <span>Facebook</span>
                        </a>
                        <a>
                            <img src={instagram} alt='Instagram' /> <span>Instagram</span>
                        </a>
                        <a>
                            <img src={tiktok} alt='Tiktok' /> <span>Tiktok</span>
                        </a>
                    </div>
                </div>
                <img src={autor} alt="Autor de la Pagina" className={styles.imageAutor} />
            </section>
            <section className={styles.info}>
                <div className={styles.containerTecnologias}>
                    <span>Tecnologias utilizadas:</span>
                    <div className={styles.containerTecs}>
                        <img className={styles.iconosTec} src={iconoReact} alt="React" />
                        <img className={styles.iconosTec} src={iconoJs} alt="JavaScrip" />
                        <img className={styles.iconosTec} src={iconoCss} alt="Css" />
                        <img className={styles.iconosTec} src={iconoHtml} alt="HTML" />
                    </div>
                </div>
                <span>Las imágenes utilizadas en este sitio web son propiedad de sus respectivos autores. Se utilizan exclusivamente con fines educativos y académicos, sin intención de infringir los derechos de autor.</span>
            </section>
        </footer>
    )
}

export default Pie