import React, { Component } from 'react';

class LibraryCourse extends Component {
    render() {
        return (
            <div className="library-course">
            <label className="library-course__title">Problem Solving</label>
            {/* icon component */}
            {/* arrow component */}
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