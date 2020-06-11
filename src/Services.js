import React, { Component } from 'react';
import './Services.css';

class Services extends Component {
    render() {
        return (
            <div className='services'>
                <h3>Services</h3>
                <h2>What we offer</h2>
                <div className='row'>
                    <div><span><ion-icon name="phone-portrait-outline"></ion-icon>
                    </span>
                        <h4>Responsive </h4>
                        <p> Looks great on my screen size</p>
                    </div>
                    <div><span><ion-icon name="pencil-outline"></ion-icon></span>
                        <h4>Redesigned </h4>
                        <p>Freshly redesigned for Bootstrap 4</p>
                    </div>
                    <div><span><ion-icon name="thumbs-up-outline"></ion-icon></span>
                        <h4>Favorited </h4>
                        <p>Millions for users Start Bootstrap </p>
                    </div>
                    <div><span><ion-icon name="help-outline"></ion-icon></span>
                        <h4> Question</h4>
                        <p>I mustache you a question </p>
                    </div>
                </div>
            </div>
        )
    }
}
export default Services;