import React from 'react';
import $ from 'jquery';

// 表单组件
export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
    this.handleRegist=this.handleRegist.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleFocus() {
    $('#left_hand').animate({
      left: '150',
      top: ' -38'
    }, {
        step: function () {
          if (parseInt($('#left_hand').css('left')) > 140) {
            $('#left_hand').attr('class', 'left_hand');
          }
        }
      }, 2000);
    $('#right_hand').animate({
      right: '-64',
      top: '-38px'
    }, {
        step: function () {
          if (parseInt($('#right_hand').css('right')) > -70) {
            $('#right_hand').attr('class', 'right_hand');
          }
        }
      }, 2000);
  }

  handleBlur() {
    $('#password').blur(function () {
      $('#left_hand').attr('class', 'initial_left_hand');
      $('#left_hand').attr('style', 'left:100px;top:-12px;');
      $('#right_hand').attr('class', 'initial_right_hand');
      $('#right_hand').attr('style', 'right:-112px;top:-12px');
    });
  }

  handleRegist(){
    this.context.router.push('/regist');
  }

  handleSubmit() {
    if (this.state.username === 'admin' && this.state.password === '123') {
      this.context.router.push(`/albumlist/${this.state.username}`);
    } else {
      alert('用户名或密码错误');
    }
  }

  handleChange(name, e) {
    if (name === 'username') {
      this.setState({ username: e.target.value });
    } else {
      this.setState({ password: e.target.value });
    }
  }
  
  render() {
    return (
      <div>
        <div className="top_div"></div>
        <form className="login-form">
          <div className="login-form-owl">
            <div className="tou"></div>
            <div className="initial_left_hand" id="left_hand"></div>
            <div className="initial_right_hand" id="right_hand"></div>
          </div>
          <p className="user-login">
            <span className="u_logo"></span>
            <input
              className="ipt"
              onChange={(e) => this.handleChange('username', e)}
              type="text" placeholder="请输入用户名或邮箱"
              value={this.state.username}
            />
          </p>
          <p className="pwd-login">
            <span className="p_logo"></span>
            <input
              id="password"
              className="ipt"
              type="password"
              placeholder="请输入密码"
              value={this.state.password}
              onChange={(e) => this.handleChange('password', e)}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
            />
          </p>
          <div className="login-form-ft">
            <p>
              <span>
                <a href="#">忘记密码?</a>
              </span>
              <span>
                <a onClick={this.handleRegist}>注册</a>
                <button onClick={this.handleSubmit}>登录</button>
              </span>
            </p>
          </div>
        </form>
      </div>
    );
  }
}
LoginForm.contextTypes = {
  router: React.PropTypes.object
};
