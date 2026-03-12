import React from 'react';
import { useCart } from 'react-use-cart';
import Swal from 'sweetalert2';
import '../assets/css/basket.css'

const Basket = () => {
  const { isEmpty, items, updateItemQuantity, removeItem, cartTotal } = useCart();

  if (isEmpty) {
    return (
      <div style={{backgroundColor:"#064C50"}} className="d-flex align-items-center justify-content-center">
        <img style={{width:"100%", height:"100vh", opacity:"0.3"}} 
             src="https://i.pinimg.com/originals/b5/4b/d3/b54bd3e384731077ef302a6f46414c7f.gif" 
        />
      </div>
    );
  }

  const handleRemove = (itemId, itemName) => {
    Swal.fire({
      title: `Remove ${itemName}?`,
      text: "This product will be removed from your cart!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#064C50',
      confirmButtonText: 'Yes, remove it!',
      cancelButtonText: 'Cancel',
         background: 'url("https://i.pinimg.com/1200x/98/0c/90/980c9060eee95f0452f785b25503d506.jpg") no-repeat center center / cover',
    }).then((result) => {
      if (result.isConfirmed) {
        removeItem(itemId);
        Swal.fire({
          title: 'Removed!',
    text: `${itemName} has been removed from your cart.`,
    icon: 'success',
    background: 'url("https://i.pinimg.com/736x/74/03/1b/74031b1d413cd1d2922aeaa64b7452b1.jpg") no-repeat center center / cover',
    color: '#000000',
        }  )
      }
    })
  }

  return (
    <section className="basket">
        <h1 >Cart</h1>
    <div className='container cart mt-5'>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={item.id}>
              <th scope="row">{index + 1}</th>
              <td><img src={item.image} style={{width:"50px"}} alt={item.name} /></td>
              <td>{item.name}</td>
              <td>{(item.price * item.quantity).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</td>
              <td>
                <button 
                  className="btn btn-warning btn-sm" 
                  onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                >-</button>
                <span className="mx-2">{item.quantity}</span>
                <button 
                  className="btn btn-warning btn-sm" 
                  onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                >+</button>
              </td>
              <td>
                <button 
                  className="btn btn-danger btn-sm" 
                  onClick={() => handleRemove(item.id, item.name)}
                >X</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h4>
        Total: {cartTotal.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
      </h4>
    </div></section>
  );
};

export default Basket;
