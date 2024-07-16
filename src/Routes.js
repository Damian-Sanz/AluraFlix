import Inicio from "./pages/Inicio/Inicio";
import PaginaBase from "./pages/PaginaBase";

const { BrowserRouter, Routes, Route } = require("react-router-dom");


function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <PaginaBase /> }>
                    <Route index element={<Inicio />} ></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;