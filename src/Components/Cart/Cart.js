import './Cart.css'
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import img from '../img/my.png' 

const Cart = (props) => {
    const {cart} = props
    let total = 0;
    for(const product of cart){
        total = total + product.time;
    }
    
    const notify = () => toast("Wow Toastify part Done");

    const getLocalItems = () =>{
        let list = localStorage.getItem('list');
        
        if(list){
            return JSON.parse(localStorage.getItem('list'));
        }
        else{
            return 0;
        }
    }
        const [brake, setBrake] = useState(getLocalItems());
        
    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(brake))
    }, [brake]);
    
    
    
    const brakeTime1 = () =>{
        let brake = 5;
        setBrake(brake);
    }
    const brakeTime2 = () =>{
        let brake = 3;
        setBrake(brake);
    }
    const brakeTime3 = () =>{
        let brake = 7;
        setBrake(brake);
    }
    const brakeTime4 = () =>{
        let brake = 2;
        setBrake(brake);
    }
    

    return (
        <div>
            <div className='myInfo'>
                
                <div className=''>
                    <img src={img} alt="" />
                <h2>Mojammel Haque</h2>
                </div>
                <p>Every morning, look in the mirror and affirm positive words into your life...</p>
                <div className='myDetects'>
                <h3>Hight: 6 fit</h3>
                <h3>weight: 66 kg </h3>
                <h3>Age: 25</h3>
                </div>
            </div>
            <div className='brake'>
                <h2>Add A Brake</h2>
                <button onClick={brakeTime1}>5 min</button>
                <button onClick={brakeTime2}>3 min</button>
                <button onClick={brakeTime3}>7 min</button>
                <button onClick={brakeTime4}>2 min</button>
            
            </div>
            <div className='activity'>
            <h2>Working Time</h2>
            <h3>Activity Time: {total} min </h3>

            <h3>Brake Time: {brake} min</h3>
            </div>
            <div>
            <button onClick={notify} className='btnActive'>Activity Done</button>
            <ToastContainer />
            </div>
            
        </div>
    );
};

export default Cart;