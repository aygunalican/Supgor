import React from 'react'
import '../assets/css/blog.css'
const Blog = () => {
  return (
   <section className="blog">

      <div className="title-con">Blog</div>
      <div className="blogcard">
        <img src='https://i.pinimg.com/1200x/6c/36/a7/6c36a7e89fd2c3d3d5fe252e00e96c93.jpg'></img>
    <h2>Peeled Tomatoes in a Can: Easy, Flavorful, and Perfect for Every Dish</h2>
    <p>Enjoy the rich, natural flavor of peeled tomatoes in a can. Ready to use, they save time and effort while making sauces, soups, and stews effortlessly delicious. Each can preserves the freshness of ripe tomatoes, bringing vibrant taste and convenience to every meal.</p>
      <button>Read more</button>
      </div>
            <div className="blogcard">
        <img src='https://i.pinimg.com/1200x/d6/ff/e3/d6ffe374b46f9033e98e7e73f02b4bbf.jpg'></img>
    <h2>Fresh Fish on Sale: Delicious Deals You Can’t Miss!</h2>
    <p> Discover our selection of fresh fish now available at special discounted prices! Perfect for healthy meals, grilling, baking, or cooking your favorite seafood dishes, each fish is carefully sourced to ensure maximum freshness and flavor. Take advantage of this limited-time offer and bring delicious, high-quality fish to your table while saving money.</p>
     <button>Read more</button>

      </div> 
            <div className="blogcard">
        <img src='https://i.pinimg.com/1200x/aa/9b/72/aa9b72a6281516f14ba56322afd8fc78.jpg'></img>
    <h2>Delicious Tarts for Every Sweet Tooth: A Collection of Irresistible Treats</h2>
    <p>Indulge in a delightful variety of tarts, each crafted to satisfy your sweet cravings. From fruit-filled classics to decadent chocolate creations, these tarts are perfect for any occasion — whether a cozy afternoon at home or a festive celebration. Made with high-quality ingredients, each tart offers a perfect balance of flavor, texture, and visual appeal. Explore our collection and find the perfect tart to brighten your day and treat yourself or your loved ones</p>
    <button>Read more</button>
      </div>

  
   </section>
  )
}

export default Blog