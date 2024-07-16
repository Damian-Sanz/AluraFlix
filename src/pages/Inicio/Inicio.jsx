import { useContext, useEffect, useState } from 'react';
import styles from './Inicio.module.css'
import Sliders from '../../components/Slider';
import Tags from '../../components/Tags';
import CardsPeliculas from '../../components/CardsPeliculas';
import { GlobalContext } from '../../Context/GlobalContext';

function Inicio() {

    const { state } = useContext(GlobalContext);

    return (

        <>
            <Sliders />
            <div className={styles.containerInicio} >

                <section className={styles.tags}>
                    <Tags />
                </section>
                <section className={styles.containerPeliculas}>
                    {state.peliculas.filter(pelicula => {
                        return state.consulta == '' || pelicula.titulo.toLocaleLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "")
                            .includes(state.consulta.toLocaleLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, ""))
                    })
                        .map(pelicula => <CardsPeliculas
                            key={pelicula.id}
                            pelicula={pelicula} />)
                    }
                </section>

            </div>
        </>
    )
}

export default Inicio