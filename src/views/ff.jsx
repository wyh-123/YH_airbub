import React, { PureComponent } from 'react'

export default class Ff extends PureComponent {
    constructor() {
        super()
        this.state = {
            number: 0
        }
    }
    componentDidMount() {
        this.setState((prevState, props) => {
            return { number: prevState.number + 1 };
        }, () => {
            console.log(this.state);//
        });
        setTimeout(() => {
            this.setState((prevState, props) => {
                return { number: prevState.number + 1 };
            }, () => {
                console.log(this.state);//2
            })
        }, 0)
    }
    render() {
        return (
            <div>ff</div>
        )
    }
}
