import React, { createRef, useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import XXXX from './utils';

class Username3 extends React.Component {
    state = { value: "" };

    changeValue(value) {
        this.setState({ value });
    }

    changeValue2 = (value) => {
        this.setState({ value });
    }

    render() {
        const { value } = this.state;
        return (
            <h1>
                <div>Inside Username3
                    {/* <input ref={this.props.abc}></input> */}
                    <Parent {...this.props} p1="hello">
                        <h3>
                            This is a h3 line
                        </h3>
                    </Parent>
                    {value}
                    {/* <button onClick={() => this.changeValue2('hi there')}>click me</button> */}
                </div>
            </h1>
        );
    }
}

function CustomTextInput(props) {
    return (
        <div>
            <input ref={props.abc}></input>
        </div>
    );
}

function Parent(props) {
    return (
        <div>
            My input: <CustomTextInput {...props} />
        </div>
    );
}

function MyList(props) {
    let obj = { value: 'lime' };
    let [state, setState] = useState(obj);

    let handleChange = (e) => {
        console.log(e.target.value);
        setState({ value: e.target.value })
    };

    // called every single time
    useEffect(() => {
        console.log("useEffect in MyList was called - should be every single time");
    })

    // called only once (componentDidMount)
    useEffect(() => {
        console.log("useEffect in MyList was called - should be only ONCE");
    }, [])

    // called when x changes (componentDidUpdate ish)
    useEffect(() => {
        console.log("useEffect in MyList was called - props.x is updated");
    }, [props.x])

    return (
        <React.Fragment>
            <select value={state.value} onChange={handleChange}>
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option value="coconut">Coconut</option>
                <option value="mango">Mango</option>
            </select>
            <MyOption chosenOption={state.value}></MyOption>
        </React.Fragment>
    )
}

class MyOption extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log("MyOption - componentDidMount");
    }

    componentDidUpdate() {
        console.log("MyOption - componentDidUpdate");
    }

    render() {
        return (<div>
            {this.props.chosenOption}
        </div>)
    }
}

// -------------

function App() {

    const [x, setX] = useState(0);

    let refInput = React.createRef();
    let refPassthrough = React.createRef();
    let refUserName = React.createRef();

    function clickHandler() {
        let newValue = refInput.current.value;
        refPassthrough.current.value = newValue;
        refUserName.current.changeValue(newValue);
        setX(x + 1);
    }

    return (
        <div>
            <button onClick={clickHandler}>Change Username</button>
            <input type="text" ref={refInput} />

            {/* // So we get to the entire Username2 instance */}
            <Username3 ref={refUserName} abc={refPassthrough} dummyprop="dummy prop" />

            <hr />
            <MyList x={x} />

            <hr />

        </div>
    );
}

console.log("Add5 - " + XXXX(5));

document.body.innerHTML = "<div id='root'></div>";
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

