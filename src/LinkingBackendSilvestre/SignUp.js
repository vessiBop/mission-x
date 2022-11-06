import request from 'superagent'
import axios from 'axios'

const rootUrlSignUpStudent = 'localhost:4000//authentication/signup-student'

axios({
    method: 'post',
    url: rootUrlSignUpStudent,
    data: { 
        name: 'Ves',
        email: 'example@example.com',
        password: 'example-password'
    }
})




























// export default function signUp (newUser) {
//    console.log(newUser)
//     return request
//       .post(rootUrlSignUp)
//       .send(newUser)
//       .then(res => {
//         return null
//       })
//       .catch(e => console.log(e))
//   }


// function SigningUp(name, email, password) {
//     const myHeaders = new Headers();
//     myHeaders.append('Content-Type', 'application/json');

//     const requestOptions = {
//         method: 'POST',
//         headers: myHeaders,
//         body: JSON.stringify({name, email, password})
//     };
//     console.log(requestOptions)

//     fetch('http://localhost:4000/authentication/signup', requestOptions)  
//         .then((response) => response.json())
//         .then((result) => console.log(result))
//         .catch((error) => console.log('error', error));
// };


// export default SigningUp;