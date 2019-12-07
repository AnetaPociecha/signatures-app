import axios from 'axios'
import config from "./config";

const mock = {id: 1, email: 'test.gmail.com', name: 'Jan', surname:'Kowalski',
    currentLocation: {name:'Rynek', longitude:50.061430,latitude:19.935885}};

export function signIn(login, password) {

    // return axios.post(`https://signmap-backend.herokuapp.com/login?email=${login}&password=${password}`, {}, config)
    //     .then(function (response) {
    //         console.log(response);
    //         return response.data
    //     })
    //     .catch(function (error) {
    //         throw error
    //     });

    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(mock);
        }, 300);
    })
}

export function signOut(token) {

    //mock
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve({});
        }, 300);
    })
    // throw "AAAAAAAAAAAAAAAA"
}