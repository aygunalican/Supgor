
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../assets/css/items.css'
import { Link } from "react-router";
const MultipleItems =({items})=> {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div className="slider-container ">
      <Slider {...settings}>
        {items.map(item=>
          (
           <Link to={`/products/${item.id}`}>
         <img src={item.image} style={{height:"300px",boxShadow:"2px 2px 2px grey", borderRadius:"20px"}} />
         
    </Link>
    
          )
          
        )
        
        }
   
        
      </Slider>
      
    </div>
  );
}

export default MultipleItems;
