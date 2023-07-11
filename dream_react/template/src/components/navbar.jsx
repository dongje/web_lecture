import React, { Component, PureComponent } from 'react';

class Navbar extends PureComponent {

    state = {
        counts:0
    }

    set = () => {

    }

    render() {
        // const sum = this.props.count;
        // if(this.state.counts != sum){
        //     this.setState({counts : sum});
        // }
        return (
            <navbar>
                <i className="fa-solid fa-leaf"></i>
                <span> Habit Tracker </span>
                <span className='all-count'>{this.props.count}</span>
            </navbar>
        );
    }
}

export default Navbar;