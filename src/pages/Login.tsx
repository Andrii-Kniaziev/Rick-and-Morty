import React, {useContext, useEffect} from 'react';
import jwtDecode from "jwt-decode";
import {AuthContext} from "../context/context";

const Login = () => {
    const {setGoogleUser} = useContext(AuthContext);

    const handleAuthResponse = (response: any) => {
        console.log('Encoded JWT ID token: ' + response.credential);
        const userObject = jwtDecode(response.credential);
        console.log(userObject);
        setGoogleUser(userObject);
        localStorage.setItem('googleUser', JSON.stringify(userObject));
    };

    useEffect(() => {
        // @ts-ignore
        google.accounts.id.initialize({
            client_id: '275793562999-2ltbnuv5nlkf0vh80g6ir7joo06eqpft.apps.googleusercontent.com',
            callback: handleAuthResponse,
        });

        // @ts-ignore
        google.accounts.id.renderButton(
            document.getElementById('sign-in'),
            {theme: 'outline', size: 'large'}
        );
    }, []);

    return (
        <div style={{margin: 30, padding: 30,  border: '1px solid lightgray', borderRadius: 3}}>
            <div id="sign-in"></div>
        </div>
    );
};

export default Login;
