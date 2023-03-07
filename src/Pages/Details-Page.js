import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CustomButton from "../Component/Button/Custom-button";
import { useDispatch, useSelector } from 'react-redux';
import { ReduxProduct } from "../db/Redux/Reducers/ReduxProduct";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTranslation } from "react-i18next";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import  { auth } from "../Firebase/Firebase"
function DetailsPage() {
    let navigate = useNavigate();

    const dispatch = useDispatch()
    const data = useSelector(state => state.ReduxProduct.data)
    const [quantity , setQuantity] = useState(1)
    const {detailsId} = useParams()
    const [getData , setGetData] = useState([])
    const {t} = useTranslation()
    useEffect(() =>{

        data.map((item) =>{
            setGetData([...item])
       });
    } ,[])
    useEffect(()=>{
        setQuantity(1)
    },[detailsId])
    const newProduct = getData.filter((item,index)=>{
        return item.productId == detailsId;
    })

       const handleMinus = () =>{
       
            if(quantity > 1){
                setQuantity(quantity -1)
            }else{
                return 1
            }
       }
       const handlePlus = () =>{
       
        if(quantity < 99){
            setQuantity(quantity +1)
        }
        else{
           return 99
        }
       }

       const handleAdd = (item) =>{
      if(auth.currentUser !== null){
        
        dispatch({type: "ADD_TO_CART", payload: { product: item, quantity: quantity }})
           
        toast.success(t('Main.added'), {
            position: toast.POSITION.BOTTOM_LEFT
        });
      }else{
        confirmAlert({
            message: t('Main.login'),
            buttons: [
              {
                label: "Yes",
                onClick: () => navigate('/login')

              },
              {
                label: "No"
              }
            ]
          });
      }
       }
    return ( 
        <>
            {newProduct.map(item =>{ 
                return(
                <div className="bg-slate-50 flex flex-col my-4 mr-2"
                    key={item.productId}>
                <div className="mx-8">
                    <img src={item.imageUrl} className="w-72"/>
                    <h3 className='font-extrabold'>
                                {item.productName}
                    </h3>
                    <p>
                        {item.description}
                    </p>
                    <div className="flex justify-around my-8">
                        <div className="flex rounded-md items-center"
                        style={{backgroundColor :'#e5e7eb'}}>
                            <CustomButton onClick={handleMinus}
                                            className = 'w-8'
                                            value = '-' />
                            <span  className='w-4 '>{quantity}</span>
                            <CustomButton onClick={handlePlus}
                                            className='w-8'
                                            value = '+'/>
                        </div>
                        <div className="flex">
                            <h3 className='font-bold mr-4'>
                                {item.price}
                            </h3>
                            <CustomButton className="rounded-lg bg-blue-500 text-white w-36 h-8 flex justify-center items-center"
                                            value = {t('Main.add')}
                                            onClick={() => handleAdd(item)}    />
                                            <ToastContainer />
                        </div>
                    </div>
                    </div>
                </div>
                )
            })}
        </>
     );
}

export default DetailsPage;