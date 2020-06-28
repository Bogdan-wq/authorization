import React from 'react'
import NewsItem from "../news-item";
import image1 from '../images/1.jpg'
import image2 from '../images/2.jpg'
import image3 from '../images/3.jpg'

const News = () => {
    return (
        <div className="d-flex justify-content-center">
            <div className="col-8">
                <h2>News</h2>
                <NewsItem image={image1}/>
                <NewsItem image={image2}/>
                <NewsItem image={image3}/>
            </div>
        </div>
    )
}

export default News;