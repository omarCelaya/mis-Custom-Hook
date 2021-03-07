import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = () => {
    //. obtener referencia al UserContext
    // setUser
    // id:123 , name: 'Fernando'
    const {setUser} = useContext(UserContext);
    return (
        <div>
            <h1>LoginScreen</h1>
            <hr/>
            <button className="btn btn-primary"
                    onClick={ ()=> setUser({
                        id: 123,
                        name: 'Fernando'
                    })}
            >
                Login
            </button>
        </div>
    )
}
