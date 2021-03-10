import React,{useEffect} from 'react'
import './Header.scss'
import newsLogo from '../../../assets/logos/news.svg'
import sun from '../../../assets/logos/sun.svg'
// import moon from '../../../assets/logos/moon.svg'
const Index = () => {
    useEffect(() => {
        const root = document.querySelector("#root")
        root.classList.add("dark")
    },[])
    return (
        <>
            <div className="fixed w-full bg-white flex flex-row justify-between shadow-lg dark:bg-dark">
                <div className="p-5 text-right roboto-dark text-2xl flex"></div>
                <div className="p-5 text-right roboto-dark text-2xl flex dark:text-white"> 
                    <img src={newsLogo} alt="newspaper" className="w-6 mr-2 dark:filter-white"/> News
                </div>
                <span className="p-5 text-right roboto-dark text-2xl flex"> 
                    <img className="dark:filter-white" src={sun} alt="sun" style={{width:'30px',height:'30px'}}/>
                </span>
            </div>
        </>
    )
}

export default Index
