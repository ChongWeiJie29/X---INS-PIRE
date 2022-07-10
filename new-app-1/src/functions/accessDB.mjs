

export async function checkUserName(username) {
    fetch('../database/users.json').then(response => {
        if (!response.ok) {
            throw new Error("HTTP error " + response.status);
        }
        return response.json();
    })
    .then(json => {
        this.users = json;
        console.log(this.users);
    })
    .catch(function () {
        this.dataError = true;
    })
}
