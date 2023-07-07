import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from '../component/pages/main'
import Error from '../component/pages/error'
import Navigation from '../layout/navigation'

const Routeur = () => {
    return (
        <BrowserRouter>
            <Navigation />
                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='*' element={<Error />} />
                </Routes>
        </BrowserRouter>
    )
}

export default Routeur
