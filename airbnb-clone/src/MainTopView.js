import React, { Component } from 'react';
import './MainTopView.css';
import AirbnbLogo from './image/airbnbLogo.png';


class MainTopView extends Component {
    render() {
        return (
            <div className='MainTopView'>
                <MainTopImage />
                <MainTopNavi />
            </div>     
        );
    }
}

class MainTopImage extends Component {
    images = [
       'http://money-tourism.gr/wp-content/uploads/2017/11/family-beach.jpg',
       'https://i.ytimg.com/vi/GygcPFfi440/maxresdefault.jpg',
       'https://kr.best-wallpaper.net/wallpaper/2560x1600/1506/Japan-girl-kimono-music_2560x1600.jpg',
       'https://www.intrepidtravel.com/adventures/wp-content/uploads/2018/02/Intrepid-Travel-Canada_Jasper_Athabasca-River_Cycling_13.jpg'
    ];

    render() {
        return (
            <div className="MainTopImage">
                <img src={this.images[0]}/>     
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
