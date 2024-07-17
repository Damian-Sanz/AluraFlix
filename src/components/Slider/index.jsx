import React, { useContext } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Slider.module.css';
import { GlobalContext } from '../../Context/GlobalContext';

const SeccionEstilizada = styled.div`
  background-image: url(${props => props.$backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  flex-direction: row;
  box-sizing: border-box;
  margin-top: 90px;
`;

const settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
};

const Sliders = () => {
  const { state } = useContext(GlobalContext);
  const pelis = state.peliculas;

  return (
    <Slider {...settings}>
      {pelis.map((pelicula) => (
        <SeccionEstilizada 
          key={pelicula.id} 
          $backgroundImage={pelicula.foto} 
          className={styles.containerBanner}
        >
          <div className={styles.capaContainer}>
            <img className={styles.portada} src={pelicula.portada} alt={pelicula.titulo} />
            <section className={styles.informacion}>
              <h2>{pelicula.titulo}</h2>
              <span>Año: {pelicula.anio}</span>
              <p>{pelicula.descripcion}</p>
              <div className={styles.containerBotones}>
                <button>Ver Trailer</button>
                <button>Ver Resumen</button>
              </div>
            </section>
          </div>
        </SeccionEstilizada>
      ))}
    </Slider>
  );
};

export default Sliders;
