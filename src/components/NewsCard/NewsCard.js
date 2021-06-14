import React from 'react';
import close from '../../images/close.png'
import './NewsCard.css'
const NewsCard = ({ data, isHorizontal, newsRemover }) => {
    const { title, summary, published, image, id } = data;
    return (
        <div className={isHorizontal ? 'horizontal_card m-5 news_card p-5' : 'vertical_card m-4 news_card p-5'}>
            {
                image &&
                <img className='title_img' src={image} alt="" />
            }
            <div>
                <p className='m-1 text font-bold'>
                    {
                        title
                    }
                </p>
                <p className='m-1 summary'>
                    {summary}
                </p>
                <p className='m-1 text-sm publish  text-gray-600 '>
                    {published}
                </p>

            </div>
            <img
                onClick={() => newsRemover(id)}
                className='floating_close' src={close} alt="" />

        </div>
    );
};

export default NewsCard;