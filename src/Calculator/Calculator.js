import React, { Component } from 'react';
import { Form, Input,  Button, Header, Icon, Segment, Divider } from 'semantic-ui-react'
import Operand from './Components/Operand';
import Operators from './Components/Operators'
import FlashMessage from './Components/FlashMessage'
import './Calculator.css'

class Calculator extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputOne: '',
            inputTwo: '',
            errorOne: '',
            errorTwo: '',
            result: '',
        }
    }

    applyOperation = event => {
        let { result, inputOne, inputTwo } = this.state
        const [isValid, a, b] = this.validate(inputOne, inputTwo);
        
        if(isValid) {
            this.setState({errorOne : ''})
            this.setState({errorTwo : ''})
            switch(event.target.id) {
                case 'plus' : 
                    result = a + b;
                    break;
                case 'minus' : 
                    result = a - b;
                    break;
                case 'multiply' : 
                    result = a * b;
                    break;
                case 'divide' : 
                    result = a / b;
                    break;    
            }
            this.setState({ result })
        }
    }

    validate(inputOne, inputTwo) {
        let isValid = true
        if(inputOne === '') {
            isValid = false
            this.setState({errorOne : 'Field empty!'})
        }
        if(inputTwo === '') {
            isValid = false
            this.setState({errorTwo : 'Field empty!'})
        }

        inputOne = Number(inputOne)
        inputTwo = Number(inputTwo)

        //Is a number validation
        if(isNaN(inputOne)) {
            isValid = false
            this.setState({errorOne : 'Number expected!'})
        }
        if(isNaN(inputTwo)) {
            isValid = false
            this.setState({errorTwo : 'Number expected!'})
        }

        return [isValid, inputOne, inputTwo]
    }

    inputChange = event => {
        if(event.target.id === 'input_one')
            this.setState({ inputOne : event.target.value});
        else
            this.setState({ inputTwo : event.target.value});
    }

    clearInput = () => {
        this.setState({ inputOne : ''});
        this.setState({ inputTwo : ''});
        this.setState({ result : ''});
    }

    render() {
        const {result, errorOne, errorTwo} = this.state;
        return (
            <Segment id = "calc-container" color='black' padded raised>
                <Header icon>
                    <Icon name='calculator' />
                </Header>

                <Form>
                    <Operand id="input_one" error={errorOne} value={this.state.inputOne} label = "Input A" inputChange = {this.inputChange} />
                    <Divider horizontal />
                    
                    <Operand id="input_two" error={errorTwo} value={this.state.inputTwo} label = "Input B" inputChange = {this.inputChange} />
                    <Divider horizontal />
                    
                    <Form.Field>
                        <Operators applyOperation={this.applyOperation} />
                    </Form.Field>
                    <Divider horizontal />
                    
                    <Form.Field>
                        <Button id='clear' onClick={this.clearInput} primary>Clear Query</Button>
                    </Form.Field>
                    <Divider horizontal />
                    
                    <Form.Field>
                        <Input style={{width: '50%'}} id='output' size='huge' value={result} label="Output" />
                    </Form.Field>
                    
                </Form>
                
            </Segment>
        )
    
    }
}

export default Calculator;