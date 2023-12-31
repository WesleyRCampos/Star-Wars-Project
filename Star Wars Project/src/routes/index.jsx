import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Login } from '../pages/Login'
import { Register } from '../pages/Register'
import { Characters } from '../pages/Characters'
export const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/characters' element={<Characters />} />
            </Routes>
        </Router>
    );
};