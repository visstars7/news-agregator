import React from 'react'
import './category.scss'
const Index = (props) => {

    const handleOnClick = (value) => {
        props.onClick(value)
    }

    return (
        <div className="overflow-auto pt-3 px-1  h-12" id="category">
            <a onClick={() => handleOnClick('agama')}>Religion</a>
            <a onClick={() => handleOnClick('bisnis')}>Business</a>
            <a onClick={() => handleOnClick('teknologi')}>Technology</a>
            <a onClick={() => handleOnClick('militer')}>Military</a>
            <a onClick={() => handleOnClick('edukasi')} >Education</a>
            <a onClick={() => handleOnClick('politik')}>Politican</a>
            <a onClick={() => handleOnClick('jokowi')}>Lawyers</a>
            <a onClick={() => handleOnClick('olahraga')}>Sport</a>
        </div>
    )
}

export default Index
