import React, { useEffect } from 'react'
import "../App.css"
const SIgnup = () => {
    useEffect(() => {
        // Create a script element
        const script = document.createElement('script');

        // Set the script source to the external JavaScript file
        script.src = 'https://otpless.com/auth.js';

        script.cid = "49BHQOC1UL6SD3FSZLO8HQN4OEFQ7UF3";

        script.type = "text/javascript";

        // Append the script element to the document body
        document.body.appendChild(script);

        // Clean up function to remove the script when the component unmounts
        return () => {
            document.body.removeChild(script);
        };

    }, []); // The empty dependency array ensures that this effect runs only once when the component mounts

    useEffect(() => {
        window.otpless = (otplessUser) => {
            console.log(JSON.stringify(otplessUser));
            alert(JSON.stringify(otplessUser));
        };

    }, []);

    return (

        <div id="otpless-login-page">

        </div>
    )
}

export default SIgnup