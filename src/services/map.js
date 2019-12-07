export function setUserLocation(location, token) {

    //mock
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve({
                latlng: location,
                name: 'Rynek Główny 41, 31-013 Kraków'
            });
        }, 300);
    })
    // throw "AAAAAAAAAAAAAAAA"
}

export function removeUserLocation(token) {

    //mock
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve({});
        }, 300);
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
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(sMock);
        }, 300);
    })
}
