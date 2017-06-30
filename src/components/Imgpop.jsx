import React from 'react';

export default class Imgpop extends React.Component {
  render() {
    const imginfo = this.props.imgInfo[this.props.Index] ? this.props.imgInfo[this.props.Index] : { name: '', upTime: '' };
    return (
      <div className={this.props.imgOpen ? 'popcontainer' : 'dispop'} onClick={this.props.handleShowImg}>
        <div className="popimg">
          <div className="imgcontainer">
            <img src={this.props.imguri} />
          </div>
          <div className="imgdetail">
            <p>图片名：<span>{imginfo.name}</span></p>
            <p>上传时间：<span>{imginfo.upTime}</span></p>
          </div>
        </div>
      </div>
    );
  }
}
