import React, { createRef, useState, useContext } from 'react'
import ReactDOM from 'react-dom'
import AuthClassContext from './auth-context-class'

function Toolbar() {
    return (
        <div>
            <ThemedButton />
        </div>
    );
}

class ThemedButton extends React.Component {

    static contextType = AuthClassContext

    componentDidMount() {
        console.log("class - componentDidMount - " + this.context.isAuth.toString())
    }
    componentDidUpdate() {
        console.log("class - componentDidUpdate - " + this.context.isAuth.toString())
    }

    render() {
        return <Button title="My Themed Button" />;
    }
}

function Button(props) {
    return (
        <AuthClassContext.Consumer>
            {
                context =>
                    <button onClick={context.login}>{props.title} - isAuth: {context.isAuth.toString()}</button>
            }
        </AuthClassContext.Consumer>
    )
}

// -------------

function App() {

    const [state, setState] = useState({
        isAuth: false
    })

    let doLogin = () => {
        setState({ isAuth: true })
    };

    return (
        <AuthClassContext.Provider value={{
            isAuth: state.isAuth,
            login: doLogin
        }}>
            <div>
                <Toolbar></Toolbar>
            </div>
        </AuthClassContext.Provider>
    );
}

document.body.innerHTML = "<div id='root'></div>";
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
