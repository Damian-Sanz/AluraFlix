import { createContext, useContext, useState, useReducer, useEffect } from "react";

export const GlobalContext = createContext()

const initialState = {
    consulta: '',
    peliculas: [],
    peliculaSeleccionada: null
}

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_CONSULTA":
            return { ...state, consulta: action.payload };
            break;
        case "SET_PELICULAS":
            return { ...state, peliculas: action.payload };
            break;
        case "SET_PELICULA_SELECCIONADA" :
            return { ...state, peliculaSeleccionada: action.payload}
            break;
        case "ALTERNAR_FAVORITO":
            const peliculas = state.peliculas.map(pelicula => {
                return {
                    ...pelicula,
                    favorita: pelicula.id === action.payload.id ? !action.payload.favorita : pelicula.favorita
                }
            });
            if (action.payload.id === state.peliculaSeleccionada?.id) {
                return {
                    ...state,
                    peliculas: peliculas,
                    peliculaSeleccionada: {
                        ...state.peliculaSeleccionada, favorita: !state.peliculaSeleccionada.favorita
                    }
                }
            } else {
                return {
                    ...state, peliculas: peliculas
                }
            }
            break;
        default:
            break;
    }
}

export const FavoritosContext = createContext()

FavoritosContext.displayName= "Favoritos"

export function useFavoritosContext(){

    const {favorito, setFavorito} = useContext(FavoritosContext)

    function agregarFavorito(nuevoFavorito) {
        const favoritoRepetido = favorito.some(
            (item) => item.id === nuevoFavorito.id
        )

        let nuevaLista = [...favorito]
        if (!favoritoRepetido) {
            nuevaLista.push(nuevoFavorito)
            return setFavorito(nuevaLista)
        }

        nuevaLista = favorito.filter(item => item.id !== nuevoFavorito.id )

        return setFavorito(nuevaLista)
    }

    return {favorito, agregarFavorito}
}

export default function GlobalContextPorvider({children}) {

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        const getData = async () => {
            const res = await fetch('http://localhost:3002/peliculas');
            const data = await res.json();
            dispatch({ type: 'SET_PELICULAS', payload: data })
        };

        getData()

    }, []);

    return <GlobalContext.Provider value={{ state, dispatch }} >
        {children}
    </GlobalContext.Provider>
}