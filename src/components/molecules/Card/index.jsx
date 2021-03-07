import React from 'react'
import Button from '../../atoms/Button/index'

const index = () => {
    return (
        <div className="bg-white w-11/12 mb-10 p-3 rounded-md flex flex-row justify-between shadow-lg">
            <div className="flex flex-col">
                <span className="roboto-gray text-sm mb-2">
                    Microsoft has published where indonesia is weirdest citizen in south asian
                </span>
                <span className="text-xs font-normal mb-3 text-gray-500 pr-3">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. E..
                </span>
                <span style={{fontSize:"10px"}} className="font-normal text-gray-500">
                    @Owngabriel  11 jan 2020 
                </span>
                <span className="mt-3 mb-3">
                    <Button className="p-2 w-5/12 h-15 rounded text-white text-sm" style={{backgroundColor:"#5AB0FF"}} title="Read More"/>
                </span>
            </div>
            <div className="my-auto">
                <img className="rounded justify-center align-middle" src="https://i.postimg.cc/j2s8qZMz/download.png" alt="hackathon"/>
            </div>
        </div>
    )
}

export default index
