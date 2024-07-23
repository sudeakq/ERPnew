import React, { useEffect, useState } from 'react'
import { NewsTextContainer } from './NewsText.style'
import leftIcon from '../images/chevron-left-solid.svg'
import rightIcon from '../images/chevron-right-solid.svg'
import axios from 'axios';

function NewsText({page}) {

    const [postUserName,setPostUserName] = useState("Antonio Gallo");
    const [postDate,setPostDate] = useState("23 August 2024")
    const [currentPage,setCurrentPage] = useState("1")
    const [totalPage,setTotalPage] = useState("4")

    const [newsData,setNewsdata] = useState([]);

    

  return (
    <NewsTextContainer>
        <div className="text-container">
            <div className="title-data">
                {/* <img src="" alt="" className="picture" /> */}
                <div className="user-image">
                    photo
                </div>
                <h4 className='title-text' >posted by {postUserName} {postDate} </h4>
            </div>
            <p className="text-data">
                On monday 23 August there will be a presentation from project management regarding the theater platform. Please prepare the necessary documents.
            <br/><br/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            <br/><br/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p >
        </div>
        <div className="buttons-container poppins-extrabold">
        <img className="icon" src={leftIcon} />
        {/* left arrow icon */}
        {currentPage} / {totalPage}
        {/* right arrow icon */}
        <img className="icon" src={rightIcon} />
      </div>
    </NewsTextContainer>
  )
}

export default NewsText