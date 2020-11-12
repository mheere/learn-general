import React, { useContext } from 'react'
import AuthFuncContext from './auth-context-func'

function ButtonFunc(props) {
    const context = useContext(AuthFuncContext)

    return (
        <button>{props.title} - isAuth: {context.isAuth.toString()}</button>
    )
}

export default ButtonFunc;
