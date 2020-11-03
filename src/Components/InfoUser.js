import React, { Component } from 'react';

class InfoUser extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        const data = this.props.user ? this.props.user.val() : [];
        return (
            <div className="info p-2">
                <div className="media pr-3 pl-3">
                    <img src="./img/18056829_1893214450891840_8934384867963399747_n.jpg" alt="John Doe" 
                    className="mr-3 mt-3 rounded-circle" style={{ width: '100px' }} />
                    <div className="media-body p-3 d-flex flex-column">
                        <h4>{data.user_name}</h4>
                        <p>{data.status}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default InfoUser;