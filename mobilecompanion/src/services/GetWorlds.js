import ApiInfo from "../helpers/apiInfo";

export async function getWorlds(token) {
    const headers = {'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json'}
    const request = await fetch(`${ApiInfo()}/api/v1/worlds`, {headers})
    const response = await request;
    const parsed = await response.json();
    return (parsed)
}