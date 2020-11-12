import React, { createRef, useState, useCallback, useMemo, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'

function TestComp(props) {
    
    console.log('rendering TestComp')   // 

    // useEffect(() => {
    //     React.Children.forEach(props.children, child => {
    //         console.log('displayName =', child.displayName)
    //     })
    // });

    return (
        <>
            TestComp
            <button onClick={props.func}>Set Count in 'TestComp'</button>
            {props.children}
        </>
    )
}

// this ensures that a shallow compare is done of the props and if these haven't changed a rerender won't happen
TestComp = React.memo(TestComp)

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



function App() {
    const [count, setCount] = useState(0)
    const [x, setX] = useState(50)
    const [name, setName] = useState("name");

    // 
    //const memoTestComp = useMemo(() => TestComp, [x])
    //const memoSetCount = useCallback(() => setCount(count + 1), [x]);

    const memoSetCount = useMemo(() => setCount(count + 2), [x]);
    const refName = React.createRef();

    return (
        <>
            <p>
                count: { count} | x: { x} | name: {name}
            </p>
            <button onClick={() => setCount(count + 1)}>Set Count</button>
            <button onClick={() => setX(count + 1)}>Set X</button>

            {/* <TestComp  /> */}
            {/* <TestComp func={() => setCount(count + 2)} /> */}
            
            {/* <TestComp func={() => setName(refName.current.value)} /> */}
            <TestComp func={memoSetCount} />
            <input ref={refName} />

            {/* <TestComp func={memSetCount} /> */}
            {/* <TestComp>
                <h3>Marcel</h3>
                <TestCompPure addCount='99'></TestCompPure>
            </TestComp> */}
            {/* <TestCompPure func={() => setCount(count + 2)} addCount="5" count={x} /> */}
            {/* <TestCompPure func={memoSetCount} /> */}
        </>
    )
}

document.body.innerHTML = "<div id='root'></div>";
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);