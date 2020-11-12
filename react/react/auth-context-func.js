import React from 'react'

const AuthFuncContext = React.createContext({
    isAuth: false,
    login: () => { }
})

export const AuthFuncProvider = AuthFuncContext.Provider;   // don't really need this - I grab them from the default
export const AuthFuncConsumer = AuthFuncContext.Consumer;   // don't really need this - I grab them from the default

export default AuthFuncContext;

