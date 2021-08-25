import {useEffect, useState} from "react";
import Child from "./Child";

// Props, State, Lifecycle hooks !== Hooks
const App = () => {
    const [name, setName] = useState('Bob');
    const [isToggle, setIsToggle] = useState(false);

    useEffect(() => {
        console.log('first');
        // componentDidMount
        return () => {
            // componentWillUnMount
        }
    }, [])

    useEffect(() => {
        console.log('second');
        // componentDidUpdate
    }, [name])

    const updateUserName = () => {
        setName(name === 'Lora' ? 'Bob' : 'Lora');
        setIsToggle(!isToggle);
    }

    console.log('render');
    return (
        <>
            <div className="App">
                <h2>Hello, {name}!</h2>
                <button onClick={updateUserName}>Update State</button>
            </div>
            {isToggle ? <Child name={name} /> : null}
        </>
    )
}

export default App;
