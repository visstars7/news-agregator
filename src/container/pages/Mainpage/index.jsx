import React,{useEffect} from 'react'
import './Mainpage.scss';
import {Header} from '../../../components' 

const Index  = ()  =>  {

    useEffect(() => {
        document.title = "News"
    })

    return (
        <div className="App">
            <Header/>
        </div>
    );
}

export default Index;
