import React from 'react';
import './Product.css'



const Product = (props) => {

    const {name, picture, time} =props.product;
    
    return (
        <div  className='product'>
            <img src={picture} alt="" />
            <div className='cartInfo'>
            <h2> {name}</h2>
            <h4> {time} min</h4>
            </div>
            <button onClick={() =>props.handleAddToCart(props.product)} className='btnCart'>
                <p>Add to list</p>
            </button>
        </div>
    );
};

export default Product;