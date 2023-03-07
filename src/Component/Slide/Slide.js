import { useEffect, useRef, useState } from 'react';
import GetImg from '../../Img/shoppingcart-136-default-rtdb-export.json'
import './style.css'
const delay = 2500;
const getItems = GetImg.Products.map(img => {
  return img.imageUrl
})
function SlideShow() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);
  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }
  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === getItems.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {GetImg.Products.map((items, index) => (
          <div
            className="slide" 
            key={index}
          ><img src={items.imageUrl} className ="w-96 h-96"/></div>
        ))}
      </div>

      <div className="slideshowDots">
        {GetImg.Products.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}


export default SlideShow;
