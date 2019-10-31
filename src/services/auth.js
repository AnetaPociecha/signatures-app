import axios from 'axios'

const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
};

const data = {login:"ana",password:"password"};

export function testApiCall() {

    axios.get('https://randomuser.me/api/')
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });


    axios.post('http://localhost:8080/api/auth', JSON.stringify(data), {
        headers: headers
    })
        .then((response) => {
            console.log('response');
            console.log(response)
        })
        .catch((error) => {
            console.log("error");
            console.log(error)
        });

}

export function signIn(login, password) {

    //mock
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve({token: 'qwertyuiop', name: 'Aneta Pociecha', login: 'login'});
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