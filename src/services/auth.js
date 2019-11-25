export function signIn(login, password) {

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