import React, {useContext, useEffect} from 'react';
import jwtDecode from "jwt-decode";
import {AuthContext} from "../context/context";

const loadScript = (src: string) =>
    new Promise<void>((resolve, reject) => {
        if (document.querySelector(`script[src="${src}"]`)) return resolve()
        const script = document.createElement('script')
        script.src = src
        script.onload = () => resolve()
        script.onerror = (err) => reject(err)
        document.body.appendChild(script)
    });

const Login = () => {
    const {setGoogleUser} = useContext(AuthContext);

    const handleAuthResponse = (response: any) => {
        console.log('Response: ' + response);
        const userObject = jwtDecode(response.credential);
        console.log(userObject);
        setGoogleUser(userObject);
        localStorage.setItem('googleUser', JSON.stringify(userObject));
    };

    useEffect(() => {
        const src = 'https://accounts.google.com/gsi/client'
        const id = "275793562999-2ltbnuv5nlkf0vh80g6ir7joo06eqpft.apps.googleusercontent.com"

        loadScript(src)
            .then(() => {
                // @ts-ignore
                const _google = google;
                console.log('Google: ')
                console.log(_google)
                _google.accounts.id.initialize({
                    client_id: id,
                    callback: handleAuthResponse,
                })
                _google.accounts.id.renderButton(
                    document.getElementById('sign-in'),
                    { theme: 'outline', size: 'large' }
                )
            })
            .catch(console.error)
    }, []);

    return (
        <div style={{margin: 30, padding: 30,  border: '1px solid lightgray', borderRadius: 3}}>
            <div id="sign-in"></div>
        </div>
    );
};

export default Login;
