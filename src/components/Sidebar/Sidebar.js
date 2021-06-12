import React from 'react';
import avatar from '../../images/Ellipse 11.png';
import './Sidebar.css'
const Sidebar = ({ isHorizontal, setIsHorizontal, setFeedbackOpen, feedbackOpen }) => {
    return (
        <div className='py-10 bg-blue sidebar shadow-2xl'>
            <div className='m-5 flex gap-5 p-2 bg-white'>
                <img src={avatar} alt="" />
                <div
                >
                    <h1>Hi reader</h1>
                    <p>Here your news</p>
                </div>
            </div>
            <div className='m-5  p-2 bg-white text-center'>
                <h1 className='text-center text-xl my-1 font-bold'>View Toggle</h1>
                <div
                    className='flex text-2xl bg-gray-200'>

                    <div
                        onClick={() => setIsHorizontal(false)}
                        className={
                            isHorizontal ? 'w-1/2 v p-3 rounded border-gray-200' : 'w-1/2 v p-3 rounded border-gray-200 active'
                        }>
                        <i className=" fas fa-list"></i>
                    </div>
                    <div
                        onClick={() => setIsHorizontal(true)}
                        className={
                            isHorizontal ? 'w-1/2 active h p-3 rounded border-gray-200' : 'w-1/2 h p-3 rounded border-gray-200 '
                        }>
                        <i className="far fa-list-alt"></i>
                    </div>
                </div>
            </div>
            <div className='m-5  p-2 bg-white'>
                <h1 className='text-xl text-center'>
                    Have Feedback?
                </h1>
                <p
                    onClick={() => setFeedbackOpen(!feedbackOpen)}
                    className='active mx-5 my-2 rounded-md p-1 text-center hover:opacity-75'>
                    We're Listinig!
                </p>

            </div>
        </div>
    );
};

export default Sidebar;