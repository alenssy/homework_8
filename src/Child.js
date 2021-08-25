import React from 'react';

class Child extends React.Component {
    render() {
        return (
            <h2>{this.props.name}</h2>
        )
    }
}

export default Child;
