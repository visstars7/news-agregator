import React from 'react'

const index = ({logo,title,...rest}) => {
    return (
        <>
            <a {...rest}>
                <img className="mr-3" style={{width:'20px',filter: 'brightness(0) invert(1)'}}src={logo} alt="icon"/>{title}
            </a>
        </>
    )
}

export default index
