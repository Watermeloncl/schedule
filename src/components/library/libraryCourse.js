import React, { Component } from 'react';

import Arrow from '../arrow';
import Icon from '../icon';
import Action from '../action';

class libraryCourse extends Component {
    render() {
        return (
            <div className="library-course">
                <div className="library-course__title-check">
                    <label className="library-course__title">Problem Solving</label>
                    { Icon('fas fa-check', 'library-course__icon') }
                </div>
                <Arrow className="library-course__arrow"/>
                <Action className="library-course__action"/>
                <div className="library-course__description">
                    <label>Course Description</label>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin venenatis a purus eget laoreet. Vestibulum in fringilla sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce vehicula ultricies ultrices.</p>
                </div>
            </div>
        )
    }
}

export default libraryCourse;