import { Outlet } from 'react-router-dom';
import FooterPage from './Footer-Page';
import HeaderPage from './Header-Page';

function MainPage() {
    return ( 
        <div className="w-full h-full flex flex-col relative">
            <HeaderPage/>
            <Outlet/>
            <FooterPage/>
        </div>
     );
}

export default MainPage;