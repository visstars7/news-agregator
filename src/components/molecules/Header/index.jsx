import React from 'react'
import './Header.scss'
import newsLogo from '../../../assets/logos/news.svg'
import sun from '../../../assets/logos/sun.svg'
// import moon from '../../../assets/logos/moon.svg'
const Index = () => {
    return (
        <>
            <div className="w-full bg-white flex flex-row justify-between shadow-lg">
                <div className="p-5 text-right roboto-dark text-2xl flex"></div>
                <div className="p-5 text-right roboto-dark text-2xl flex"> 
                    <img src={newsLogo} alt="newspaper" className="w-6 mr-2"/> News
                </div>
                <span className="p-5 text-right roboto-dark text-2xl flex"> 
                    <img src={sun} alt="sun" style={{width:'30px',height:'30px'}}/>
                </span>
            </div>
        </>
    )
}

export default Index
