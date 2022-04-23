import React, {useState, useContext} from 'react';
import {AuthContext} from "./AuthContext";

export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const authContext = useContext(AuthContext);

    function login(e){
        e.preventDefault();
        if(password === 'mahmoud' &&  email==='mahmoud.com'){
            const token = 'mahmoud';
            localStorage.setItem('token', token);
            localStorage.setItem('email', email);
            authContext.setAuth({token, email});
        } else {
            alert('wrong credentials ');
        }
    }

    return (
        <form>
            <h2 className='display-4'>Login</h2>

            <input type="email" className="form-control" placeholder="email" value={email} 
                onChange={e => setEmail(e.target.value)} />
            <br />
            <input type="password" className="form-control" placeholder="password" value={password} 
                onChange={e => setPassword(e.target.value)} />
            <br />
            <button className="btn btn-primary" onClick={login}>Login</button>
        </form>
    );
}
