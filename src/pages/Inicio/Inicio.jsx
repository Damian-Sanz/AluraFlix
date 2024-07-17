import React, { useContext, useState, useEffect, useRef } from 'react';
import styles from './Inicio.module.css';
import Sliders from '../../components/Slider';
import Tags from '../../components/Tags';
import CardsPeliculas from '../../components/CardsPeliculas';
import Cargando from '../../components/Cargando';
import { GlobalContext } from '../../Context/GlobalContext';

function Inicio() {

    const { state } = useContext(GlobalContext);
    const [showResults, setShowResults] = useState(false);
    const contenedorPelis = useRef(null);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setShowResults(true);
        }, 5000);

        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <>
            <Sliders />
            <div className={styles.containerInicio} >
                <section className={styles.tags}>
                    <Tags />
                </section>
                {!showResults && <Cargando />}
                <section className={styles.containerPeliculas} ref={contenedorPelis}>
                    {showResults &&
                        state.peliculas.filter(pelicula => {
                            return state.consulta === '' || pelicula.titulo.toLocaleLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "")
                                .includes(state.consulta.toLocaleLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, ""))
                        })
                            .map(pelicula => (
                                <CardsPeliculas
                                    key={pelicula.id}
                                    pelicula={pelicula}
                                />
                            ))
                    }
                </section>
            </div>
        </>
    );
}

export default Inicio;
