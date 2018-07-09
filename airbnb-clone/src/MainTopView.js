import React, { Component } from 'react';
import './MainTopView.css';
import AirbnbLogo from './image/airbnbLogo.png';
import SearchIcon from './image/search.png';

class MainTopView extends Component {
    render() {
        return (
            <div className='MainTopView'>
                <MainTopNavi />
                <MainTopSpace />
                <MainTopTextAndSearchBar />
            </div>     
        );
    }
}

function MainTopNavi() {
    return (
        <nav className='MainTopView__Navi'>
            <div className='MainTopView__Navi__Logo'><a href=""><img src={AirbnbLogo} /></a></div>
            <ul className="MainTopView__Navi__Text">
                <li><a href="" class="MainTopView__Navi__Main__Text__Links">호스팅하기</a></li>
                <li><a href="" class="MainTopView__Navi__Main__Text__Links">여행크레딧 받기</a></li>
                <li><a href="" class="MainTopView__Navi__Main__Text__Links">도움말</a></li>
                <li><a href="" class="MainTopView__Navi__Main__Text__Links">회원가입</a></li>
                <li><a href="" class="MainTopView__Navi__Main__Text__Links__Login">로그인</a></li>
            </ul>
        </nav> 
    ) 
}

function MainTopSpace() {
    return (
       <div className="MainTopSpace">
       </div> 
    )
}

function MainTopTextAndSearchBar() {
    return (
        <div className="MainTopTextAndSearchBar">
            <div className="MainTopTextAndSearchBar__Text">
            전 세계의 특색 있는 숙소와 트립을 <br/>클론하는중
            </div>
            <div className="MainTopTextAndSearchBar__SearchBar">
                <div className="MainTopTextAndSearchBar__SearchBar__Center__Align">
                    <img src={SearchIcon} className="MainTopTextAndSearchBar__SearchBar__Icon"/>
                    <input type="text" placeholder="&ldquo;멕시코시티&rdquo;을(를) 검색해보세요" className="MainTopTextAndSearchBar__SearchBar__Input" />
                </div>
            </div>
        </div>
    )
}
export default MainTopView;
