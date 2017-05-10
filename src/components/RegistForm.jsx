import React from 'react';

// 表单组件
export default class RegistForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errPattern: [],
      requirePattern: [],
      formData: {
        username: '',
        userpass: '',
        repass: '',
        email: ''
      }
    }
    this.handleChange = this.handleChange.bind(this);
    this.formValidation = this.formValidation.bind(this);
  }
  formValidation(name) {
    const obj = this.state.formData;
    const reg = { username: /^[0-9a-z]{4,12}$/, userpass: /^[0-9a-zA-Z]{6,12}$/, email:/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/};
    if (obj[name] === '') {
      this.state.requirePattern.push(name);
      this.setState({ requirePattern: this.state.requirePattern });
    }
    if (name === 'repass') {
      if (this.state.formData.repass !== this.state.formData.userpass) {
        this.state.errPattern.push(name);
        this.setState({ errPattern: this.state.errPattern });
      }
    } else if (reg[name].test(obj[name]) !== true) {
      this.state.errPattern.push(name);
      this.setState({ errPattern: this.state.errPattern });
    }
  }
  
  handleChange(name, e) {
    const obj = this.state.formData;
    obj[name] = e.target.value;
    this.setState({ obj });
    this.setState({ requirePattern: [], errPattern: [] });
  }
render() {
  return (
    <div>
      <div className="content">
        <div className="box-wrap">
          <div className="form-wrap">
            <form className="regist-form" action="">
              <h2 className="form-title">新用户注册</h2>
              <div className="form-content">
                <div className="regist-name">
                  <label className="regist-label" htmlFor="username">
                    <span className="form-required">*</span>用&nbsp;户&nbsp;名&nbsp;:
								    </label>
                  <input className="regist-input"
                    type="text" placeholder="用户名"
                    onChange={(e) => this.handleChange('username', e)}
                    value={this.state.formData.username}
                    onBlur={(e) => this.formValidation('username', e)}
                  />
                  <div className="ms1">
                    {this.state.requirePattern.includes('username') ? '请输入用户名！' :
                      this.state.errPattern.includes('username') ? '用户名应为4至12位字符！' : ''}</div>
                </div>
                <div className="regist-pass">
                  <label className="regist-label" htmlFor="password">
                    <span className="form-required">*</span>密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码&nbsp;:
								    </label>
                  <input className="regist-input"
                    type="password" placeholder="请设置密码"
                    onChange={(e) => this.handleChange('userpass', e)}
                    value={this.state.formData.userpass}
                    onBlur={(e) => this.formValidation('userpass', e)}
                  />
                  <div className="ms1">
                    {this.state.requirePattern.includes('userpass') ? '请设置密码！' : this.state.errPattern.includes('userpass') ? '用户名应为4至12位字符！' : ''}
                  </div>
                </div>
                <div className="regist-repass">
                  <label className="regist-label" htmlFor="repassword">
                    <span className="form-required">*</span>确认密码:
								    </label>
                  <input className="regist-input"
                    type="password" placeholder="请确认密码"
                    onChange={(e) => this.handleChange('repass', e)}
                    value={this.state.formData.repass}
                    onBlur={(e) => this.formValidation('repass', e)}
                  />
                  <div className="ms1">
                    {this.state.requirePattern.includes('repass') ? '请设置确认密码！' : this.state.errPattern.includes('repass') ? '确认密码和密码不一致！' : ''}
                  </div>
                </div>
                <div className="regist-email">
                  <label className="regist-label" htmlFor="email">
                    <span className="form-required">*</span>邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;箱&nbsp;:
								    </label>
                  <input className="regist-input"
                    type="text" placeholder="请输入邮箱"
                    onChange={(e) => this.handleChange('email', e)}
                    value={this.state.formData.nicname}
                    onBlur={(e) => this.formValidation('email', e)}
                  />
                  <div className="ms1">
                    {this.state.requirePattern.includes('email') ? '请设置邮箱！' : this.state.errPattern.includes('email') ? '邮箱格式不正确！' : ''}
                  </div>
                </div>
                <button className="regist-btn" type="button">注册</button>
              </div>
            </form>
          </div>
          <div className="login-others">
            <div className="author-login">
              <p className="author-login-title">
                <span className="author-login-title-left">使用合作账号登录</span>
                <span className="author-login-title-right">
                  已经有账号？<a className="author-link" href="#">登录</a>
                </span>
              </p>
              <ul className="author-login-list">
                <li className="author-login-item">
                  <a className="author-login-qq" href="#">
                    <img src="images/qq.png" height="22" width="22" />
                  </a>
                </li>
                <li className="author-login-item">
                  <a className="author-login-weibo" href="#">
                    <img src="images/weibo.png" height="22" width="22" />
                  </a>
                </li>
                <li className="author-login-item">
                  <a className="author-login-taobao" href="#">
                    <img src="images/taobao.png" height="22" width="22" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
}
RegistForm.contextTypes = {
  router: React.PropTypes.object
};
