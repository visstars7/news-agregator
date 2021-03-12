import React,{useState} from 'react'
import './Header.scss'
import newsLogo from '../../../assets/logos/news.svg'
import sun from '../../../assets/logos/sun.svg'
import moon from '../../../assets/logos/moon.svg'
const Index = () => {

    const [theme,setTheme]  = useState(false)
    const [icon,setIcon]  = useState(moon)

    const onChangeTheme = () => {
        if(theme){
            const root = document.querySelector("#root")
            const tagIcon = document.querySelector("#icon-darkmode")
            tagIcon.setAttribute('src',icon)
            root.classList.remove("dark")
            setIcon(moon)
            setTheme(false)
        }else{
            const root = document.querySelector("#root")
            const tagIcon = document.querySelector("#icon-darkmode")
            root.classList.add("dark")
            tagIcon.setAttribute('src',icon)
            setIcon(sun)
            setTheme(true)
        }
    }

    return (
        <>
            <div className="fixed w-full bg-white flex flex-row justify-between shadow-lg dark:bg-dark z-50">
                <div className="p-5 text-right roboto-dark text-2xl flex"></div>
                <div className="p-5 text-right roboto-dark text-2xl flex dark:text-white"> 
                    <img src={newsLogo} alt="newspaper" className="w-6 mr-2 dark:filter-white"/> News
                </div>
                <span className="p-5 text-right roboto-dark text-2xl flex"> 
                    <img className="dark:filter-white" src={sun} id="icon-darkmode" alt="sun" style={{width:'30px',height:'30px'}} onClick={() => onChangeTheme()} />
                </span>
            </div>
        </>
    )
}

export default Index
