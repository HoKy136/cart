import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
function FooterPage() {
    const {t} = useTranslation()

    return ( 
        <div className="bg-white  py-2 bottom-0 right-0 w-full h-1/12  grid grid-cols-3  mt-4">
            <div className="flex flex-col justify-center items-center">
                <p className="font-bold">
                    {t('Footer.About')}  
                </p>
                <p>Kỳ Kute</p>
                <a target="_blank" 
                    className="text-blue-700"
                    href="https://www.google.com/maps/place/FPT+Software+H%E1%BB%93+Ch%C3%AD+Minh/@10.8491835,106.7972894,17.13z/data=!4m14!1m7!3m6!1s0x3175272fb77e7199:0x98cb51d4483e1172!2sFPT+Software+Ho+Chi+Minh+-+F-Town+3!8m2!3d10.8362668!4d106.8083887!16s%2Fg%2F11d_f5gw06!3m5!1s0x317527374c43baad:0xb8b244d75d12213e!8m2!3d10.8508885!4d106.7983267!16s%2Fg%2F113gl62_r?hl=vi-VN">{t('Footer.Address')}</a>

            </div>
            <div className="flex flex-col justify-center items-center">
                <p className="font-bold">
                {t('Footer.Customer')}  
                </p>
                <NavLink to = '/checkout' className={({ isActive }) =>
                                isActive ? 'text-black' : ' text-gray-500'}>{t('CheckOut.Order')}</NavLink>
            </div>
            <div  className="flex flex-col justify-center items-center">
                <p className="font-bold">
                    {t('Footer.Contact')}  
                </p>
                <a target="_blank"
                    href="https://www.facebook.com/JamesHo136">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-facebook text-blue-700" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                </svg>
                </a>
                <a target="_blank"
                    href="https://discord.com/channels/@me">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-discord text-blue-700" viewBox="0 0 16 16">
                    <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"/>
                </svg>
                </a>
                
            </div>
        </div>
     );
}

export default FooterPage;