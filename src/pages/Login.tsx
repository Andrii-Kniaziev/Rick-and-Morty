import React, {useContext} from 'react';
import {AuthContext} from "../context/context";
import {LoginSocialGoogle} from "reactjs-social-login";
import {GoogleLoginButton} from "react-social-login-buttons";
import {AuthUser} from "../types/types";

const Login = () => {
    const {setAuthUser} = useContext(AuthContext);

    const handleAuthResponse = (response: any) => {
        const authUser = response.data;
        authUser.provider = response.provider;

        setAuthUser(new AuthUser(authUser.provider, authUser.name, authUser.picture, true));
        localStorage.setItem('authUser', JSON.stringify(authUser));
    };

    return (
        <div style={{margin: 30, padding: 30,  border: '1px solid lightgray', borderRadius: 3}}>
            <LoginSocialGoogle client_id="275793562999-2ltbnuv5nlkf0vh80g6ir7joo06eqpft.apps.googleusercontent.com"
                               onResolve={handleAuthResponse}
                               onReject={(error) => console.error(error)}
            >
                <GoogleLoginButton/>
            </LoginSocialGoogle>
        </div>
    );
};

export default Login;
