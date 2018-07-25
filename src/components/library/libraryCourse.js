import React, { Component } from 'react';

import Icon from '../icon';
import Arrow from '../arrow';

class LibraryCourse extends Component {
    render() {
        return (
            <div className="library-course">
            <div className="library-course__title-arrow">
            <label className="library-course__title">Problem Solving</label>
            </div>
            { Icon('fas fa-check', 'library-course__icon`') }
            <Arrow className="library-course__arrow"/>
            {/* action button component */}
            <div className="library-course__description">
            <label>Course Description</label>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam iaculis commodo purus, eget rutrum nisl suscipit nec. Mauris a vehicula nunc. Quisque gravida, justo eget auctor dignissim, nunc magna porta justo, </p>
            </div>
            </div>
        )
    }
}

export default LibraryCourse;