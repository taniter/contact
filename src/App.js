import React, { Component } from 'react';
import InfoUser from './Components/InfoUser';
import { contactDB } from './Components/data'
import ContactItem from './Components/ContactItem';
import ImageUploader from 'react-images-upload';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      isEdit: false
    }
  }

  componentWillMount() {
    const pathName = window.location.search.substr(1, window.location.search.length);
    if (pathName)
      contactDB.on('value', (value) => {
        value.forEach(item => {
          if (item.val().user_account === pathName) {
            this.setState({
              user: item
            }, () => {
              this.convert_lst(this.state.user.val().info);
            })
          }
        })
      })
  }
  convert_lst = (info) => {
    const temp = [];
    temp.push({
      app: 'Email',
      link: "mailto:" + info.email,
      id: info.email
    });
    temp.push({
      app: 'Facebook',
      link: "fb://profile/" + info.facebook,
      id: info.facebook
    });
    temp.push({
      app: 'Github',
      link: "https://github.com/" + info.github,
      id: info.github
    });
    temp.push({
      app: 'Instagram',
      link: "https://www.instagram.com/" + info.instagram,
      id: info.instagram
    });
    temp.push({
      app: 'Phone',
      link: "tel:" + info.phone,
      id: info.phone
    });
    temp.push({
      app: 'Skype',
      link: "skype:" + info.skype + "?userinfo",
      id: info.skype
    });
    temp.push({
      app: 'Telegram',
      link: "tg://user?id=" + info.telegram,
      id: info.telegram
    });
    temp.push({
      app: 'Youtube',
      link: info.youtube,
      id: info.youtube
    });
    temp.push({
      app: 'Zalo',
      link: "https://zalo.me/" + info.zalo,
      id: info.zalo
    });
    temp.push({
      app: 'Website',
      link: info.website,
      id: info.website
    });
    temp.push({
      app: 'Whatsapp',
      link: "whatsapp:" + info.whatsapp,
      id: info.whatsapp
    });
    temp.push({
      app: 'Shopee',
      link: info.shopee,
      id: info.shopee
    });
    temp.push({
      app: 'Line',
      link: info.line,
      id: info.line
    });
    this.setState({
      info: temp
    })
  }

  render_contact = () => {
    if (this.state.info && !this.state.isEdit) {
      return (
        this.state.info.map((item, key) => {
          return (
            <ContactItem onChangeInput={this.onChangeInput} isLogin={this.state.isLogin} data={item} key={key}></ContactItem>
          )
        })
      )
    }
  }
  onLoadPicture = (pic, url) => {
    console.log(pic);
    console.log(url);
  }
  EditInfo = () => {
    this.setState({
      isEdit: true
    }, () => {

    })
  }

  render_login = () => {
    if (!this.state.isLogin && this.state.isEdit) {
      return (
        <div className="login text-white">
          <div className="form-group text-center p-3">
            <label for="passwork">Mật khẩu: </label>
            <input onChange={this.onPasswordChange} type="password"
              className="form-control m-auto w-50" name="passwork" id="passwork" placeholder="nhập mật khẩu..." />
            <div onClick={this.onLoginClick} className="btn mt-2 btn-primary">Đăng Nhập</div>
          </div>
        </div>
      )
    }
  }

  onPasswordChange = (ev) => {
    this.setState({
      password: ev.target.value
    })
  }
  onLoginClick = () => {
    if (this.state.password) {
      if (this.state.user.val().user_pass === this.state.password) {
        this.setState({
          isLogin: true,
          isEdit: false
        })
      }
      else {
        alert('Sai mật khẩu! Vui lòng kiểm tra lại.');
      }
    }
  }
  render_user_info = () => {
    return (
      <InfoUser
        isLogin={this.state.isLogin}
        user={this.state.user}
        EditInfo={this.EditInfo}
        onLoadPicture={this.onLoadPicture}
        onDoneClick={this.onDoneClick}
        onChangeStatus={this.onChangeStatus}
      ></InfoUser>
    )
  }
  onChangeStatus = (data) => {
    this.setState({
      status: data
    })
  }
  onLoadPicture = (url) => {
    this.setState({
      picture: url
    })
  }
  onChangeInput = (data) => {
    this.setState({
      [data.app]: data.id
    })
  }

  onDoneClick = () => {
    console.log(this.state);
    const user = this.state.user.val();
    const key = this.state.user.key;
    contactDB.child(key).set({
      user_account: user.user_account,
      user_name: user.user_name,
      user_pass: user.user_pass,
      picture: this.state.picture ? this.state.picture : user.picture,
      status: this.state.status ? this.state.status : user.status,
      info: {
        email: this.state.Email ? this.state.Email : user.info.email,
        facebook: this.state.Facebook ? this.state.Facebook : user.info.facebook,
        github: this.state.Github ? this.state.Github : user.info.github,
        instagram: this.state.Instagram ? this.state.Instagram : user.info.instagram,
        line: this.state.Line ? this.state.Line : user.info.line,
        phone: this.state.Phone ? this.state.Phone : user.info.phone,
        shopee: this.state.Shopee ? this.state.Shopee : user.info.shopee,
        skype: this.state.Skype ? this.state.Skype : user.info.skype,
        telegram: this.state.Telegram ? this.state.Telegram : user.info.telegram,
        website: this.state.Website ? this.state.Website : user.info.website,
        whatsapp: this.state.Whatsapp ? this.state.Whatsapp : user.info.whatsapp,
        youtube: this.state.Youtube ? this.state.Youtube : user.info.youtube,
        zalo: this.state.Zalo ? this.state.Zalo : user.info.zalo
      }
    }, () => {
      this.setState({
        isLogin: false,
        isEdit: false
      });
      this.render_contact();
    })
  }
  render() {
    return (
      <div>
        {this.render_user_info()}
        {this.render_login()}
        <div className="container-fluid d-flex text-white flex-column p-0">
          <div className={this.state.info ? "d-none" : "text-center p-3"}>
            <div className="spinner-grow text-muted"></div>
            <div className="spinner-grow text-primary"></div>
            <div className="spinner-grow text-success"></div>
            <div className="spinner-grow text-info"></div>
            <div className="spinner-grow text-warning"></div>
            <div className="spinner-grow text-danger"></div>
            <div className="spinner-grow text-secondary"></div>
            <div className="spinner-grow text-dark"></div>
            <div className="spinner-grow text-light"></div>
          </div>
          {this.render_contact()}
        </div>
        <div className="container-fluid mt-4 p-0 text-center">
          <img style={{ width: '150px' }} className src="./img/logo.jpg" />
          <h4 className="text-white mt-3">Danh Thiếp Thông Minh</h4>
          <p className="m-0">created by taniter</p>
          <small>NTT</small>
        </div>
      </div>
    );
  }
}

export default App;