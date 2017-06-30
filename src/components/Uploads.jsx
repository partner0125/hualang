import React from 'react';
import { Link } from 'react-router';
import { Upload, Icon, Modal } from 'antd';
import moment from 'moment';

export default class Uploads extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      previewVisible: false,
      previewImage: '',
      fileList: []
    }
    this.handleCancel = this.handleCancel.bind(this);
    this.handlePreview = this.handlePreview.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleCancel = () => {
    this.setState({ previewVisible: false })
  }

  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true
    });
  }

  handleChange = ({ fileList }, tag) => {
    if (tag) { fileList = []; }
    this.setState({ fileList })
  }

  render() {
    const { previewVisible, previewImage, fileList } = this.state;
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    const nullList = [];
    return (
      <div>
        <div className="container-div">
          <div className="header-div">
            <div className="header-container">
              <ul>
                <li><Link to='/albumlist'>相册首页</Link></li>
                <li><a href="javascript:void(0)">人物</a></li>
                <li><a href="javascript:void(0)">壁纸</a></li>
                <li><a href="javascript:void(0)">风景</a></li>
              </ul>
            </div>
          </div>
          <div className="uploadwrap">
            <p className="order-p">上传照片-普通上传</p>
            <p className="comboBox-p">
              上传到：<select>
                <option>请选择相册类别</option>
                <option>壁纸</option>
                <option>风景</option>
                <option>宠物</option>
                <option>人物</option>
              </select>
              相册名称：<select>
                <option>请选择相册名</option>
                <option>沿海印记</option>
                <option>绿色美景</option>
                <option>印象杭州</option>
                <option>花香四溢</option>
              </select>
            </p>
            <div className="uploadcon">
              <Upload
                action="//jsonplaceholder.typicode.com/posts/"
                listType="picture-card"
                fileList={fileList}
                onPreview={this.handlePreview}
                onChange={this.handleChange}
              >
                {fileList.length >= 1 ? null : uploadButton}
              </Upload>
              <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                <img alt="example" style={{ width: '100%' }} src={previewImage} />
              </Modal>
              <p>{this.state.fileList[0] ? `图片名称：${this.state.fileList[0].name}` : ''}</p>
              <p>{this.state.fileList[0] ? `上传时间：${moment().format('YYYY年MM月DD日 hh:mm:ss A')}` : ''}</p>
              <p>{this.state.fileList[0] ? `图片大小：${this.state.fileList[0].size}KB` : ''}</p>
            </div>
            {this.state.fileList[0] ?
              <div>
                <div className="albumcomment">
                  <p>对该照片评论</p>
                  <p>评论内容<span>*</span></p>
                  <textarea></textarea>
                </div>
                <div className="upload-foot">
                  <Link to='/albumlist'><button>保存</button></Link>
                  <button onClick={() => this.handleChange(nullList, 'reset')}>重新上传</button>
                </div>
              </div> : ''
            }
          </div>
        </div>
      </div>
    );
  }
}
