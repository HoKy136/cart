import {  useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';
import DetailsPage from './Details-Page';
import { useDispatch, useSelector   } from 'react-redux';
import Loading from '../Component/Loading/Loading';
import { useTranslation } from "react-i18next";

function ProductPage() {
    const data = useSelector(state => state.ReduxProduct.data)
    const dispath = useDispatch()
    const {t} = useTranslation()
    const [getData , setGetData] = useState([])
    useEffect(() =>{
        if(data.length == 1){
            data.map((item) =>{
                setGetData([...item])
           });
        }
       
    } ,[data])
    useEffect(() => {
            const timeFetch = setTimeout(() =>{
         dispath({
                type: "GET_API",
            })
        },3000)
        return() => {
            clearTimeout(timeFetch);
          };
    }, [data.length === 0 ? data : null])
    const products1 = [...getData]
    return ( 
        <>{products1.length === 0 ?
        <div className='flex py-16 items-center justify-center h-screen'
        style={{backgroundColor :'#e5e7eb'}}>
                <Loading/>

        </div>
        :
        <div className ='grid grid-cols-2 py-16 px-16 '
            style={{backgroundColor :'#e5e7eb'}}>
            <div>
                <DetailsPage/>
            </div>
            <div className='overflow-scroll'>
            {getData.map(item  =>{
                return(
                    <div className='grid grid-cols-3 w-full h-44 bg-slate-50 my-4'
                        key={item.productId}>
                        <div className='col-span-1 flex items-center justify-center'>
                            <img src={item.imageUrl} className= 'h-36'/>
                        </div>
                        <div className='flex flex-col col-span-2 p-4'>
                            <h3 className='font-extrabold'>
                                {item.productName}
                            </h3>
                            <p>
                                {item.description}
                            </p>
                            <div className='flex justify-between my-8'>
                            <h3 className='font-extrabold'>
                                {item.price}
                            </h3>
                            <NavLink to ={`/products/${item.productId}`} className='text-blue-500'>{t('Main.detail')}</NavLink>
                            </div>
                        </div> 
                    </div>
                )
            })}
            </div>
        </div>}
        </>
     );
}

export default ProductPage;