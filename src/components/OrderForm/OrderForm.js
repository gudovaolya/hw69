import React from 'react';
import axios from 'axios';
import './OrderForm.css';
import withLoader from "../../hoc/withLoader/withLoader";

const OrderForm = (props) => {
    return (
        <div className="form">
            <form>
                <div className="form-row">
                    <label>Ваше имя:</label>
                    <input type="text" name="name" value={props.name} onChange={props.change}/>
                </div>
                <div className="form-row">
                    <label>Ваш адрес:</label>
                    <input type="text" name="address" value={props.address} onChange={props.change}/>
                </div>
                <div className="form-row">
                    <label>Ваш номер телефона:</label>
                    <input type="text" name="phone" value={props.phone} onChange={props.change}/>
                </div>
                <button className="btn" onClick={props.ordered}>Coздать заказ</button>
            </form>
        </div>

    )
};

export default withLoader(OrderForm, axios);