const { BrowserRouter, Routes, Route } = require("react-router-dom");


function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<h1>Hola Mundo</h1>}>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;