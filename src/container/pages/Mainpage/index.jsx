import React,{useEffect,useState} from 'react'
import './Mainpage.scss'
import {Header,Category,Gap, Card,CardShadow} from '../../../components' 
import Favicon from 'react-favicon'
import API from '../../../services'

const Index  = ()  =>  {

    const [news,setNews] = useState([])

    const handleOnClick = async (value) => {
        await API.GET_FILTERED_DATA(value)
        .then(res => {
            setNews(res.data.articles)
        })
        .catch(err => {
            setNews(err)
        })
    }

    const getNews = async () => {
        await API.GET_NEWS()
            .then(res => {
                setNews(res.data.articles)
            })
            .catch(err => {
                setNews(err)
            })
    }

    useEffect(() => {
        document.title = "News"
        getNews()
    },[])

    useEffect(() => {
        console.log(news)
    })

    return (
        <div className="App dark:bg-dark duration-500">
            <Favicon url="https://i.postimg.cc/9RLyyvHQ/attachment-124979000.jpg"/>
            <Header/>
            <Gap height="70px"/>
            <Category onClick={handleOnClick}/>
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
