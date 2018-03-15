import React from 'react';
import './Dish.css';

const Dish = (props) => {
    return (
        <div className="dish">
            <div className="dish-pic">
                <img src={props.picture} alt=""/>
            </div>
           <div className="dish-info">
               <h4>{props.title}</h4>
               <p>Price: {props.price} KGS</p>
               <button className="btn" onClick={props.added}>Add to cart</button>
           </div>
        </div>
    )
};

export default Dish;