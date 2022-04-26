import './ResumeTemplate.css';
import './login.css'
import React, { useState  } from 'react';
import { useNavigate  } from "react-router-dom";

function LoginLayout() {

    const navigate = useNavigate();

    const [Username, setuser] = useState('');
    const [password, setpass] = useState('');

    const login_check = () => {
        let user = 'Tanvi';
        let pass = '1234';
        if (user === Username) {
            if(pass === password) {
                navigate('/Resume');
            }
            else {
                alert("Enter valid password.")
            }
        }
        else {
            alert("Enter valid username..")
        }
    }
    return (
                <div className="form">
                        <div class="div" className="input-container">
                            <label class="label">Username </label>
                            <input class="input" type="text" name="uname" value={Username} onChange={(e) => {setuser(e.target.value)}} required />
                        </div>
                        <div class="div" className="input-container">
                            <label class="label"> Password </label>
                            <input class="input" type="password" name="pass" value={password} onChange={(e) => {setpass(e.target.value)}} required />
                        </div>
                        <div className="button-container">
                            <button class="button" onClick={() => login_check()}>Login</button>
                        </div>
                </div>
            );
}
export default LoginLayout;