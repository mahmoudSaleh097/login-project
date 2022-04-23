import React, {useContext} from 'react';
import {AuthContext} from "./AuthContext";

export default function Header(){
    const authContext = useContext(AuthContext);

    function logout(){
        localStorage.removeItem('token');
        localStorage.removeItem('email');
        authContext.setAuth({});
    }

    return (
        <nav className="navbar  bg-light mt-2 mb-2 bg-info">
            <a className="navbar-brand mb-0 h1" href><h3 className='text-danger'>Mahmoud Test</h3></a>
            
            <div>
                {authContext.auth.email ? <div>
                    {authContext.auth.email}
                    {' '}
                    <button className="btn btn-danger btn-sm" onClick={logout}>Logout</button>
                </div> :<h3 className='text-warning'>you need to login !</h3>}
            </div>
        </nav>
    );
}
