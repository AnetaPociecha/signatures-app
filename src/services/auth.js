import axios from 'axios'
import config from "./config";

export function signIn(login, password) {

    return axios.post(`https://signmap-backend.herokuapp.com/login?email=${login}&password=${password}`, {}, config)
        .then(function (response) {
            console.log(response);
            return response.data
        })
        .catch(function (error) {
            throw error
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