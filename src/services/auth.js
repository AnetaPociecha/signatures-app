import axios from 'axios'


export function signIn(login, password) {


    axios.post('http://signmap-backend.herokuapp.com/login?email=jankowalski@gmail.com&password=jan', {})
        .then(function (response) {
            // handle success
            console.log(response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });

    //mock
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve({token: 'qwertyuiop', name: 'Jan Kowalski', login: 'jankowalski@gmail.com', group: 'AGH'});
        }, 300);
    })
    // throw "AAAAAAAAAAAAAAAA"
}

export function signOut(token) {

    //mock
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve({});
        }, 300);
    })
    // throw "AAAAAAAAAAAAAAAA"
}