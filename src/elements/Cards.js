import React from 'react'

import PropTypes from 'prop-types';


export default function Cards(props) {
    const className = ['tiles-item']
    className.push(props.className)
    return (
        <div className={className.join(" ")}>
            <div className={` ${props.hasShadow ? "has-shadow" : ""}`}>
                {props.children}
            </div>
        </div>
    );
}

Cards.PropTypes = {
    hasShadow: PropTypes.bool,
    className: PropTypes.string

}