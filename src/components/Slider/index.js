import React from 'react';
import * as classes from './style.module.css';

export function Slider(props) {
    let classList;
    if (props.additionalClasses) {
        classList = props.additionalClasses.concat(classes.SlideContainer).join(' ');
    } else {
        classList = classes.SlideContainer;
    }
    return (
        <div className={classList} style={props.style}>
            {props.children}
        </div>
    );
}