import { useState, useEffect } from 'react';

function CreateAccount() {
const [account, setAccount] = useState([]);

const addNewAccount = (acc) => {
    setAccount([...account, { description: acc}])


// Calling the POST API to add a new account when sign-up button is clicked
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    const requestingOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify({description: acc})
    };
    console.log(requestingOptions);

    fetch('http://localhost:3000/sign-up-details', requestingOptions)
        .then((response) => response.json())
        .then((result) => console.log(result))
        .catch((error) => console.log('error', error));
}}

