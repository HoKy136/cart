import SlideShow from '../Component/Slide/Slide';
import { useTranslation } from "react-i18next";


function Welcome() {
    const {t} = useTranslation()
    return (
        <div className="grid grid-cols-2 w-screen"
        style={{backgroundColor :'#e5e7eb'}}>
            <div  className=" h-screen flex justify-center items-center pt-14">
                <p className=' font-bold'>{t('Header.welcome')}</p>
                <p>ZZZZZZZZZZZZ</p>
            </div>
            <div className="  h-screen flex justify-center pt-32 ">
                <SlideShow/>
            </div>
        </div>  
      );
}

export default Welcome;