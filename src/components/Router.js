import {Route, Routes} from 'react-router-dom'
import ImageSlider from './imageSlider';
import LoginPage from './LoginPage';
import Register from './register';

function Router(){
    return(
    <Routes>
        <Route path='/' element={<ImageSlider/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/register' element={<Register/>} />
      </Routes>
    )
}

export default Router