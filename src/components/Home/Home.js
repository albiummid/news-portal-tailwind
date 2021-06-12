import axios from 'axios';
import React, { useEffect, useState } from 'react';
import NewsCard from '../NewsCard/NewsCard';
import Sidebar from '../Sidebar/Sidebar';
import './Home.css'
const Home = () => {
    const [newsData, setNewsData] = useState([]);
    const [isHorizontal, setIsHorizontal] = useState(false);
    const [feedbackOpen, setFeedbackOpen] = useState(false);
    useEffect(() => {
        axios.get('https://api.first.org/data/v1/news')
            .then(data => setNewsData(data.data.data))
    }, []);
    console.log(newsData);
    const newsRemover = (id) => {
        const newArray = newsData.filter(data => data.id !== id);
        setNewsData(newArray);
    }
    return (
        <div className=' flex border-aqua border m-auto'>
            <Sidebar
                setIsHorizontal={setIsHorizontal}
                isHorizontal={isHorizontal}
                feedbackOpen={feedbackOpen}
                setFeedbackOpen={setFeedbackOpen}
            />
            <div className={isHorizontal ? 'news_container horizontal p-10' : 'news_container vertical p-10'}>

                {
                    newsData?.map(data => (
                        <NewsCard
                            key={data.id}
                            data={data}
                            isHorizontal={isHorizontal}
                            newsRemover={newsRemover}
                        />
                    ))
                }

            </div>
        </div>
    );
};

export default Home;