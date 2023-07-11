import React, { Component, PureComponent } from 'react';

class Reset extends PureComponent {
    render() {
        return (
            <button className='btn-reset' onClick={this.props.resetall}>Reset All</button>
        );
    }
}

export default Reset;