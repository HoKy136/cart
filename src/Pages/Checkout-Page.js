import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CustomButton from "../Component/Button/Custom-button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

function CheckoutPage() {
  let navigate = useNavigate();
  const items = useSelector((state) => state.ReduxProduct.Carts);
  const [disable, setDisable] = useState(true);
  const dispatch = useDispatch();
  const {t} = useTranslation()
  const totalPriceNonShip = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
    );
  const handleRemove = (productId) => {
    dispatch({type:'DELETE_CART' , payload: {productId} })
  };
  const btnIncrea = (value) =>{
    if(value.quantity < 99){
      dispatch({ type: "INCRE", payload: { proCheckoutInc: value} })
    }else{
      return 99
    }
  }
  const btnDecrea = (value , productId) =>{
    if(value.quantity <= 1 ){
      confirmAlert({
        message: t('CheckOut.Mess'),
        buttons: [
          {
            label: "Yes",
            onClick: () => dispatch({type:'DELETE_CART' , payload: {productId} })
          },
          {
            label: "No"
          }
        ]
      });
    }else{
      dispatch({ type: "DECRE", payload: { proCheckoutDec: value} })
    }
  }
  useEffect(() => {
    if (items.length > 0) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [items.length]);

  const handleCheckout = () => {
    confirmAlert({
      message: t('CheckOut.Pay'),
      buttons: [
        {
          label: "Yes",
          onClick: () =>{dispatch({type : "CLEAR_CART"})
          toast.success(t('CheckOut.Thank'), {
            position: toast.POSITION.BOTTOM_LEFT,
          });}
        },
        {
          label: "No"
        }
      ]
    });
  
  };
  return (
    <div
      className=" w-screen h-full flex flex-col py-14 "
      style={{ backgroundColor: "#e5e7eb" }}
    >
      <ToastContainer />
      <div className="bg-white rounded-lg h-14 mx-9 justify-center font-semibold flex items-center mt-5">
        <p>{t('CheckOut.Title')}</p>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {items.length === 0 ? (
          <div className="col-span-2 flex justify-center ">
            {t('CheckOut.Content')}
          </div>
        ) : (
          <div className="col-span-2 flex flex-col justify-center gap-4">
            {items.map((value, index) => {
              return (
                <div
                  className="bg-white rounded-lg grid grid-cols-3 mx-14 p-4 "
                  key={index}
                >
                  <div>
                    <img src={value.imageUrl} className="h-36" />
                  </div>
                  <div className="col-span-2 mx-2 ">
                    <div className="flex justify-around">
                      <p className=" font-semibold text-2xl">{value.productName}</p>
                      <CustomButton
                        onClick={() => handleRemove(value.productId)}
                        className="w-8"
                        value={
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-trash text-red-400"
                            viewBox="0 0 16 16"
                          >
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                            <path
                              fillRule="evenodd"
                              d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                            />
                          </svg>
                        }
                      ></CustomButton>
                    </div>
                    <div className="my-4">
                      <p>{value.description}</p>
                    </div>
                    <div className="flex justify-around ">
                      <div style={{ backgroundColor: "#e5e7eb" }}>
                        <CustomButton className="w-8 text-red-600"
                          value="-"
                          onClick={() => btnDecrea(value , value.productId)}/>

                        <span className="w-4 ">{value.quantity}</span>
                        <CustomButton  onClick={() => btnIncrea(value)}
                                  className="w-8 text-red-600"
                                value="+"/>
                      </div>
                      <p className=" font-semibold text-2xl">
                      {value.price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        <div className="space-y-4">
          <div className="bg-white rounded-lg flex flex-col mx-9 p-4">
            <p className=" font-semibold text-2xl">{t('CheckOut.Order')}</p>
            <div className="grid grid-cols-2 gap-4 pt-3">
              <div>
                <p>{t('CheckOut.Subtotal')}</p>
                <p>{t('CheckOut.Ship')}</p>
              </div>
              <div>
                <p>${totalPriceNonShip.toFixed(2)}</p>
                <p>$10</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-6 font-bold text-2xl">
              <p>{t('CheckOut.Total')}</p>
              {totalPriceNonShip !==0 ? <p>${(totalPriceNonShip + 10).toFixed(2)}</p>: <p>$0.00</p>}
              
            </div>
          </div>
          <div className="flex flex-col gap-4 h-20 mx-9  ">
            <button
              className="h-20"
              disabled={disable}
              onClick={handleCheckout}
              style={{ backgroundColor: "#3B82F6", color: "white" }}
            >
              {t('CheckOut.CheckOut')}
            </button>
            <button
              className="h-14 border-2 border-sky-500 text-blue-500"
              onClick={() => navigate("/products")}
            >
              {t('CheckOut.Continue')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
