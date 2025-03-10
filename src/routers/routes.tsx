import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Home, Login } from "../index";

export function MyRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />}></Route>
                <Route path='/caca' element={<Home />}></Route>
            </Routes>
        </BrowserRouter>)
}