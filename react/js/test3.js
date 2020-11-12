import React, { useRef, createRef, useState } from "react";
import ReactDOM from "react-dom";

function App() {
    const [renderIndex, setRenderIndex] = useState(1);
    const refFromUseRef = useRef();
    const refFromCreateRef = createRef();
    if (!refFromUseRef.current) {
        refFromUseRef.current = renderIndex;
    }
    if (!refFromCreateRef.current) {
        refFromCreateRef.current = renderIndex;
    }
    return (
        <div className="App">
            Current render index: {renderIndex}
            <br />
      First render index remembered within refFromUseRef.current:
            {refFromUseRef.current}
            <br />
      First render index unsuccessfully remembered within
      refFromCreateRef.current:
            {refFromCreateRef.current}
            <br />
            <button onClick={() => setRenderIndex(prev => prev + 1)}>
                Cause re-render
      </button>
        </div>
    );
}

document.body.innerHTML = "<div id='root'></div>";
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);