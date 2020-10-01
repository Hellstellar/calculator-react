import React, { Component } from 'react';
import { Label } from 'semantic-ui-react'

class FlashMessage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }   
    }

    render() {
        const {error} = this.props;
        const { visible } = this.state
        if (this.state.visible) {
            return (
                <Label basic color='red' pointing='left'>
                    {error}
                </Label>
            )
        }
        else
            return null;
    }
}

export default FlashMessage;