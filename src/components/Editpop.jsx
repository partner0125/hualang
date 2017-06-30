import React from 'react';

export default class Editpop extends React.Component {
  render() {
    return (
      <div className={this.props.editOpen ? 'editpopContainer' : 'diseditpop'}>
        <div className="popEdit">
          <div className="editInfo">
            <p>编辑相册信息</p>
          </div>
          <div className="editContent">
            <div className="editName">
              <span>名称：</span>
              <input
                type="text"
                className="inputName"
                onChange={(e) => this.props.handleChange('albumname', e)}
                value={this.props.albumname}
              />
            </div>
            <div className="editDescribe" >
              <span style={{ verticalAlign: 'top' }}>描述：</span>
              <textarea
                onChange={(e) => this.props.handleChange('albumdescrib', e)}
                value={this.props.albumdescrib}
              ></textarea>
            </div>
            <div className="editClassify">
              <span>分类：</span>
              <select
                onChange={(e) => this.props.handleChange('albumclassify', e)}
                value={this.props.albumclassify}
              >
                <option value="0">请选择</option>
                <option value="1">壁纸</option>
                <option value="2">风景</option>
                <option value="3">宠物</option>
                <option value="4">人物</option>
              </select>
            </div>
          </div>
          <div className="editFoot">
            <button onClick={this.props.handleSave}>保存</button>
            <button onClick={this.props.handleEditAlbum}>取消</button>
          </div>
        </div>
      </div>
    );
  }
}
