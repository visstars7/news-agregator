import React from 'react'

const index = () => {
    return (
        <div className="animate-pulse bg-white w-11/12 mb-10 p-3 rounded-md flex flex-row justify-between shadow-lg">
            <div className="flex flex-col">
                <div className="w-40 mt-5 mr-5 h-3 bg-gray-300 rounded"></div>
                <div className="w-28 mt-2 mr-5 h-3 bg-gray-300 rounded"></div>
                <div className="flex flex-row">
                    <div className="w-20 mt-2 mr-2 h-3 bg-gray-300 rounded"></div>
                    <div className="w-16 mt-2 h-3 bg-gray-300 rounded"></div>
                </div>
                <div className="w-20 mt-5 mr-5 h-6 bg-gray-300 rounded"></div>
            </div>
            <div className="my-auto">
               <div className="w-32 mr-3 h-32 bg-gray-300 rounded"></div>
            </div>
        </div>
    )
}

export default index
