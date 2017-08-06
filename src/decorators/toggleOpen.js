import React, {Component as ReactComponent} from 'react';

export default (OriginalComponent) => class WrapperComponent extends ReactComponent {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
        }
    }

    render() {
        return(
            <OriginalComponent {...this.props} {...this.state} toggleOpen = {this.toggleOpen}/>
        );
    }

    toggleOpen = (event) => {
        event && event.preventDefault && event.preventDefault();
        console.log('---', event);
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
}

