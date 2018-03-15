import React, {Fragment} from 'react';
import './Loader.css';
import  Backdrop from '../Backdrop/Backdrop';

const Loader = (props) => (
    <Fragment>
        <Backdrop show={props.show}/>
        <div className="overlay-loader">
            <div className="loader">
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
            </div>
        </div>
    </Fragment>
);

export default Loader;