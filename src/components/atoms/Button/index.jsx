import React from 'react'

const index = ({title,...rest}) => {
    return (
        <>
            <a {...rest}>{title}</a>
        </>
    )
}

export default index
