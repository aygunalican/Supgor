import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import '../assets/css/shopproduct.css'
import { Container } from 'react-bootstrap';
import { ApiContext } from './ApiProvider';
import { useCart } from 'react-use-cart';

const Products = () => {
 const [data,setData]=useContext(ApiContext);
      const [selectedCategory, setSelectedCategory] = useState(null);
const{addItem}=useCart();

const filteredProducts = selectedCategory
  ? data.filter(item => item.category === selectedCategory)
  : data;

    return (
     <section className="products ">
  <Container>
    <div className="row g-3">
  
      <div className="categories col-12 col-md-3">
        <h3>Product categories</h3>
        <ul className='mt-3'>
          <li><input  type="checkbox" /> Bakery</li>
          <li><input type="checkbox" /> Beverages</li>
          <li><input type="checkbox" onClick={() => setSelectedCategory("Meat")}/> Meat</li>
          <li><input type="checkbox" /> Frozen foods</li>
          <li><input onClick={() => setSelectedCategory("Snack")} type="checkbox"  /> Snacks</li>
          <li><input type="checkbox" /> Deli</li>
          <li><input type="checkbox" onClick={() => setSelectedCategory("Meat")} /> Dairy & Eggs</li>
           <li><input type="checkbox" /> Healthcare</li>
            <li><input onClick={() => setSelectedCategory("Vegetable")} type="checkbox" /> Fruits & Vegetables</li>
        </ul>
      </div>


      <div className="col-12 col-md-9 oneproduct">
        <div className="row g-4">
          {filteredProducts.map(item => (
            <div key={item.id}  className="col-12 col-sm-6 col-lg-3">
              <div className="card">
                <img src={item.image} className="card-img-top" alt={item.name} />
                <div className="card- p-2">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text mb-0">${item.price}</p>
                   <button onClick={() => {addItem(item)}} className='btn me-2' style={{backgroundColor:"#851111"}} >Add to cart</button>
                  <Link to={`/products/${item.id}`} className="btn ">
                    View more
                  </Link>
                 
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  </Container>
</section>

    )
}

export default Products;
