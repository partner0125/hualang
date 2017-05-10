import React from 'react';
import { Link } from 'react-router';
import Imgpop from './Imgpop';

export default class AlbumList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgOpen: false,
      imguri: ''
    }
    this.handleShowImg = this.handleShowImg.bind(this);
  }

  handleShowImg(imguri) {
    this.setState({ imguri, imgOpen: !this.state.imgOpen });
  }

  render() {
    return (
      <div>
        <div className="container-div">
          <Imgpop imgOpen={this.state.imgOpen}
            handleShowImg={this.handleShowImg}
            imguri={this.state.imguri}
          />
          <div className="header-div">
            <div className="header-container">
              <ul>
                <li><a href="#" className="active-li">相册首页</a></li>
                <li><a href="#">人物</a></li>
                <li><a href="#">壁纸</a></li>
                <li><a href="#">风景</a></li>
                <li><a href="#">宠物</a></li>
                <li><a href="#">分类</a></li>
              </ul>
            </div>
          </div>
          <div className="crumb_wrap">
            <div className="crumb">
              <div className="crumb_div">
              </div>
            </div>
          </div>
          <div className="main_wrap">
            <div className="main">
              <div className="album_box">
                <div className="new_album">
                  <h2>
                    <a href="#">所有相册</a> 最新相册
                  </h2>
                </div>
                <div className="new_album_box">
                  <Link to='/section/1'>
                    <div className="box-album" onClick={this.handleShowImg}>
                      <div className="item">
                        <img src="images/img1/20.jpg" />
                      </div>
                      <div className="item-span">
                        沿海印记
                      </div>
                      <p>2017-03-12, 20张照片</p>
                    </div>
                  </Link>
                  <Link to='/section/2'>
                    <div className="box-album" onClick={this.handleShowImg}>
                      <div className="item">
                        <img src="images/img2/MG7.jpg" />
                      </div>
                      <div className="item-span">
                        绿色美景
                      </div>
                      <p>2017-04-05, 8张照片</p>
                    </div>
                  </Link>
                  <Link to='/section/3'>
                    <div className="box-album" onClick={this.handleShowImg}>
                      <div className="item">
                        <img src="images/img3/13.jpg" />
                      </div>
                      <div className="item-span">
                        印象杭州
                      </div>
                      <p>2017-04-18, 21张照片</p>
                    </div>
                  </Link>
                  <Link to='/section/4'>
                    <div className="box-album" onClick={this.handleShowImg}>
                      <div className="item">
                        <img src="images/img4/1.jpg" />
                      </div>
                      <div className="item-span">
                        花香四溢
                      </div>
                      <p>2017-05-01, 6张照片</p>
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
                  <div className="box-album" onClick={() => this.handleShowImg('images/1.jpg')}>
                    <div className="item">
                      <img src="images/1.jpg" />
                    </div>
                    <div className="item-span">
                      无名花果
                      </div>
                    <p>2017-03-11</p>
                  </div>
                  <div className="box-album" onClick={() => this.handleShowImg('images/2.jpg')}>
                    <div className="item">
                      <img src="images/2.jpg" />
                    </div>
                    <div className="item-span">
                      蒙古包
                      </div>
                    <p>2017-03-19</p>
                  </div>
                  <div className="box-album" onClick={() => this.handleShowImg('images/3.jpg')}>
                    <div className="item">
                      <img src="images/3.jpg" />
                    </div>
                    <div className="item-span">
                      瓜果藤
                      </div>
                    <p>2017-04-05</p>
                  </div>
                  <div className="box-album" onClick={() => this.handleShowImg('images/4.jpg')}>
                    <div className="item">
                      <img src="images/4.jpg" />
                    </div>
                    <div className="item-span">
                      城堡
                      </div>
                    <p>2017-04-13</p>
                  </div>
                  <div className="box-album" onClick={() => this.handleShowImg('images/5.jpg')}>
                    <div className="item">
                      <img src="images/5.jpg" />
                    </div>
                    <div className="item-span">
                      洱海之美
                      </div>
                    <p>2017-05-01</p>
                  </div>
                  <div className="box-album" onClick={() => this.handleShowImg('images/6.jpg')}>
                    <div className="item">
                      <img src="images/6.jpg" />
                    </div>
                    <div className="item-span">
                      林荫小道
                      </div>
                    <p>2017-03-11</p>
                  </div>
                  <div className="box-album" onClick={() => this.handleShowImg('images/7.jpg')}>
                    <div className="item">
                      <img src="images/7.jpg" />
                    </div>
                    <div className="item-span">
                      beautiful花灯
                      </div>
                    <p>2017-04-08</p>
                  </div>
                  <div className="box-album" onClick={() => this.handleShowImg('images/8.jpg')}>
                    <div className="item">
                      <img src="images/8.jpg" />
                    </div>
                    <div className="item-span">
                      最美的风景
                      </div>
                    <p>2017-04-08</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
