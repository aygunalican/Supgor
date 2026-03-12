import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../assets/css/single.css'
import { IoStarSharp } from 'react-icons/io5';
import { TbPlant2 } from 'react-icons/tb';
import { LuBus } from 'react-icons/lu';
import { useCart } from 'react-use-cart';

const Productdetails = () => {
  const { id } = useParams();
  const [info, setInfo] = useState(null);
    const { addItem } = useCart(); 

  useEffect(() => {
    axios
      .get("https://mocki.io/v1/db0ccc02-f9bd-4d0d-87a8-ec06333e16b7")
      .then(res => {
        const product = res.data.products.find(
          item => item.id === Number(id)
        );
        setInfo(product);
      });
  }, [id]);

  if (!info) return <h2>Loading...</h2>;

  return (
    <div className="singleproduct">
    <div className="container single ">
      <div className="image-con">
            <img src={info.image} alt={info.name} />
      </div>
      <div className="text-con">
      <h1>{info.name}</h1>
      <div className="stars">
        <p><TbPlant2 className="plant me-2" />ORGANIC</p>
      <IoStarSharp className='star' />    <IoStarSharp className='star' />  <IoStarSharp className='star' />  <IoStarSharp className='star' />
      </div>
    <p>High-quality product - <span>{info.name}</span> made to meet your everyday needs. Perfect for home or professional use.</p>
      <h4>${info.price}</h4>
      <p> <LuBus className='bus me-2' />Speedy and reliable parcel delivery ! Shipping within 3 days</p>
      <p>amount:<span ms-4>250 grams</span></p>
      <div className="btns mt-3">
      <button onClick={() => {addItem(info)}} className=' btn btn-outline-primary  me-3'>Add to cart</button>
      <Link to="/products" className='btn alo btn-outline-primary '>Go back</Link></div></div>
    </div>
    </div>
  );
};

export default Productdetails;
