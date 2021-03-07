import React,{useEffect} from 'react'
import './Mainpage.scss';
import {Header,Category} from '../../../components' 

const Index  = ()  =>  {

    useEffect(() => {
        document.title = "News"
    })

    return (
        <div className="App">
            <Header/>
            <Category/>
        </div>
    );
}

export default Index;
