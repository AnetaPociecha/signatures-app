import axios from "axios";
import config from "./config";
import key from './key/key'

export function setUserLocation(location, token) {

    // //mock
    // return new Promise(function (resolve, reject) {
    //     setTimeout(function () {
    //         resolve({
    //             latlng: location,
    //             name: 'Rynek Główny 41, 31-013 Kraków'
    //         });
    //     }, 50);
    // })

    //mock
    // return new Promise(function (resolve, reject) {
    //     setTimeout(function () {
    //         resolve("Test");
    //     }, 50);
    // })


    return axios.get(`https://reverse.geocoder.api.here.com/6.2/reversegeocode.json?prox=${location[0]}%2C${location[1]}%2C250&mode=retrieveAddresses&maxresults=1&gen=9&app_id=${key.appId}&app_code=${key.appCode}`, config)
        .then(function (response) {
            return response.data.Response.View[0].Result[0].Location.Address.Label
        })
        .catch(function (error) {
            throw error
        });


    // throw "AAAAAAAAAAAAAAAA"
}

export function removeUserLocation(token) {

    //mock
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve({});
        }, 50);
    })
    // throw "AAAAAAAAAAAAAAAA"
}

const sMock = [
    {name: 'Rynek Główny 41, 31-013 Kraków', longitude: 50.061430, latitude: 19.935885},
    {name: 'Rynek Główny 41, 31-013 Kraków', longitude: 50.061055, latitude: 19.937306},
    {name: 'Rynek Główny 41, 31-013 Kraków', longitude: 50.061964, latitude: 19.938553},
    {name: 'Rynek Główny 41, 31-013 Kraków', longitude: 50.062379, latitude: 19.937052},
    {name: 'Rynek Główny 41, 31-013 Kraków', longitude: 50.067882, latitude: 19.911438},
];

export function fetchSuggestions(latitude, longitude) {

    // return axios.post(`https://signmap-backend.herokuapp.com/locations?latitude=${latitude}&longitude=${longitude}`, {}, config)
    //     .then(function (response) {
    //         console.log(response);
    //         return response.data
    //     })
    //     .catch(function (error) {
    //         throw error
    //     });


    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(sMock);
        }, 50);
    })
}
