export function setUserLocation(location, token) {

    //mock
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve({location});
        }, 300);
    })
    // throw "AAAAAAAAAAAAAAAA"
}

export function removeUserLocation(token) {

    //mock
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve({});
        }, 300);
    })
    // throw "AAAAAAAAAAAAAAAA"
}