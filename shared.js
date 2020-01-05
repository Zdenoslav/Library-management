// the URI for our local node Library Server
const base_url = "http://127.0.0.1:3000";

function getAllBooks(callback) {
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', base_url + "/books" + '?allEntities=true');
    xhttp.send();
    xhttp.addEventListener('load', function() {
        callback(JSON.parse(this.response));
    });
}

function getAllUsers(callback) {
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', base_url + "/users");
    xhttp.send();
    xhttp.addEventListener('load', function() {
        callback(JSON.parse(this.response))
    });
}
