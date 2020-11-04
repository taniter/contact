import React, { Component } from 'react';

class ContactItem extends Component {
    constructor(props) {
        super(props);

    }

    onInputChange = (ev) => {
        const id = ev.target.id;
        const val = ev.target.value;
        this.setState({
            app: id,
            id: val
        }, () => {
            this.props.onChangeInput(this.state);
        })
    }

    render_item = () => {
        const data = this.props.data;
        const src = "https://github.com/taniter/contact/blob/master/public/img/" + data.app.toLocaleLowerCase() + ".png?raw=true";
        if (this.props.isLogin) {
            return (
                <div className={data.link ? "w-100 link-item" : "w-100 d-none link-item"}>
                    <div className="media p-2">
                        <img src={src} alt="John Doe" className="ml-3 mt-1 rounded-circle" style={{ width: '60px' }} />
                        <div className="p-3 d-flex flex-column">
                            <span>{data.id}</span>
                            <input onChange={this.onInputChange} type="text" id={data.app} />
                        </div>
                    </div>
                </div>
            )
        }
        else {
            if (data.link !== 'null') {
                return (
                    <a href={this.props.isLogin ? "" : data.link} className={data.link ? "w-100 link-item" : "w-100 d-none link-item"}>
                        <div className="media p-2">
                            <img src={src} alt="John Doe" className="ml-3 mt-1 rounded-circle" style={{ width: '60px' }} />
                            <div className="p-3">
                                <h4>{data.app}</h4>
                            </div>
                        </div>
                    </a>
                )
            }
        }
    }

    render() {
        const data = this.props.data;
        const src = "https://github.com/taniter/contact/blob/master/public/img/" + data.app.toLocaleLowerCase() + ".png?raw=true";
        return (
            <div className="w-100 link-item">
                { this.render_item()}
            </div>
        );
    }
}

export default ContactItem;