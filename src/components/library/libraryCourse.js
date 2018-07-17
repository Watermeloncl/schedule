import React, { Component } from 'react';

class libraryCourse extends Component {
    render() {
        return (
            <div className="library-course">
                <label className="library-course__title">Problem Solving</label>
                {/* icon copmonent */}
                {/*arrow component*/}
                {/*action button component*/}
                <div className="library-course__description">
                    <label>Course Description</label>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin venenatis a purus eget laoreet. Vestibulum in fringilla sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce vehicula ultricies ultrices.</p>
                </div>
            </div>
        )
    }
}

export default libraryCourse;