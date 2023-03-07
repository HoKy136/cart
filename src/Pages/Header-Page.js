import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CustomButton from "../Component/Button/Custom-button";
import {auth} from "../Firebase/Firebase"
import LogOut from "./Login/LogOut";
function HeaderPage() {
    const {Carts} = useSelector(state => state.ReduxProduct)
    const {t, i18n} = useTranslation()
    return ( 
        <div className="bg-white  py-2 top-0 right-0 w-full h-1/12 fixed">
            
            <div className="flex justify-between items-center">
                <div className="ml-4 text-lg">
                    <NavLink to = '/home' className={({ isActive }) =>
                                isActive ? 'text-black' : ' text-gray-500'}>{t('Header.home')}</NavLink>
                    <NavLink to = '/products'  className={({ isActive }) =>
                                isActive ? 'text-black ml-4' : ' text-gray-500 ml-4'}>{t('Header.product')}</NavLink>
                    <NavLink to = '/reviews'  className={({ isActive }) =>
                                isActive ? 'text-black ml-4' : ' text-gray-500 ml-4'}>{t('Header.review')}</NavLink>
                </div>
                <div className="w-1/3">
                    <h2 className="text-2xl text-blue-500 font-bold text-center">Beauty.Ful</h2>
                </div>
                <div className="w-1/3">
                    <div className="flex items-center justify-end">
                        <CustomButton className="rounded-lg bg-blue-500 w-8 h-6 text-white flex justify-center items-center"
                                            value = 'vi' 
                                            onClick={() => i18n.changeLanguage('vi')} />
                        <CustomButton className="rounded-lg mx-3 bg-blue-500 w-8 h-6 text-white flex justify-center items-center"
                                            value = 'en' 
                                            onClick={() => i18n.changeLanguage('en')} />
                        {auth.currentUser === null ? 
                        <NavLink to = '/login' className='mr-4 text-blue-500'>{t('Header.signin')}</NavLink> :
                        <> { auth.currentUser.email} {<LogOut/>}</> 

                        }
                        
                        <div className="rounded-full relative flex items-center 
                        justify-center text-2xl w-10 h-10 text-blue-500">
                                        <span>{Carts.length}</span>
                            <NavLink to ='/checkout' >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart-fill" viewBox="0 0 16 16">
                                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                                </svg>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>   
        
     );
}

export default HeaderPage;