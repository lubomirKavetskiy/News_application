import React from 'react'
import {render} from 'react-dom'
class Comp extends React.Component {
    render(){
        return (
            <p>Hi {this.props.name}</p>
        );
    }
}

render(
    <Comp name="Lubmir"/>,
    document.getElementById('container')
);