import {Component, createRef} from "react";

class Battle extends Component {
    constructor() {
        super();
        this.ref = createRef();
    }
    // state = {
    //     email: ''
    // }

    // handleEmailField = (event) => {
    //     this.setState({ [event.target.name]: event.target.value });
    // }
    //
    submitHandler = (event) => {
        event.preventDefault();
        console.log(this.ref.current.value);
        // console.log(this.state);
    }

    render() {
        // console.log(this.state.email)
        return (
            <div className='home-container'>
                <form onSubmit={this.submitHandler}>
                    <input
                        ref={this.ref}
                        type="text"
                        // name='email'
                        // value={this.state.email}
                        // onChange={this.handleEmailField}
                    />
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

export default Battle;
