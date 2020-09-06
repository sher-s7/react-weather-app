import SunRays from './assets/smiling-sun/smiling-sun-rays.png'
import SunFace from './assets/smiling-sun/smiling-sun-face.png'

import React from 'react';

export default class LoadingSun extends React.Component {
    render() {
        
        return (
            <div id="smiling-sun" className={this.props.fixed ? `fixed ${this.props.hidden ? 'hidden' : ''}` : ''}>
                <img
                    src={SunRays}
                    alt="smiling-sun-rays"
                    id="smiling-sun-rays"
                />
                <img
                    src={SunFace}
                    alt="smiling-sun-face"
                    id="smiling-sun-face"
                />
            </div>
        );
    }
}