import ApiInfo from "../helpers/apiInfo";

export function getToken() {
    return fetch(`${ApiInfo()}/api/v1/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({
            Username: 'batman',
            Password: 'batman'
        }),
    })
        .then(response => response.json())
}