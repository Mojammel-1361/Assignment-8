import './Cart.css'
import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
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
    );
};

export default Cart;