import React, { Component } from 'react'
import Button from './Button';

class Disp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 0
        }
        this.add = this.add.bind(this)
        this.dec = this.dec.bind(this)
    }

    add(){
        const total = this.state.value + 1;
        this.setState({
            value: total
        })
    }

    dec(){
        const total =this.state.value - 1;
        this.setState({
            value: total
        })
    }

    render() {
        return(
            <div>
                <Button action={this.add} name='+'/>
                <h1>{this.state.value}</h1>
                <Button action={this.dec} name='-'/>
            </div>
        )
    }
}

export default Disp