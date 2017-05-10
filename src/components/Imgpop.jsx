import React from 'react';

export default class Imgpop extends React.Component {
  render() {
    return (
      <div className={this.props.imgOpen ? 'popcontainer' : 'dispop'} onClick={this.props.handleShowImg}>
        <div className="popimg">
          <div className="imgcontainer">
            <img src={this.props.imguri} />
          </div>
          <div className="imgdetail">
            <p>图&nbsp;&nbsp;片&nbsp;&nbsp;名：<span>洱海之美</span></p>
            <p>大&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;小：<span>500x300像素</span></p>
          </div>
        </div>
      </div>
    );
  }
}
