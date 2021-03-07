import React from 'react'
import './category.scss'
const Index = () => {
    return (
        <div className="overflow-auto pt-3 px-1  h-12" id="category">
            <a href="religion">Religion</a>
            <a href="Buisness">Buisness</a>
            <a href="Technology">Technology</a>
            <a href="Military">Military</a>
            <a href="Education"  className="active">Education</a>
            <a href="Politican">Politican</a>
            <a href="Lawyers">Lawyers</a>
            <a href="Sport">Sport</a>
        </div>
    )
}

export default Index
