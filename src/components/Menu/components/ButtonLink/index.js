import React from 'react';

const Menu = (props) => {
    console.log(props)
    return(
        <a href={props.href} className={props.className}>
            {props.children}
        </a>
    )
}

export default Menu