import axios from "axios";
import config from "./config";

const mock = [
    {
        id: 1, groupName: 'AGH', groupMembers: [
            {
                id: 1, email: 'test.gmail.com', name: 'Jan', surname: 'Kowalski',
                currentLocation: {name: 'Rynek', longitude: 50.061430, latitude: 19.935885}
            },
            {
                id: 2, email: 'test.gmail.com', name: 'Jan', surname: 'Kowalski',
                currentLocation: null
            }]
    },
    {
        id: 2, groupName: 'UJ', groupMembers: [
            {
                id: 1, email: 'test.gmail.com', name: 'Monika', surname: 'Kowalska',
                currentLocation: {name: 'Rynek', longitude: 50.061430, latitude: 19.935885}
            },
            {
                id: 2, email: 'test.gmail.com', name: 'Jan', surname: 'Kowalski',
                currentLocation: null
            }]
    }
];

export function fetchGroups(userId) {
    // return axios.post(`https://signmap-backend.herokuapp.com/groups?userID=${userId}`, {}, config)
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