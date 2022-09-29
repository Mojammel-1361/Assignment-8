import './Body.css'

import React, { useEffect, useState } from 'react';

import Product from '../Product/Product';


const Body = () => {

    const [workouts, setWorkouts] = useState([]);
    const [cart, setCart] = useState([]);
    console.log(workouts);

    useEffect( () => {
        fetch('data.json')
        .then(res=> res.json())
        .then(data => setWorkouts(data))
        
    }, []);
    
    const handleAddToCart = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart);
    };
    return (
        <div className='body'>
            <div className="workout">
                <h2>Daily Life Working routing</h2>
                <p>Select today Activities </p>
                <div className='cart'>
                {
                    workouts.map(product=><Product 
                            key={product.id}
                            product={product}
                            handleAddToCart ={handleAddToCart}
                            ></Product>)
                }
                </div>
                
            </div>


            <div className="profile">
            <div className='myInfo'>
                <h2>Mojammel Haque</h2>
                <div className='myDetects'>
                <h3>Hight: 6 fit</h3>
                <h3>weight: 66 kg </h3>
                <h3>age: 25</h3>
                </div>
            </div>
            <p>time: {cart.length}</p>
            </div>
        </div>
    );
};

export default Body;