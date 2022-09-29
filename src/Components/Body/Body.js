import './Body.css'

import React, { useEffect, useState } from 'react';

import Product from '../Product/Product';


const Body = () => {

    const [workouts, setWorkouts] = useState([]);

    useEffect( () => {
        fetch('data.json')
        .then(res=> res.json())
        .then(data => setWorkouts(data))
    }, []);
    return (
        <div className='body'>
            <div className="workout">
                <h2>Daily Life Workout</h2>
                <p>Select today Activities </p>
                <div className='cart'>
                {
                    workouts.map(product=><Product 
                            key={product.id}
                            
                            product={product}
                            ></Product>)
                }
                </div>
                
            </div>


            <div className="profile">
            <h3>profile part</h3>
            </div>
        </div>
    );
};

export default Body;