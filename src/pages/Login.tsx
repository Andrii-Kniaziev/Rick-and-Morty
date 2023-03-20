import React, {useContext} from 'react';
import {AuthContext} from "../context/context";
import {LoginSocialFacebook, LoginSocialGoogle} from "reactjs-social-login";
import {FacebookLoginButton, GoogleLoginButton} from "react-social-login-buttons";
import {AuthUser} from "../types/types";

const Login = () => {
    const {setAuthUser} = useContext(AuthContext);

    const handleAuthResponse = (response: any) => {
        const authUser = response.data;
        authUser.provider = response.provider;
        //authUser.picture = authUser.provider === 'google' ? authUser.picture : authUser.picture.data.url;

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

            {/*<LoginSocialFacebook appId="1256828378525400"*/}
            {/*                     onResolve={handleAuthResponse}*/}
            {/*                     onReject={(error) => console.error(error)}*/}
            {/*>*/}
            {/*    <FacebookLoginButton/>*/}
            {/*</LoginSocialFacebook>*/}
        </div>
    );
};

export default Login;
