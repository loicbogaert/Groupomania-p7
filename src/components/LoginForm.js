import React from 'react';


const LoginForm = () => {
    return (
        <div className="signupForm">
            <h1>Connection</h1>
            <form>
                <label>Email</label>
                <input type="text" required />

                <label>Password</label>
                <input type="text" required />   

                 <input type="submit" value="Submit" className="submit"/>                       
            </form>
        </div>
    );
};

export default LoginForm;