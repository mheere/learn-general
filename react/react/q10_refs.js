import React, { createRef, useState } from 'react'
import ReactDOM from 'react-dom'

// My TEST
class Username extends React.Component {
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
                {value}
                <button onClick={() => this.changeValue2('hi there')}>click me</button>
            </h1>
        );
    }
}

class Username2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: "" };
        this.refBtn = React.createRef();
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        debugger;
        this.refBtn.current.onclick = this.handleChange;
        this.refBtn.current.click();
    }

    handleChange() {
        // Update component state whenever the data source changes
        this.setState({
            value: "I was clicked - through componenetDidMount!"
        });
    }

    changeValue(value) {
        this.setState({ value });
    }

    changeValue2 = (value) => {
        //debugger;
        this.setState({ value });
    }

    render() {
        const { value } = this.state;
        return (
            <h1>
                <input ref={this.props.myref}></input>
                {value}
                <button onClick={() => this.changeValue2('hi there')}>click me</button>
                <button ref={this.refBtn} >click2 me</button>
            </h1>
        );
    }
}

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

class MyOption extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div>
            {this.props.chosenOption}
        </div>)
    }
}

// -------------

function App() {

    let refInput = React.createRef();
    let refUserName = React.createRef();

    function clickHandler() {
        console.log(refInput);
        //refUserName.current.changeValue(refInput.current.value);
        refInput.current.value = refUserName.current.value;
    }

    return (
        <div>
            <button onClick={clickHandler}>Change Username</button>
            <input type="text" ref={refInput} />

            {/* // So we get to the entire Username2 instance */}
            <Username3 abc={refUserName} dummyprop="dummy prop" />

            <hr />
            <MyList />

            <hr></hr>

        </div>
    );
}

document.body.innerHTML = "<div id='root'></div>";
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
