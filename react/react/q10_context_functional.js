import React, { createRef, useState, useContext } from 'react'
import ReactDOM from 'react-dom'
import AuthFuncContext from './auth-context-func'
import ButtonFunc from './q10_context_functional_button'

// A component in the middle doesn't have to
// pass the theme down explicitly anymore.
function Toolbar() {

    const context = useContext(AuthFuncContext)                 // *** THIS IS THE IMPORTANT PART ****

    const clickHandler = () => {
        context.login();
    }

    return (
        <div>
            <h4>In Toolbar - context: {context.isAuth.toString()}</h4>
            <button onClick={clickHandler}>update</button>
            <div></div>
            <ThemedButton />
        </div>
    );
}

class ThemedButton extends React.Component {

    static contextType = AuthFuncContext                        // *** THIS IS THE IMPORTANT PART ****

    componentDidMount() {
        let value = this.context;                               // *** Now I can use it here ****
    }
    componentDidUpdate() {
        let value = this.context;
    }

    render() {
        return (<React.Fragment>
            <ButtonFunc title="My Themed Button - FUNCTIONAL" />
            <ButtonClass title="My Themed Button - CLASS" />
        </React.Fragment>)
    }
}

// function ButtonFunc(props) {
//     const context = useContext(AuthFuncContext)

//     return (
//         <button>{props.title} - isAuth: {context.isAuth.toString()}</button>
//     )
// }

function ButtonClass(props) {
    return (
        <AuthFuncContext.Consumer>
            {
                context =>
                    <button>{props.title} - isAuth: {context.isAuth.toString()}</button>
            }
        </AuthFuncContext.Consumer>
    )
}


// -------------

function App() {

    const [state, setState] = useState({
        isAuth: false
    })

    let doLogin = () => {
        console.log("doLogin")
        setState({ isAuth: true })
    };

    return (
        <AuthFuncContext.Provider value={{
            isAuth: state.isAuth,
            login: doLogin
        }}>
            <div>
                <Toolbar></Toolbar>
            </div>
        </AuthFuncContext.Provider>
    );
}

document.body.innerHTML = "<div id='root'></div>";
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
