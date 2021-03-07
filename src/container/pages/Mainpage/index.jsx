import React,{useEffect} from 'react'
import './Mainpage.scss';
import {Header,Category,Gap, Card} from '../../../components' 

const Index  = ()  =>  {

    useEffect(() => {
        document.title = "News"
    })

    return (
        <div className="App">
            <Header/>
            <Gap height="70px"/>
            <Category/>
            <Gap height="40px"/>
            <div className="flex flex-col items-center">
                <Card/> 
                <Card/> 
                <Card/> 
                <Card/> 
                <Card/> 
                <Card/> 
                <Card/> 
            </div>
        </div>
    );
}

export default Index;
