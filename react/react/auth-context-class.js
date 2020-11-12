import React from 'react'

const AuthClassContext = React.createContext({
    isAuth: false,
    login: () => { }
})

export default AuthClassContext;
