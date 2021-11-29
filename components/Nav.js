import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

function Nav() {

    const {
        state: { user },
        dispatch
    } = useContext(AuthContext)

    const nav1 = user?.isAuth ? user?.email : "SIGN UP";
    const nav2 = user ? "Logout" : "Login";
    const logout = user ? logoutFunc : () => {};

    function logoutFunc() {
        dispatch({
            type: "LOGOUT"
        })
    }

    return (
        <div>
            <span>{nav1}</span>
            <span onClick={() => logout()}>{nav2}</span>
        </div>
    )
}