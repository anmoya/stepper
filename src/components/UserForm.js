import React, { Component } from 'react'

class UserForm extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio: ''
    }

    doStep = toward => {
        const { step } = this.state
        console.log(this.state.step)
        console.log(toward)
        this.setState({
            step: step + (toward === 'forward' ? 1 : -1)
        })

        console.log(this.state.step)
    }

    render() {
        return (
            <div>
                <h1>Alfonso</h1>
                <button onClick={() => this.doStep('forward')}>test doStep</button>
                <button onClick={() => this.doStep('back')}>test doStep back</button>
            </div>
        )
    }
}

export default UserForm