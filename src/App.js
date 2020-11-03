import React, { Component } from 'react';
import InfoUser from './Components/InfoUser';
import { contactDB } from './Components/data'
import ContactItem from './Components/ContactItem';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentWillMount() {
    const pathName = window.location.pathname.substr(1, window.location.pathname.length);
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
      link: info.email
    });
    temp.push({
      app: 'Facebook',
      link: info.facebook
    });
    temp.push({
      app: 'Github',
      link: info.github
    });
    temp.push({
      app: 'Instagram',
      link: info.instagram
    });
    temp.push({
      app: 'Phone',
      link: info.phone
    });
    temp.push({
      app: 'Skype',
      link: info.skype
    });
    temp.push({
      app: 'Telegram',
      link: info.telegram
    });
    temp.push({
      app: 'Youtube',
      link: info.youtube
    });
    temp.push({
      app: 'Zalo',
      link: info.zalo
    });
    temp.push({
      app: 'Website',
      link: info.website
    });
    temp.push({
      app: 'Whatsapp',
      link: info.whatsapp
    });
    temp.push({
      app: 'Shopee',
      link: info.shopee
    });
    temp.push({
      app: 'Line',
      link: info.line
    });
    this.setState({
      info: temp
    })
  }

  render_contact = () => {
    if (this.state.info) {
      return (
        this.state.info.map((item, key) => {
          return (
            <ContactItem data={item} key={key}></ContactItem>
          )
        })
      )
    }
  }
  render() {
    return (
      <div>
        <div className="container-fluid d-flex text-white flex-column p-0">
          <InfoUser
            user={this.state.user}
          ></InfoUser>
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