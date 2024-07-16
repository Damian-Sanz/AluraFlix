import { Outlet } from 'react-router-dom'
import BarraNav from '../../components/BarraNav'
import Pie from '../../components/Pie'
import GlobalContextPorvider from '../../Context/GlobalContext'

function PaginaBase() {
    return(
        <main>
            <GlobalContextPorvider>
                <BarraNav />
                <Outlet />
                <Pie />
            </GlobalContextPorvider>
        </main>
    )
}

export default PaginaBase