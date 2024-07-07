import React from 'react';

const Button = (props) => {
    return (
        <button {...props} className={'Button ' + props.className}/>
    );

};

export default Button;