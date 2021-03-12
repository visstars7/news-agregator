import React from 'react'
import Button from '../../atoms/Button/index'
import iconPlane from '../../../assets/logos/icon-plane.svg'

const index = (props) => {
    return (
        <div className="bg-white w-11/12 mb-10 p-3 rounded-md flex flex-row justify-between shadow-lg dark:bg-darkCard">
            <div className="flex flex-col">
                <span className="roboto-gray text-sm mb-2 dark:text-white">
                    {props.title}
                </span>
                <span className="text-xs font-normal mb-3 text-gray-500 pr-3 dark:text-white">
                    {JSON.stringify(props.content).substr(1,76)}
                </span>
                <span style={{fontSize:"10px"}} className="font-normal text-gray-500 dark:text-white">
                    @{props.author}  {JSON.stringify(props.date).substr(1,10)} 
                </span>
                <span className="mt-3 mb-3">
                    <Button
                        className="p-2 w-7/12 h-15 rounded text-white text-sm flex z-0"
                        style={{backgroundColor:"#5AB0FF"}}
                        title="Read More"
                        href={props.url}
                        target="_BLANK"
                        logo={iconPlane}
                    />
                </span>
            </div>
            <div className="my-auto" style={{width:'75%'}} >
                <img className="rounded justify-center align-middle" src={props.urlToImage} alt="hackathon"/>
            </div>
        </div>
    )
}

export default index
