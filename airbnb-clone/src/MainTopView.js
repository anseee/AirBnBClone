import React, { Component } from 'react';
import './MainTopView.css';
import AirbnbLogo from './image/airbnbLogo.png';


class MainTopView extends Component {
    render() {
        return (
            <div className='MainTopView'>
                <MainTopNavi />
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

export default MainTopView;
