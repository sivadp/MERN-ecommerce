import React from 'react';
import { Link } from 'react-router-dom';
import {ShoppingCart, Storefront} from 'phosphor-react';
import './navbar.css';

export const Navbar=()=>{
    return(
        <div className='navbar'>
            <div className='links'>
                <Link to='/'>
                    <Storefront size={32}></Storefront>
                </Link>
                <Link to='/cart'>
                    <ShoppingCart size={32}></ShoppingCart>
                </Link>
            </div>
        </div>
    )
}