import React,{useEffect} from 'react'
import './Mainpage.scss';
import {Header,Category,Gap, Card,CardShadow} from '../../../components' 
import Favicon from 'react-favicon';

const Index  = ()  =>  {

    useEffect(() => {
        document.title = "News"
    },[])

    return (
        <div className="App dark:bg-dark">
            <Favicon url="https://i.postimg.cc/9RLyyvHQ/attachment-124979000.jpg"/>
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
                <CardShadow/> 
            </div>
        </div>
    );
}

export default Index;
