import React from 'react';
import { Preloader } from 'react-materialize';
import './style.css';

export default function index() {
    return (
        <div className="middle-page">
            <Preloader size="big" color="teal" />
        </div>
    );
}
