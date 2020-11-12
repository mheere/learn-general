import React, { createRef, useState, useCallback, useMemo, useEffect } from 'react'
import ReactDOM, { render } from 'react-dom'

// // This function takes a component...  USES a normal Component inside
// function withModal(ModelContentComponent, getData) {
//     return class extends React.Component {
//         constructor(props) {
//             super(props);
//             this.elRoot = document.getElementById('root');
//             this.el = document.createElement('div', { className: 'modal-parent' });
//         }

//         componentDidMount() {
//             this.elRoot.appendChild(this.el);
//         }

//         componentWillUnmount() {
//             this.elRoot.removeChild(this.el);
//         }

//         render() {
//             return (
//                 <div className='modal-parent'>
//                     <ModelContentComponent {...this.props}></ModelContentComponent>
//                     <h1>My Modal Content - props: {getData().name}</h1>
//                     <button onClick={this.props.onClose}>Close Modal Form</button>
//                 </div>
//             );
//         }
//     };
// }

// This function takes a component... ALSO USES a functional component inside
function withModal(ModelContentComponent, getData) {
    return props => {
        const elRoot = document.getElementById('root');
        const el = document.createElement('div', { className: 'modal-parent' });

        useEffect(() => {
            elRoot.appendChild(el);
            return () => {
                elRoot.removeChild(el);
            }
        }, [])

        return (
            <div className='modal-parent'>
                <ModelContentComponent {...props}></ModelContentComponent>
                <h1>My Modal Content - props: {getData().name}</h1>
                <button onClick={props.onClose}>Close Modal Form</button>
            </div>
        );
    };
}

function ModalContent(props) {
    return (
        <h1>My Modal Content - props: {props.age} </h1>
    )
}

const MyStuff = withModal(ModalContent, () => {
    return {
        name: 'Marcel', age: '50'
    }
});

class Parent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showModal: false };
    }

    handleClick = () => {
        this.setState({ showModal: !this.state.showModal })
    }

    render() {
        let x = <MyStuff age='44' onClose={this.handleClick} />
        if (!this.state.showModal)
            x = null;

        return (
            <React.Fragment>
                <p>Stuff happening on the parent</p>
                <button onClick={this.handleClick}>Toggle Modal</button>
                {x}
            </React.Fragment>
        );
    }
}

function Child() {
    return (
        <div className="modal">
            <button>Click</button>
        </div>
    );
}


document.body.innerHTML = "<div id='root'></div>";
const rootElement = document.getElementById("root");
ReactDOM.render(<Parent />, rootElement);