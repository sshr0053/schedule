import React, { Component } from 'react';

class ProgressTracker extends Component {
    render() {
        return (
            <div className="progress-tracker">
            <label className="progresstracker__label">Progress Tracker</label>
            <div className="progresstracker__percentage">
            0%
            </div>
            </div>
        )
    }
}

export default ProgressTracker;