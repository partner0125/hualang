import React from 'react';
import { Link } from 'react-router';
/*import $ from 'jquery';*/


export default class AlbumList extends React.Component {
  
  render() {
    return (
      /*<div>
        <Link to='/section/1'><span>跳转到画廊1</span></Link><br />
        <Link to='/section/2'><span>跳转到画廊2</span></Link>
      </div>*/
      <div>
        <div className="container-div">
          <div className="header-div">
            <div className="header-container">
              <div className="head-lf"></div>
              <div className="head-rt">
                <ul>
                  <li><a href="#">相册首页</a></li>
                  <li><a href="#">人物</a></li>
                  <li><a href="#">壁纸</a></li>
                  <li><a href="#">风景</a></li>
                  <li><a href="#">宠物</a></li>
                  <li><a href="#">分类</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="crumb">
            <div className="crumb_div">
              <a href="#">首页</a>
              <span className="gt">&gt;</span>
              <span>分类</span>
            </div>
          </div>
          <div className="main">
            <div className="classify">
              <div className="classify_span">
                <span>所有分类</span>
              </div>
              <div className="classify_ul">
                <ul>
                  <li>
                    <a className="cur" href="#">风景</a>
                    <ul style={{ display: 'none' }}>
                      <li><a href="#">花海</a></li>
                      <li><a href="#">空山</a></li>
                      <li><a href="#">冰雪</a></li>
                      <li><a href="#">沿海印记</a></li>
                      <li><a href="#">平凡之路</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">人物</a>
                    <ul style={{ display: 'none' }}>
                      <li><a href="#">校花</a></li>
                      <li><a href="#">森林系女孩</a></li>
                      <li><a href="#">女神</a></li>
                      <li><a href="#">小鲜肉</a></li>
                      <li><a href="#">长腿男神</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">卡通</a>
                    <ul style={{ display: 'none' }}>
                      <li><a href="#">泰迪</a></li>
                      <li><a href="#">麦拉风</a></li>
                      <li><a href="#">辛巴狗</a></li>
                      <li><a href="#">CC猫</a></li>
                      <li><a href="#">阿狸</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">宠物</a>
                    <ul style={{ display: 'none' }}>
                      <li><a href="#">喵星人</a></li>
                      <li><a href="#">天然呆</a></li>
                      <li><a href="#">Q星人</a></li>
                      <li><a href="#">Dear Deer</a></li>
                      <li><a href="#">昆虫记</a></li>
                      <li><a href="#">飞鸟</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">静物</a>
                    <ul style={{ display: 'none' }}>
                      <li><a href="#">小清新</a></li>
                      <li><a href="#">文艺</a></li>
                      <li><a href="#">花草集</a></li>
                      <li><a href="#">书香一瓣</a></li>
                      <li><a href="#">贝太厨房</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div className="main-rt">
              <div className="album_box">
                <div className="new_album">
                  <h2>
                    <a href="#">所有相册</a> 最新相册
                  </h2>
                </div>
                <div className="new_album_box">
                  <Link to='/section/1'>
                    <div className="box-album album1">
                      <div className="item">
                        <a href="#">
                          <img src="images/1.jpg" />
                        </a>
                      </div>
                      <div className="item-span">
                        <a href="#">最美的风景</a>
                      </div>
                      <p>2015-01-12, 22张照片</p>
                    </div>
                  </Link>
                  <Link to='/section/1'>
                    <div className="box-album album2">
                      <div className="item">
                        <a href="#">
                          <img src="images/2.jpg" />
                        </a>
                      </div>
                      <div className="item-span">
                        <a href="#">最美的风景</a>
                      </div>
                      <p>2015-01-12, 22张照片</p>
                    </div>
                  </Link>
                  <Link to='/section/1'>
                    <div className="box-album album3">
                      <div className="item">
                        <a href="#">
                          <img src="images/3.jpg" />
                        </a>
                      </div>
                      <div className="item-span">
                        <a href="#">最美的风景</a>
                      </div>
                      <p>2015-01-12, 22张照片</p>
                    </div>
                  </Link>
                  <Link to='/section/1'>
                    <div className="box-album album4">
                      <div className="item">
                        <a href="#">
                          <img src="images/4.jpg" />
                        </a>
                      </div>
                      <div className="item-span">
                        <a href="#">最美的风景</a>
                      </div>
                      <p>2015-01-12, 22张照片</p>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="photo_box">
                <div className="new_photo">
                  <h2>
                    最新照片
                  </h2>
                </div>
                <div className="new_photo_box">
                  <Link to='/section/1'>
                    <div className="box-album album1">
                      <div className="item">
                        <a href="#">
                          <img src="images/1.jpg" />
                        </a>
                      </div>
                      <div className="item-span">
                        <a href="#">最美的风景</a>
                      </div>
                      <p>2015-01-12</p>
                    </div>
                  </Link>
                  <Link to='/section/1'>
                    <div className="box-album album2">
                      <div className="item">
                        <a href="#">
                          <img src="images/2.jpg" />
                        </a>
                      </div>
                      <div className="item-span">
                        <a href="#">最美的风景</a>
                      </div>
                      <p>2015-01-12</p>
                    </div>
                  </Link>
                  <Link to='/section/1'>
                    <div className="box-album album3">
                      <div className="item">
                        <a href="#">
                          <img src="images/3.jpg" />
                        </a>
                      </div>
                      <div className="item-span">
                        <a href="#">最美的风景</a>
                      </div>
                      <p>2015-01-12</p>
                    </div>
                  </Link>
                  <Link to='/section/1'>
                    <div className="box-album album4">
                      <div className="item">
                        <a href="#">
                          <img src="images/4.jpg" />
                        </a>
                      </div>
                      <div className="item-span">
                        <a href="#">最美的风景</a>
                      </div>
                      <p>2015-01-12</p>
                    </div>
                  </Link>
                  <Link to='/section/1'>
                    <div className="box-album album1">
                      <div className="item">
                        <a href="#">
                          <img src="images/1.jpg" />
                        </a>
                      </div>
                      <div className="item-span">
                        <a href="#">最美的风景</a>
                      </div>
                      <p>2015-01-12</p>
                    </div>
                  </Link>
                  <Link to='/section/1'>
                    <div className="box-album album2">
                      <div className="item">
                        <a href="#">
                          <img src="images/2.jpg" />
                        </a>
                      </div>
                      <div className="item-span">
                        <a href="#">最美的风景</a>
                      </div>
                      <p>2015-01-12</p>
                    </div>
                  </Link>
                  <Link to='/section/1'>
                    <div className="box-album album3">
                      <div className="item">
                        <a href="#">
                          <img src="images/3.jpg" />
                        </a>
                      </div>
                      <div className="item-span">
                        <a href="#">最美的风景</a>
                      </div>
                      <p>2015-01-12</p>
                    </div>
                  </Link>
                  <Link to='/section/1'>
                    <div className="box-album album4">
                      <div className="item">
                        <a href="#">
                          <img src="images/4.jpg" />
                        </a>
                      </div>
                      <div className="item-span">
                        <a href="#">最美的风景</a>
                      </div>
                      <p>2015-01-12</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
