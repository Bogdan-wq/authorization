import React from 'react'
import './news-item.scss'


const NewsItem = ({image}) => {
    return (
        <div className="card flex-row mt-3">
            <div className="card-image col-5">
                <img src={image} alt="News image"/>
            </div>
            <div className="card-body">
                <h4 className="card-title">Sed augue lacus viverra</h4>
                <div className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec ultrices dui sapien eget mi. Elit sed vulputate mi sit amet.
                </div>
            </div>
        </div>
    )
}

export default NewsItem;