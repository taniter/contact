import React, { Component } from 'react';

class ContactItem extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const data = this.props.data;
        const src = "https://raw.githubusercontent.com/taniter/contact/master/public/img/" + data.app + ".png";
        return (
            <a href={data.link} className="w-100 link-item">
                <div className="media p-2">
                    <img src={src} alt="John Doe" className="ml-3 mt-1 rounded-circle" style={{ width: '60px' }} />
                    <div className="p-3">
                        <h4>{data.app}</h4>
                    </div>
                </div>
            </a>
        );
    }
}

export default ContactItem;