import React from 'react';
import { Link } from 'react-router';
import Imgpop from './Imgpop';
import Editpop from './Editpop';

export default class AlbumList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgOpen: false,
      editOpen: false,
      editPassOpen: false,
      userListOpen: false,
      imguri: '',
      Index: '',
      albumname: '',
      albumdescrib: '',
      albumclassify: '',
      pass: '',
      repass: '',
      imgInfo: [
        {
          name: '无名花果',
          upTime: '2017-03-12'
        },
        {
          name: '蒙古包',
          upTime: '2017-04-02'
        },
        {
          name: '花果藤',
          upTime: '2017-04-12'
        },
        {
          name: '城堡',
          upTime: '2017-05-01'
        },
        {
          name: '洱海之美',
          upTime: '2017-05-15'
        },
        {
          name: '林荫小道',
          upTime: '2017-05-15'
        },
        {
          name: 'beautiful花灯',
          upTime: '2017-04-08'
        },
        {
          name: '最美风景',
          upTime: '2017-05-17'
        }
      ]
    }
    this.handleShowImg = this.handleShowImg.bind(this);
    this.handleEditAlbum = this.handleEditAlbum.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleUserListOpen = this.handleUserListOpen.bind(this);
    this.handleExit = this.handleExit.bind(this);
    this.handleEditpass = this.handleEditpass.bind(this);
    this.handleSavepass = this.handleSavepass.bind(this);
  }

  handleShowImg(imguri, Index) {
    this.setState({ imguri, imgOpen: !this.state.imgOpen, Index: Index - 1 });
  }

  handleEditAlbum() {
    this.setState({ editOpen: !this.state.editOpen });
  }

  handleChange(name, e) {
    if (name === 'albumname') {
      this.setState({ albumname: e.target.value });
    } else if (name === 'albumdescrib') {
      this.setState({ albumdescrib: e.target.value });
    } else if (name === 'pass') {
      this.setState({ pass: e.target.value });
    } else if (name === 'repass') {
      this.setState({ repass: e.target.value });
    } else {
      this.setState({ albumclassify: e.target.value });
    }
  }

  handleSave() {
    console.log(this.state.albumname, this.state.albumdescrib, this.state.albumclassify);
    this.handleEditAlbum();
  }

  handleUserListOpen() {
    this.setState({ userListOpen: !this.state.userListOpen });
  }

  handleEditpass() {
    this.setState({ editPassOpen: !this.state.editPassOpen, userListOpen: false });
  }

  handleSavepass() {
    console.log(this.state.pass, this.state.repass);
    this.handleEditpass;
  }

  handleExit() {
    this.context.router.push('/');
  }
  render() {
    return (
      <div>
        <div className="container-div">
          <Imgpop imgOpen={this.state.imgOpen}
            handleShowImg={this.handleShowImg}
            imguri={this.state.imguri}
            imgInfo={this.state.imgInfo}
            Index={this.state.Index}
          />
          <Editpop editOpen={this.state.editOpen}
            handleEditAlbum={this.handleEditAlbum}
            handleChange={this.handleChange}
            handleSave={this.handleSave}
          />
          <div className={this.state.editPassOpen ? 'editpopContainer' : 'diseditpop'}>
            <div className="popEdit" style={{ height: '200px' }}>
              <div className="editInfo">
                <p>修改密码</p>
              </div>
              <div className="editContent" style={{ height: '80px' }}>
                <div className="editPass">
                  <span>新密码：</span>
                  <input type="password"
                    onChange={(e) => this.handleChange('pass', e)}
                    value={this.state.pass}
                  />
                </div>
                <div className="editRepass">
                  <span>重复新密码：</span>
                  <input type="password"
                    onChange={(e) => this.handleChange('repass', e)}
                    value={this.state.repass}
                  />
                </div>
              </div>
              <div className="editFoot">
                <button onClick={this.handleSavepass}>保存</button>
                <button onClick={this.handleEditpass}>取消</button>
              </div>
            </div>
          </div>
          <div className="header-div">
            <div className="header-container">
              <ul>
                <li><Link to='/albumlist'>相册首页</Link></li>
                <li><a href="javascript:void(0)">人物</a></li>
                <li><a href="javascript:void(0)">壁纸</a></li>
                <li><a href="javascript:void(0)">风景</a></li>
                <li><Link to='/upload'>上传</Link></li>
              </ul>
              <div className="loginUser">
                {this.props.params.username}，欢迎你
                <div className="iconcir" onClick={this.handleUserListOpen}>
                  <div className="icontri"></div>
                </div>
                <div className={this.state.userListOpen ? 'userList' : 'userListNone'}>
                  <ul>
                    <li onClick={this.handleEditpass}>修改密码</li>
                    <li onClick={this.handleExit}>登出</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="album_wrap">
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
                      最新相册
                    </h2>
                  </div>
                  <div className="new_album_box">
                    <div className="box-album">
                      <div className="editdiv" onClick={this.handleEditAlbum}>
                        <button>编辑</button>
                      </div>
                      <Link to='/section/1'>
                        <div className="item">
                          <img src="images/img1/20.jpg" />
                        </div>
                        <div className="item-span">沿海印记</div>
                      </Link>
                      <p>2017-03-12, 20张照片</p>
                    </div>
                    <div className="box-album">
                      <div className="editdiv" onClick={this.handleEditAlbum}>
                        <button>编辑</button>
                      </div>
                      <Link to='/section/2'>
                        <div className="item">
                          <img src="images/img2/MG7.jpg" />
                        </div>
                        <div className="item-span">绿色美景</div>
                      </Link>
                      <p>2017-04-05, 8张照片</p>
                    </div>
                    <div className="box-album">
                      <div className="editdiv" onClick={this.handleEditAlbum}>
                        <button>编辑</button>
                      </div>
                      <Link to='/section/3'>
                        <div className="item">
                          <img src="images/img3/13.jpg" />
                        </div>
                        <div className="item-span">印象杭州</div>
                      </Link>
                      <p>2017-04-18, 21张照片</p>
                    </div>
                    <div className="box-album">
                      <div className="editdiv" onClick={this.handleEditAlbum}>
                        <button>编辑</button>
                      </div>
                      <Link to='/section/4'>
                        <div className="item">
                          <img src="images/img4/1.jpg" />
                        </div>
                        <div className="item-span">花香四溢</div>
                      </Link>
                      <p>2017-05-01, 6张照片</p>
                    </div>

                  </div>
                </div>
                <div className="photo_box">
                  <div className="new_photo">
                    <h2>
                      最新照片
                  </h2>
                  </div>
                  <div className="new_photo_box">
                    <div className="box-album" onClick={() => this.handleShowImg('images/1.jpg', 1)}>
                      <div className="item">
                        <img src="images/1.jpg" />
                      </div>
                      <div className="item-span">
                        {this.state.imgInfo[0].name}
                      </div>
                      <p>{this.state.imgInfo[0].upTime}</p>
                    </div>
                    <div className="box-album" onClick={() => this.handleShowImg('images/2.jpg', 2)}>
                      <div className="item">
                        <img src="images/2.jpg" />
                      </div>
                      <div className="item-span">
                        {this.state.imgInfo[1].name}
                      </div>
                      <p>{this.state.imgInfo[1].upTime}</p>
                    </div>
                    <div className="box-album" onClick={() => this.handleShowImg('images/3.jpg', 3)}>
                      <div className="item">
                        <img src="images/3.jpg" />
                      </div>
                      <div className="item-span">
                        {this.state.imgInfo[2].name}
                      </div>
                      <p>{this.state.imgInfo[2].upTime}</p>
                    </div>
                    <div className="box-album" onClick={() => this.handleShowImg('images/4.jpg', 4)}>
                      <div className="item">
                        <img src="images/4.jpg" />
                      </div>
                      <div className="item-span">
                        {this.state.imgInfo[3].name}
                      </div>
                      <p>{this.state.imgInfo[3].upTime}</p>
                    </div>
                    <div className="box-album" onClick={() => this.handleShowImg('images/5.jpg', 5)}>
                      <div className="item">
                        <img src="images/5.jpg" />
                      </div>
                      <div className="item-span">
                        {this.state.imgInfo[4].name}
                      </div>
                      <p>{this.state.imgInfo[4].upTime}</p>
                    </div>
                    <div className="box-album" onClick={() => this.handleShowImg('images/6.jpg', 6)}>
                      <div className="item">
                        <img src="images/6.jpg" />
                      </div>
                      <div className="item-span">
                        {this.state.imgInfo[5].name}
                      </div>
                      <p>{this.state.imgInfo[5].upTime}</p>
                    </div>
                    <div className="box-album" onClick={() => this.handleShowImg('images/7.jpg', 7)}>
                      <div className="item">
                        <img src="images/7.jpg" />
                      </div>
                      <div className="item-span">
                        {this.state.imgInfo[6].name}
                      </div>
                      <p>{this.state.imgInfo[6].upTime}</p>
                    </div>
                    <div className="box-album" onClick={() => this.handleShowImg('images/8.jpg', 8)}>
                      <div className="item">
                        <img src="images/8.jpg" />
                      </div>
                      <div className="item-span">
                        {this.state.imgInfo[7].name}
                      </div>
                      <p>{this.state.imgInfo[7].upTime}</p>
                    </div>
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

AlbumList.contextTypes = {
  router: React.PropTypes.object
};
