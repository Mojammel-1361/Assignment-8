import './Cart.css'
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Cart = (props) => {
    const {cart} = props
    let total = 0;
    for(const product of cart){
        total = total + product.time;
    }
    
        const notify = () => toast("Wow Toastify part Done");
    
    return (
        <div>
            <div className='myInfo'>
                <h2>Mojammel Haque</h2>
                <p>Daley workout time</p>
                <div className='myDetects'>
                <h3>Hight: 6 fit</h3>
                <h3>weight: 66 kg </h3>
                <h3>Age: 25</h3>
                </div>
            </div>
            <div className='brake'>
                <h2>Add a Brake</h2>
                <button>20s</button>
                <button>30s</button>
                <button>40s</button>
                <button>50s</button>
            
            </div>
            <div className='activity'>
            <h2>Working Time</h2>
            <h3>Activity Time: {total} min </h3>
            <h3>Brake Time: 0</h3>
            </div>
            <div>
            <button onClick={notify} className='btnActive'>Activity Done</button>
            <ToastContainer />
            </div>
            
        </div>
    );
};

export default Cart;