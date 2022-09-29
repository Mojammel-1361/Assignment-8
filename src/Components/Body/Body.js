import './Body.css'

import React, { useEffect, useState } from 'react';

import Product from '../Product/Product';
import Cart from '../Cart/Cart';


const Body = () => {

    const [workouts, setWorkouts] = useState([]);
    const [cart, setCart] = useState([]);
    

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
                <h2>Daily Life Routine</h2>
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
                <div className='question'>
                    <h1>Question</h1>
                    <h4>1. how does react work</h4>
                    <p>React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.React is a declarative, efficient, and flexible JavaScript library for building user interfaces. ‘V’ denotes the view in MVC. ReactJS is an open-source, component-based front end library responsible only for the view layer of the application. It is maintained by Facebook. A React application is made of multiple components, each responsible for rendering a small, reusable piece of HTML. Components can be nested within other components to allow complex applications to be built out of simple building blocks. A component may also maintain an internal state – for example, a TabList component may store a variable corresponding to the currently open tab.</p>
                    <h4>2. Difference between props and state</h4>
                    <p> <b>Props</b> The Data is passed from one component to another. It is Immutable (cannot be modified). Props can be used with state and functional components. Props are read-only.</p>
                    <p><b>State</b>The Data is passed within the component only. It is Mutable ( can be modified). State can be used only with the state components/class component. State is both read and write. </p>
                    <p>Props are used to pass data from one component to another.
                    The state is a local data storage that is local to the component only and cannot be passed to other components.
                    The this.setState property is used to update the state values in the component.</p>
                    <h4>3. useEffect what is used without data processing</h4>
                    <p>
                    Understanding how the useEffect Hook works is one of the most important concepts for mastering React today. If you have been working with React for several years, it is especially crucial to understand how working with useEffect differs from working with the lifecycle methods of class-based components. In fact, it is a wholesale shift in mindset!. With useEffect, you invoke side effects from within functional components, which is an important concept to understand in the React Hooks era. Working with the side effects invoked by the useEffect Hook may seem cumbersome at first, but you’ll eventually learn everything makes a lot of sense. What are effects, really? Examples are:

                    <b>Fetching data. </b>
                    <b>Reading from local storage. </b>
                    <b>Registering and deregistering event listeners. </b>
                    Registering and deregistering event listeners
                    React’s effects are a completely different animal than the lifecycle methods of class-based components. The abstraction level differs, too. I aim to provide a guide that both newbies and experienced React developers will find valuable and informative. Throughout the article, I provide many code examples to explain crucial concepts. These code snippets are part of my companion GitHub project.
                    </p>
                </div>
            </div>


            <div className="profile">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Body;