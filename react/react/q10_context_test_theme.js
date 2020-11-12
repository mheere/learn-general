import React, { createRef, useState, useContext } from 'react'
import ReactDOM from 'react-dom'

const themes = {
    light: {
        foreground: '#000000',
        background: '#eeeeee',
    },
    dark: {
        foreground: '#ffffff',
        background: '#222222',
    },
};

const ThemeContext = React.createContext(
    {
        toggleTheme: null,
        ...themes.dark
    }
);

function Toolbar() {

    const context = useContext(ThemeContext)                 // *** THIS IS THE IMPORTANT PART ****

    const clickHandler = () => {
        context.toggleTheme();
    }

    return (
        <div>
            {/* <h4>In Toolbar - context: {context.isAuth.toString()}</h4> */}
            <button onClick={clickHandler}>update</button>
            <div></div>
            <ThemedButton />
        </div>
    );
}

// 
class ThemedButton extends React.Component {

    static contextType = ThemeContext                           // *** THIS IS THE IMPORTANT PART ****

    componentDidMount() {
        let value = this.context;                               // *** Now I can use it here ****
        console.log("componentDidMount " + this.context.theme.foreground)
    }

    componentDidUpdate() {
        let value = this.context;                               // *** Now I can use it here ****
        console.log("componentDidUpdate " + this.context.theme.foreground)
    }

    render() {
        return (<React.Fragment>
            <ButtonFunc title="My Themed Button - FUNCTIONAL" />
            <ButtonClass title="My Themed Button - CLASS" />
        </React.Fragment>)
    }
}

// this is a clean way of being a consumer - FUNCTIONAL
function ButtonFunc(props) {
    const context = useContext(ThemeContext)

    return (
        <button>{props.title} - theme: {context.theme.foreground}</button>
    )
}

// this is a cumbersome way of being a consumer - CLASS BASED
function ButtonClass(props) {
    return (
        <ThemeContext.Consumer>
            {
                context =>
                    <React.Fragment>
                        <button >{props.title} - theme: {context.theme.foreground}</button>
                        <input ref={context.ref}></input>
                    </React.Fragment>
            }
        </ThemeContext.Consumer>
    )
}

// -------------

function App() {

    const [state, setState] = useState({
        theme: themes.light
    })

    let ref = React.createRef();

    let toggleTheme = () => {
        setState({ theme: state.theme == themes.light ? themes.dark : themes.light })
        ref.current.value = "Hello toggle"
    };

    return (
        <ThemeContext.Provider value={{ ...state, toggleTheme, ref }}>
            <div>
                <Toolbar></Toolbar>
            </div>
        </ThemeContext.Provider>
    );
}

document.body.innerHTML = "<div id='root'></div>";
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
