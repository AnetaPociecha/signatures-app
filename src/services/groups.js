import axios from "axios";
import config from "./config";

const mock = [
    {
        id: 1, groupName: 'AGH', groupMembers: [
            {
                id: 1, email: 'marcinkowalski.gmail.com', name: 'Marcin', surname: 'Kowalski',
                currentLocation: {name: 'Rynek Główny 1, 31-008 Kraków, Polska', longitude: 50.061430, latitude: 19.935885}
            },
            {
                id: 2, email: 'nataliakowalska.gmail.com', name: 'Natalia', surname: 'Kowalska',
                currentLocation: null
            }]
    },
    {
        id: 2, groupName: 'UJ', groupMembers: [
            {
                id: 1, email: 'tomaszkowalski.gmail.com', name: 'Tomasz', surname: 'Kowalski',
                currentLocation: {name: 'Rynek Główny 1, 31-008 Kraków, Polska', longitude: 50.061430, latitude: 19.935885}
            },
            {
                id: 2, email: 'sandrakowalski.gmail.com', name: 'Sandra', surname: 'Kowalska',
                currentLocation: null
            }]
    }
];

export function fetchGroups(userId) {

    // return axios.get(`https://signmap-backend.herokuapp.com/groups?userID=${userId}`, config)
    //     .then(function (response) {
    //         console.log(response);
    //         return response.data
    //     })
    //     .catch(function (error) {
    //         throw error
    //     })


    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(mock);
        }, 100);
    })
}