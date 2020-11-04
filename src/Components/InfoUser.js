import React, { Component } from 'react';
import ImageUploader from 'react-images-upload';

class InfoUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentWillMount() {
        this.setState({
            picture: this.props.user ? this.props.user.val().picture : ''
        })
    }
    onLoadPicture = (pic, url) => {
        this.setState({
            picture: url.length ? url[url.length - 1] : url
        });
        this.props.onLoadPicture(url.length ? url[url.length - 1] : url);
    }
    EditClick = () => {

        if (this.props.isLogin)
            this.props.onDoneClick();
        else this.props.EditInfo();
    }

    onSTTChange = (ev) => {
        this.setState({
            status: ev.target.value
        })
    }
    onChangeStatus = () => {
        if (this.state.status)
            this.props.onChangeStatus(this.state.status);
    }
    render() {
        const data = this.props.user ? this.props.user.val() : [];
        return (
            <div className="info text-white p-2">
                <div className="media dropdown dropright pr-3 pl-3">
                    <img data-toggle="dropdown" onClick={this.onPictureClick} src={this.state.picture ? this.state.picture : data.picture} alt="no data"
                        className="mr-3 mt-3 rounded-circle" style={{ width: '100px', height: '100px' }} />
                    <div class="dropdown-menu">
                        <a class={this.props.isLogin ? "dropdown-item" : "d-none"}>
                            <ImageUploader
                                buttonText='Đổi Ảnh Đại Diện'
                                onChange={this.onLoadPicture}
                            /></a>
                        <a onClick={this.EditClick} class="dropdown-item">{this.props.isLogin ? "Lưu Thông Tin" : "Sửa Thông Tin"}</a>
                    </div>
                    <div className="media-body p-3 d-flex flex-column">
                        <h4>{data.user_name}</h4>
                        <div className={this.props.isLogin ? "" : "d-none"}>
                            <input onChange={this.onSTTChange} id="status" type="text"></input>
                            <i onClick={this.onChangeStatus} className={this.props.isLogin ? "fa ml-2 fa-pencil" : "d-none"}></i>
                        </div>
                        <p className={this.props.isLogin ? "d-none" : ""}>{data.status}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default InfoUser;