import React, { createRef, useState, useCallback, useMemo, useEffect } from 'react'
import ReactDOM from 'react-dom'

// because you can't have a PureComponent as a functional component we introduce React.memo and/or useCallback
function TestComp(props) {
    console.log('rendering TestComp')   // 

    useEffect(() => {
        React.Children.forEach(props.children, child => {
            console.log('displayName =', child.displayName)
        })
    });

    return (
        <>
            TestComp
            <button onClick={props.func}>Set Count in 'TestComp'</button>
            {props.children}
        </>
    )
}

// A simple pure component WON'T rerender either as long as the props don't change
class TestCompPure extends React.PureComponent {
    render() {
        console.log('rendering TestCompPure')   // 
        return (
            <>
                <div>
                    TestCompPure - will add {this.props.addCount}
                    {/* <button onClick={this.props.func}>Set Count in 'TestCompPure'</button> */}
                </div>
            </>
        )
    }
}
TestCompPure.displayName = 'TestCompPure';
TestCompPure.aaa = 'hello';

TestComp = React.memo(TestComp)

function App() {
    const [count, setCount] = useState(0)
    const [x, setX] = useState(50)
    const [isMale, setIsMale] = useState("isMale");

    // 
    //const memoTestComp = useMemo(() => TestComp, [x])
    const memoSetCount = useCallback(() => setCount(count + 1), [x]);

    const toggleCheckbox = () => {

    }

    return (
        <>
            count: { count} | x: { x}
            <button onClick={() => setCount(count + 1)}>Set Count</button>
            <button onClick={() => setX(count + 1)}>Set X</button>
            {/* <TestComp func={() => setCount(count + 2)} /> */}
            {/* <TestComp func={memSetCount} /> */}
            <TestComp>
                <h3>Marcel</h3>
                <TestCompPure addCount='99'></TestCompPure>
                <input type="checkbox" >Is Male</input>
                <Checkbox
                    label={isMale}
                    handleCheckboxChange={toggleCheckbox}
                    key={label}
                />
            </TestComp>
            {/* <TestCompPure func={() => setCount(count + 2)} addCount="5" count={x} /> */}
            {/* <TestCompPure func={memoSetCount} /> */}
        </>
    )
}

document.body.innerHTML = "<div id='root'></div>";
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);