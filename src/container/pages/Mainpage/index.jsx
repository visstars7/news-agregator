import React,{useEffect,useState} from 'react'
import './Mainpage.scss'
import {Header,Category,Gap, Card,CardShadow} from '../../../components' 
import Favicon from 'react-favicon'
import API from '../../../services'

const Index  = ()  =>  {

    const [news,setNews] = useState([])
    const [isError,setError] = useState(false)
    const [isLoading,setLoading] = useState(false)

    const handleOnClick = async (value) => {
        setLoading(false)
        await API.GET_FILTERED_DATA(value)
        .then(res => {
            setNews(res.data.articles)
        })
        .catch(err => {
            setError(true)
        })
        setLoading(true)
    }

    const getNews = async () => {
        await API.GET_NEWS()
            .then(res => {
                setNews(res.data.articles)
            })
            .catch(err => {
                setError(true)
            })
        setLoading(true)    
    }

    useEffect(() => {
        document.title = "News"
        getNews()
    },[])

    if(!isLoading){
        return (
            <div className="App dark:bg-dark duration-500">
                <Favicon url="https://i.postimg.cc/9RLyyvHQ/attachment-124979000.jpg"/>
                <Header/>
                <Gap height="70px"/>
                <Category onClick={handleOnClick}/>
                <Gap height="40px"/>
                <div className="flex flex-col items-center">
                    <CardShadow/> 
                    <CardShadow/> 
                    <CardShadow/> 
                    <CardShadow/> 
                    <CardShadow/> 
                    <CardShadow/> 
                </div>
            </div>
        );
    }

    if(isError){
        return (
            <div className="App dark:bg-dark duration-500">
                <Favicon url="https://i.postimg.cc/9RLyyvHQ/attachment-124979000.jpg"/>
                <Header/>
                <Gap height="70px"/>
                <Category onClick={handleOnClick}/>
                <Gap height="40px"/>
                <div className="flex flex-col items-center" style={{height:'100vh'}}>
                    <span className="roboto text-red-700 uppercase text-2xl">Error While Fetching Data</span>
                    <span className="roboto text-red-600 uppercase text-md">Too Many Request, Please Stands For 24H</span>
                </div>
            </div>
        );
    }

    return (
        <div className="App dark:bg-dark duration-500">
            <Favicon url="https://i.postimg.cc/9RLyyvHQ/attachment-124979000.jpg"/>
            <Header/>
            <Gap height="70px"/>
            <Category onClick={handleOnClick}/>
            <Gap height="40px"/>
            <div className="flex flex-col items-center">
                {
                    news.map((item) =>(
                        <Card

                            id={item.title}
                            title={item.title}
                            content={item.description}
                            author={item.author}
                            url={item.url}
                            date={item.publishedAt}
                            urlToImage={item.urlToImage}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default Index;
