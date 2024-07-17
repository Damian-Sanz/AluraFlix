import React from 'react'
import gifLoading from '../../assets/loading.gif'

const Cargando = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', background: 'black', height: '100%' }}>
            <img src={gifLoading} style={{ width: '50vw', height: '100%' }} />
        </div>
    )
}

export default Cargando