import {useState} from "react";
import {Child} from "./Child";

function App() {
    const [name, setName] = useState('Bob');

    const updateUserName = () => {
        setName('Lora');
    }

    return (
        <>
            <div className="App">
                <h2>Hello, {name}!</h2>
                <button onClick={updateUserName}>Update State</button>
            </div>
            <Child name={name} />
        </>
    )
}

// Props, State
// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             name: 'Bob',
//         }
//         this.updateUserName = this.updateUserName.bind(this);
//     }
//
//     updateUserName() {
//         this.setState({ name: this.state.name === 'Lora' ? 'Bob' : 'Lora' }, () => {
//             console.log(this.state.name);
//         });
//     }
//
//     render() {
//         const { name } = this.state;
//         return (
//             <>
//                 <div className="App">
//                     <h2>Hello, {name}!</h2>
//                     <button onClick={this.updateUserName}>Update State</button>
//                 </div>
//                 <Child name={name} />
//             </>
//         )
//     }
// }

export default App;
